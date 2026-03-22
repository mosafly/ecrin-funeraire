'use client'

import { useState } from 'react'

export default function WaitlistForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return

    setStatus('loading')
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      const data = await res.json()
      if (!res.ok) {
        setStatus('error')
        setMessage(data.error || 'Une erreur est survenue.')
      } else {
        setStatus('success')
        setMessage('Merci ! Votre inscription a bien été enregistrée.')
        setEmail('')
      }
    } catch {
      setStatus('error')
      setMessage('Une erreur est survenue. Veuillez réessayer.')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="w-full border border-[#e5e7eb] px-4 py-4 md:py-3 text-[16px] text-[#080d1e] placeholder:text-[#9ca3af] mb-4 outline-none focus:border-[#d4af37] transition-colors"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="votre@email.com"
        required
        disabled={status === 'loading' || status === 'success'}
      />

      {status === 'success' && (
        <p style={{ color: '#16a34a', marginBottom: '16px', textAlign: 'center', fontFamily: 'Georgia, serif', fontSize: '16px' }}>
          {message}
        </p>
      )}
      {status === 'error' && (
        <p style={{ color: '#dc2626', marginBottom: '16px', textAlign: 'center', fontFamily: 'Inter, sans-serif', fontSize: '14px' }}>
          {message}
        </p>
      )}

      {status !== 'success' && (
        <button
          type="submit"
          className="cta-lift w-full bg-[#080d1e] text-white text-xs font-semibold tracking-[2px] uppercase py-5 px-6 hover:bg-[#d4af37] disabled:opacity-60 leading-relaxed text-center"
          disabled={status === 'loading'}
        >
          {status === 'loading'
            ? 'Inscription...'
            : "Rejoindre la création de l'application ou Rejoindre les bêta-testeurs"}
        </button>
      )}
    </form>
  )
}
