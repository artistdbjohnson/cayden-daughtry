import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Cayden Daughtry | Class of 2027 5★ PG',
  description:
    'Cold-blooded scorer. First-ever Nike EYBL MVP. Peach Jam Champion. National Junior of the Year. Uncommitted.',
  openGraph: {
    title: 'Cayden Daughtry | Class of 2027 5★ PG',
    description: 'Cold-blooded scorer. Peach Jam Champion. First-ever Nike EYBL MVP.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#050505',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased bg-paper text-ink min-h-screen">{children}</body>
    </html>
  )
}
