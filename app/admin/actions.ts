'use server'

import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'
import { createClient, createServiceClient } from '@/lib/supabase/server'

const ADMIN_EMAIL = process.env.ADMIN_EMAIL!

export async function loginAction(_prevState: { error: string }, formData: FormData) {
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  if (email !== ADMIN_EMAIL) {
    return { error: 'Accès non autorisé.' }
  }

  const supabase = await createClient()
  const { error } = await supabase.auth.signInWithPassword({ email, password })

  if (error) {
    return { error: 'Email ou mot de passe incorrect.' }
  }

  redirect('/admin')
}

export async function deleteEntriesAction(ids: string[]) {
  if (!ids.length) return { error: 'Aucun ID fourni.' }

  const supabase = await createServiceClient()
  const { error } = await supabase
    .from('waitlist')
    .delete()
    .in('id', ids)

  if (error) return { error: error.message }
  revalidatePath('/admin')
  return { success: true }
}

export async function logoutAction() {
  const supabase = await createClient()
  await supabase.auth.signOut()
  redirect('/admin/login')
}
