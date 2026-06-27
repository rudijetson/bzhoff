import { Inter } from 'next/font/google'
import { ThemeProvider } from "./theme-provider"
import { TooltipProvider } from "@/app/components/composed"
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Script from 'next/script'
import "./globals.css"

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['400', '500', '600']
})

export const metadata = {
  metadataBase: new URL('https://bzhoff.com'),
  title: {
    default: 'Brandon Z. Hoff | AI Literacy Researcher & Developer',
    template: '%s | Brandon Z. Hoff'
  },
  description: 'AI literacy researcher, RUDI founder, and full-stack developer democratizing technology access. Teaching non-technical individuals to build sophisticated software with AI. 80,000+ community members.',
  keywords: [
    'Brandon Hoff',
    'Brandon Z Hoff',
    'AI Literacy',
    'AI Literacy Researcher',
    'RUDI',
    'Responsible Use of Digital Intelligence',
    'AI Training',
    'AI Education',
    'AI-powered Development',
    'Full-Stack Developer',
    'Next.js Developer',
    'AI Innovation',
    'Technology Democratization',
    'AI for Non-Technical',
    'AI Writer',
    'Automated Content Generation'
  ],
  authors: [{ name: 'Brandon Z. Hoff' }],
  creator: 'Brandon Z. Hoff',
  icons: {
    icon: [
      { url: '/favicon.png', sizes: 'any' },
      { url: '/images/bzhoff-rudi-logo.png', type: 'image/png' }
    ],
    shortcut: '/favicon.png',
    apple: '/images/bzhoff-rudi-logo.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://bzhoff.com',
    title: 'Brandon Z. Hoff | AI Literacy Researcher & Developer',
    description: 'AI literacy researcher and RUDI founder democratizing technology access. Teaching non-technical individuals to build software with AI.',
    siteName: 'Brandon Z. Hoff',
    images: [{
      url: '/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Brandon Z. Hoff - AI Literacy Researcher'
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brandon Z. Hoff | AI Literacy Researcher & Developer',
    description: 'AI literacy researcher and RUDI founder democratizing technology access. Teaching non-technical individuals to build software with AI.',
    creator: '@hoffdigital',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Brandon Z. Hoff',
    alternateName: 'Brandon Hoff',
    url: 'https://bzhoff.com',
    image: 'https://bzhoff.com/images/authors/hoff-linkedin.jpg',
    sameAs: [
      'https://twitter.com/hoffdigital',
      'https://www.linkedin.com/in/hoffbrandon/',
      'https://github.com/prompt-stack',
      'https://tiktok.com/@hoffdigital',
      'https://youtube.com/@hoffdigital'
    ],
    jobTitle: 'AI Literacy Researcher',
    description: 'AI literacy researcher and founder of RUDI (Responsible Use of Digital Intelligence). Teaching non-technical individuals to build sophisticated software with AI.',
    knowsAbout: [
      'Artificial Intelligence',
      'AI Literacy',
      'AI Education',
      'Full-Stack Development',
      'Next.js',
      'React',
      'Python',
      'AI-powered Development',
      'Technology Democratization'
    ],
    alumniOf: {
      '@type': 'Organization',
      name: 'EDHEC Business School'
    },
    foundingDate: '2022',
    founder: {
      '@type': 'Organization',
      name: 'RUDI',
      description: 'Responsible Use of Digital Intelligence'
    }
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
          `}
        </Script>
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>
            {children}
          </TooltipProvider>
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  )
}

