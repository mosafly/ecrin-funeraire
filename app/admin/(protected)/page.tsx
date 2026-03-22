import { createClient } from '@/lib/supabase/server'
import type { WaitlistRow } from '@/lib/types'
import AdminTable from './AdminTable'

export const dynamic = 'force-dynamic'

export default async function AdminPage() {
  const supabase = await createClient()

  const { data: waitlist } = await supabase
    .from('waitlist')
    .select('*')
    .order('created_at', { ascending: false })

  const entries = (waitlist ?? []) as WaitlistRow[]

  return (
    <div>
      <h1 style={{
        fontFamily: 'Cormorant Garamond, Georgia, serif', fontWeight: 300,
        fontSize: '40px', color: '#080d1e', marginBottom: '8px',
      }}>
        Liste d&apos;attente
      </h1>
      <p style={{
        fontFamily: 'Inter, sans-serif', fontSize: '14px',
        color: '#6b7280', marginBottom: '32px',
      }}>
        {entries.length} inscription{entries.length !== 1 ? 's' : ''}
      </p>

      <AdminTable entries={entries} />
    </div>
  )
}
