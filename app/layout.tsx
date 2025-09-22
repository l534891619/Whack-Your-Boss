import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://whackyourboss.world'),
  title: {
    default: 'Whack Your Boss - Play Online | Stress Relief Game Landing',
    template: '%s | Whack Your Boss'
  },
  description: 'Play whack your boss online. A humorous stress relief game landing page with guides, tips, FAQs, and curated recommendations — fast, responsive, SEO-optimized.',
  keywords: ['whack your boss', 'play whack your boss', 'stress relief game', 'online game'],
  openGraph: {
    title: 'Whack Your Boss - Play Online',
    description: 'Play whack your boss online with tips, controls, endings list, and related games. Fast, mobile-friendly, and SEO-optimized.',
    url: 'https://whackyourboss.world/',
    siteName: 'Whack Your Boss Online',
    images: [
      { url: '/og-cover.jpg', width: 1200, height: 630, alt: 'Whack Your Boss Landing' }
    ],
    locale: 'en_US',
    type: 'website'
  },
  alternates: { canonical: '/' },
  robots: {
    index: true,
    follow: true
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png'
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Q51JN6NN7L"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Q51JN6NN7L');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  )
}
