import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "L'Écrin Funéraire — Le GPS du maître de cérémonie",
  description: "Application pour maîtres de cérémonie : collectez les informations des familles, générez vos textes, créez vos supports.",
  openGraph: {
    title: "L'Écrin Funéraire",
    description: "Application pour maîtres de cérémonie funèbre",
    locale: 'fr_FR',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
