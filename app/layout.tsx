import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Digital Marketing Services | KanpriTech',
  description: "Grow your digital visibility with KanpriTech's SEO, GEO, AEO, social media and performance marketing services.",
  generator: 'v0.app',
  metadataBase: new URL('https://kanpritech.com'),
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Digital Marketing Services | KanpriTech',
    description: 'SEO, GEO, AEO, social media and performance marketing for modern discovery.',
    type: 'website',
    url: 'https://kanpritech.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Marketing Services | KanpriTech',
    description: 'Digital marketing built for modern discovery.',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
