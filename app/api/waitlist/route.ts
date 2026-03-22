import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { createServiceClient } from '@/lib/supabase/server'
import { appendToWaitlistSheet } from '@/lib/google/sheets'

const schema = z.object({
  email: z.string().email('Adresse email invalide'),
})

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const parsed = schema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.errors[0].message },
        { status: 400 }
      )
    }

    const supabase = await createServiceClient()
    const { data, error } = await supabase
      .from('waitlist')
      .insert({ email: parsed.data.email, source: 'landing' })
      .select('id, email, source, created_at')
      .single()

    if (error) {
      if (error.code === '23505') {
        return NextResponse.json(
          { error: 'Cette adresse email est déjà inscrite.' },
          { status: 409 }
        )
      }
      throw error
    }

    // Sync Google Sheets — non bloquant pour l'utilisateur
    try {
      await appendToWaitlistSheet(
        data.email,
        data.source,
        new Date(data.created_at).toLocaleString('fr-FR', { timeZone: 'Europe/Paris' })
      )
      await supabase
        .from('waitlist')
        .update({ sheets_synced: true })
        .eq('id', data.id)
    } catch (sheetsError) {
      console.error('Google Sheets sync failed:', sheetsError)
      // sheets_synced reste false — inscription Supabase réussie quand même
    }

    return NextResponse.json({ success: true }, { status: 201 })
  } catch (err) {
    console.error('Waitlist error:', err)
    return NextResponse.json(
      { error: 'Erreur serveur. Veuillez réessayer.' },
      { status: 500 }
    )
  }
}
