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
    <div className="form-card">
      <p className="form-card-title">Participer</p>

      <div className="form-participer-block">
        <p className="form-participer-titre">Avantages :</p>
        <ul className="form-participer-list">
          <li>Construction des fonctionnalités de l&apos;application.</li>
          <li>Proposition tarifaire.</li>
          <li>Accès aux visioconférences privées.</li>
          <li>Bêta testeur.</li>
        </ul>
      </div>

      <form onSubmit={handleSubmit}>
        <label className="form-input-label">Mon adresse mail :</label>
        <input
          className="form-input"
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
            className="form-btn"
            disabled={status === 'loading'}
          >
            {status === 'loading' ? 'Inscription...' : 'Participer à la création de l\'application'}
          </button>
        )}
      </form>

      <div className="rgpd-block">
        <strong>Confidentialité (RGPD)</strong><br />
        Vos données : utilisées uniquement pour l&apos;Écrin Funéraire. Modifiables ou supprimables à tout moment.
      </div>

      <p className="form-contact-info">
        Pour toutes informations complémentaires, contactez Jean-Michel REY<br />
        <a href="mailto:jmrey@formafuneraire.fr">jmrey@formafuneraire.fr</a>
      </p>
    </div>
  )
}
