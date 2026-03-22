import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

const ADMIN_EMAIL = process.env.ADMIN_EMAIL!

export async function middleware(request: NextRequest) {
  let supabaseResponse = NextResponse.next({ request })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value)
          )
          supabaseResponse = NextResponse.next({ request })
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          )
        },
      },
    }
  )

  // Refresh de la session — doit être appelé dans le middleware
  const { data: { user } } = await supabase.auth.getUser()

  const pathname = request.nextUrl.pathname
  const isLoginPage = pathname === '/admin/login'
  const isAuthCallback = pathname.startsWith('/auth/callback')

  // Laisser passer la callback Supabase sans vérification
  if (isAuthCallback) {
    return supabaseResponse
  }

  // Protéger toutes les routes /admin sauf /admin/login
  if (pathname.startsWith('/admin') && !isLoginPage) {
    if (!user || user.email !== ADMIN_EMAIL) {
      return NextResponse.redirect(new URL('/admin/login', request.url))
    }
  }

  // Utilisateur déjà connecté qui va sur /admin/login → rediriger vers /admin
  if (isLoginPage && user && user.email === ADMIN_EMAIL) {
    return NextResponse.redirect(new URL('/admin', request.url))
  }

  return supabaseResponse
}

export const config = {
  matcher: ['/admin/:path*', '/auth/callback'],
}
