'use client'

import { useActionState } from 'react'
import { loginAction } from '@/app/admin/actions'

const initialState = { error: '' }

export default function AdminLoginPage() {
  const [state, formAction, isPending] = useActionState(loginAction, initialState)

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

        <form action={formAction}>
          <label style={{
            fontFamily: 'Georgia, serif', fontSize: '16px',
            color: '#080d1e', display: 'block', marginBottom: '8px',
          }}>
            Email
          </label>
          <input
            type="email"
            name="email"
            required
            placeholder="votre@email.com"
            style={{
              width: '100%', border: '1px solid #e5e7eb',
              padding: '16px', fontFamily: 'Georgia, serif',
              fontSize: '16px', marginBottom: '24px',
              outline: 'none', background: 'transparent', boxSizing: 'border-box',
            }}
          />
          <label style={{
            fontFamily: 'Georgia, serif', fontSize: '16px',
            color: '#080d1e', display: 'block', marginBottom: '8px',
          }}>
            Mot de passe
          </label>
          <input
            type="password"
            name="password"
            required
            placeholder="••••••••"
            style={{
              width: '100%', border: '1px solid #e5e7eb',
              padding: '16px', fontFamily: 'Georgia, serif',
              fontSize: '16px', marginBottom: '24px',
              outline: 'none', background: 'transparent', boxSizing: 'border-box',
            }}
          />

          {state?.error && (
            <p style={{
              color: '#dc2626', fontSize: '14px',
              fontFamily: 'Inter, sans-serif', marginBottom: '16px',
            }}>
              {state.error}
            </p>
          )}

          <button
            type="submit"
            disabled={isPending}
            style={{
              width: '100%', background: '#080d1e', color: '#fff',
              padding: '20px', border: 'none',
              cursor: isPending ? 'not-allowed' : 'pointer',
              fontFamily: 'Inter, sans-serif', fontWeight: 600,
              fontSize: '12px', letterSpacing: '2.4px', textTransform: 'uppercase',
              opacity: isPending ? 0.7 : 1,
            }}
          >
            {isPending ? 'Connexion...' : 'Se connecter'}
          </button>
        </form>
      </div>
    </div>
  )
}
