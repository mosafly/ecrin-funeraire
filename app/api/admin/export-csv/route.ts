import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'

export async function GET() {
  const supabase = await createClient()

  // Vérification auth
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) {
    return NextResponse.json({ error: 'Non autorisé' }, { status: 401 })
  }

  const { data, error } = await supabase
    .from('waitlist')
    .select('email, source, created_at, sheets_synced')
    .order('created_at', { ascending: false })

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  const rows = data ?? []
  const header = 'Email,Source,Date d\'inscription,Sheets synced'
  const lines = rows.map(r =>
    [
      `"${r.email}"`,
      `"${r.source}"`,
      `"${new Date(r.created_at).toLocaleString('fr-FR', { timeZone: 'Europe/Paris' })}"`,
      r.sheets_synced ? 'Oui' : 'Non',
    ].join(',')
  )

  const csv = [header, ...lines].join('\n')
  const date = new Date().toISOString().slice(0, 10)

  return new NextResponse(csv, {
    headers: {
      'Content-Type': 'text/csv; charset=utf-8',
      'Content-Disposition': `attachment; filename="ecrin-waitlist-${date}.csv"`,
    },
  })
}
