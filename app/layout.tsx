import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Cayden Daughtry | Class of 2027 5★ PG',
  description: 'Cold-blooded scorer. Peach Jam Champion. National Junior of the Year. Class of 2027 point guard from Calvary Christian Academy & Fear of God Athletics.',
  manifest: '/manifest.json',
  openGraph: {
    title: 'Cayden Daughtry | 5★ PG Class of 2027',
    description: 'Momentum. Cold-blooded. Record-rewriting.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#050505',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
