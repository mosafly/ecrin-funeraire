'use client'

import { useState, useTransition } from 'react'
import { deleteEntriesAction } from '@/app/admin/actions'
import type { WaitlistRow } from '@/lib/types'

export default function AdminTable({ entries }: { entries: WaitlistRow[] }) {
  const [selected, setSelected] = useState<Set<string>>(new Set())
  const [isPending, startTransition] = useTransition()

  const allSelected = entries.length > 0 && selected.size === entries.length
  const someSelected = selected.size > 0

  function toggleAll() {
    if (allSelected) {
      setSelected(new Set())
    } else {
      setSelected(new Set(entries.map(e => e.id)))
    }
  }

  function toggleOne(id: string) {
    setSelected(prev => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }

  function handleDelete() {
    if (!window.confirm(`Supprimer ${selected.size} inscription${selected.size > 1 ? 's' : ''} ?`)) return
    startTransition(async () => {
      await deleteEntriesAction(Array.from(selected))
      setSelected(new Set())
    })
  }

  function handleCsv() {
    window.location.href = '/api/admin/export-csv'
  }

  const btnBase: React.CSSProperties = {
    fontFamily: 'Inter, sans-serif', fontWeight: 600,
    fontSize: '11px', letterSpacing: '1.4px', textTransform: 'uppercase',
    padding: '10px 20px', border: 'none', cursor: 'pointer',
    transition: 'background 0.2s',
  }

  return (
    <>
      {/* Toolbar */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px', gap: '12px', flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {someSelected && (
            <button
              onClick={handleDelete}
              disabled={isPending}
              style={{ ...btnBase, background: '#dc2626', color: '#fff', opacity: isPending ? 0.6 : 1 }}
            >
              {isPending ? 'Suppression...' : `Supprimer (${selected.size})`}
            </button>
          )}
          {someSelected && (
            <button
              onClick={() => setSelected(new Set())}
              style={{ ...btnBase, background: '#f3f4f6', color: '#6b7280' }}
            >
              Désélectionner
            </button>
          )}
        </div>

        <button
          onClick={handleCsv}
          style={{ ...btnBase, background: '#080d1e', color: '#fff', display: 'flex', alignItems: 'center', gap: '8px' }}
        >
          ↓ Télécharger CSV
        </button>
      </div>

      {/* Table */}
      <div style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: '2px', overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ background: '#f9fafb', borderBottom: '1px solid #e5e7eb' }}>
              <th style={{ padding: '16px 20px', width: '48px' }}>
                <input
                  type="checkbox"
                  checked={allSelected}
                  onChange={toggleAll}
                  style={{ cursor: 'pointer', accentColor: '#d4af37', width: '16px', height: '16px' }}
                />
              </th>
              {['Email', 'Source', 'Date', 'Sheets'].map(col => (
                <th key={col} style={{ padding: '16px 24px', textAlign: 'left', fontFamily: 'Inter, sans-serif', fontSize: '11px', letterSpacing: '1.4px', textTransform: 'uppercase', color: '#6b7280', fontWeight: 600 }}>
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {entries.map((entry, i) => {
              const isSelected = selected.has(entry.id)
              return (
                <tr
                  key={entry.id}
                  onClick={() => toggleOne(entry.id)}
                  style={{
                    borderBottom: i < entries.length - 1 ? '1px solid #f3f4f6' : 'none',
                    background: isSelected ? '#fffbeb' : 'transparent',
                    cursor: 'pointer',
                    transition: 'background 0.15s',
                  }}
                >
                  <td style={{ padding: '16px 20px' }}>
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={() => toggleOne(entry.id)}
                      onClick={e => e.stopPropagation()}
                      style={{ cursor: 'pointer', accentColor: '#d4af37', width: '16px', height: '16px' }}
                    />
                  </td>
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
              )
            })}
            {entries.length === 0 && (
              <tr>
                <td colSpan={5} style={{ padding: '48px 24px', textAlign: 'center', fontFamily: 'Georgia, serif', fontStyle: 'italic', color: '#9ca3af' }}>
                  Aucune inscription pour le moment.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  )
}
