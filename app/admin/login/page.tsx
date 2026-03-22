'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'

export default function AdminLoginPage() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'sent' | 'error'>('idle')
  const [message, setMessage] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')

    const supabase = createClient()
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${window.location.origin}/admin`,
      },
    })

    if (error) {
      setStatus('error')
      setMessage(error.message)
    } else {
      setStatus('sent')
      setMessage(`Un lien de connexion a été envoyé à ${email}`)
    }
  }

  return (
    <div style={{
      minHeight: '100vh', background: '#080d1e',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '40px 20px',
    }}>
      <div style={{
        background: '#fcfaf7', borderTop: '8px solid #d4af37',
        padding: '64px 56px', maxWidth: '480px', width: '100%',
      }}>
        <h1 style={{
          fontFamily: 'Georgia, serif', fontSize: '28px',
          color: '#080d1e', marginBottom: '8px', textAlign: 'center',
        }}>
          Administration
        </h1>
        <p style={{
          fontFamily: 'Inter, sans-serif', fontSize: '13px',
          color: '#6b7280', textAlign: 'center', marginBottom: '40px',
        }}>
          L&apos;Écrin Funéraire
        </p>

        {status === 'sent' ? (
          <p style={{
            fontFamily: 'Georgia, serif', fontSize: '18px',
            color: '#16a34a', textAlign: 'center', lineHeight: '1.6',
          }}>
            {message}
          </p>
        ) : (
          <form onSubmit={handleSubmit}>
            <label style={{
              fontFamily: 'Georgia, serif', fontSize: '16px',
              color: '#080d1e', display: 'block', marginBottom: '8px',
            }}>
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="votre@email.com"
              style={{
                width: '100%', border: '1px solid #e5e7eb',
                padding: '16px', fontFamily: 'Georgia, serif',
                fontSize: '18px', marginBottom: '24px',
                outline: 'none', background: 'transparent',
              }}
            />
            {status === 'error' && (
              <p style={{ color: '#dc2626', fontSize: '14px', marginBottom: '16px' }}>
                {message}
              </p>
            )}
            <button
              type="submit"
              disabled={status === 'loading'}
              style={{
                width: '100%', background: '#080d1e', color: '#fff',
                padding: '20px', border: 'none', cursor: 'pointer',
                fontFamily: 'Inter, sans-serif', fontWeight: 600,
                fontSize: '12px', letterSpacing: '2.4px', textTransform: 'uppercase',
              }}
            >
              {status === 'loading' ? 'Envoi...' : 'Recevoir le lien de connexion'}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
