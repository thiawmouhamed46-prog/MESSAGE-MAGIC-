import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'EmailAnswer - Gestion Intelligente des Emails',
  description: 'Plateforme SaaS premium pour gérer vos emails plus vite avec intelligence',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className="bg-cream text-warm-dark antialiased">
        {children}
      </body>
    </html>
  )
}
