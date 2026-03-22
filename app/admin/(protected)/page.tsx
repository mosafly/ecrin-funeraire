import { createClient } from '@/lib/supabase/server'
import type { WaitlistRow } from '@/lib/types'

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

      <div style={{
        background: '#fff', border: '1px solid #e5e7eb',
        borderRadius: '2px', overflow: 'hidden',
      }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ background: '#f9fafb', borderBottom: '1px solid #e5e7eb' }}>
              <th style={{ padding: '16px 24px', textAlign: 'left', fontFamily: 'Inter, sans-serif', fontSize: '11px', letterSpacing: '1.4px', textTransform: 'uppercase', color: '#6b7280', fontWeight: 600 }}>Email</th>
              <th style={{ padding: '16px 24px', textAlign: 'left', fontFamily: 'Inter, sans-serif', fontSize: '11px', letterSpacing: '1.4px', textTransform: 'uppercase', color: '#6b7280', fontWeight: 600 }}>Source</th>
              <th style={{ padding: '16px 24px', textAlign: 'left', fontFamily: 'Inter, sans-serif', fontSize: '11px', letterSpacing: '1.4px', textTransform: 'uppercase', color: '#6b7280', fontWeight: 600 }}>Date</th>
              <th style={{ padding: '16px 24px', textAlign: 'left', fontFamily: 'Inter, sans-serif', fontSize: '11px', letterSpacing: '1.4px', textTransform: 'uppercase', color: '#6b7280', fontWeight: 600 }}>Sheets</th>
            </tr>
          </thead>
          <tbody>
            {entries.map((entry, i) => (
              <tr key={entry.id} style={{ borderBottom: i < entries.length - 1 ? '1px solid #f3f4f6' : 'none' }}>
                <td style={{ padding: '16px 24px', fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#080d1e' }}>{entry.email}</td>
                <td style={{ padding: '16px 24px', fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#6b7280' }}>{entry.source}</td>
                <td style={{ padding: '16px 24px', fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#6b7280' }}>
                  {new Date(entry.created_at).toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' })}
                </td>
                <td style={{ padding: '16px 24px' }}>
                  <span style={{
                    display: 'inline-block', padding: '4px 10px',
                    borderRadius: '9999px', fontSize: '11px', fontFamily: 'Inter, sans-serif',
                    background: entry.sheets_synced ? '#dcfce7' : '#fef3c7',
                    color: entry.sheets_synced ? '#16a34a' : '#92400e',
                  }}>
                    {entry.sheets_synced ? 'Synced' : 'Pending'}
                  </span>
                </td>
              </tr>
            ))}
            {entries.length === 0 && (
              <tr>
                <td colSpan={4} style={{ padding: '48px 24px', textAlign: 'center', fontFamily: 'Georgia, serif', fontStyle: 'italic', color: '#9ca3af' }}>
                  Aucune inscription pour le moment.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
