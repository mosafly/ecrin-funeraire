import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { logoutAction } from '@/app/admin/actions'

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/admin/login')
  }

  return (
    <div style={{ minHeight: '100vh', background: '#f9fafb' }}>
      <div style={{
        background: '#080d1e', padding: '0 48px', height: '72px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <span style={{
          fontFamily: 'Georgia, serif', fontSize: '20px',
          letterSpacing: '2px', textTransform: 'uppercase', color: '#fff',
        }}>
          Admin — L&apos;Écrin Funéraire
        </span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <a href="/" style={{
            fontFamily: 'Inter, sans-serif', fontSize: '12px',
            letterSpacing: '1.4px', textTransform: 'uppercase', color: '#9ca3af',
            textDecoration: 'none',
          }}>
            Voir le site →
          </a>
          <form action={logoutAction}>
            <button type="submit" style={{
              fontFamily: 'Inter, sans-serif', fontSize: '12px',
              letterSpacing: '1.4px', textTransform: 'uppercase', color: '#9ca3af',
              background: 'none', border: 'none', cursor: 'pointer',
            }}>
              Déconnexion
            </button>
          </form>
        </div>
      </div>
      <div style={{ padding: '48px' }}>
        {children}
      </div>
    </div>
  )
}
