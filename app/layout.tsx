import './globals.css'
import { Inter } from 'next/font/google'

// Initializing Inter as the primary geometric font
const inter = Inter({ 
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  display: 'swap'
})

export const metadata = {
  title: 'Roleflow | AI Sales Infrastructure',
  description: 'Deploy 24/7 AI Sales Operators to eliminate lead decay and maximize commissions.',
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: '/icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Ensures no zoom-scaling issues on mobile devices */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </head>
      <body className={`${inter.className} bg-[#020617] antialiased`}>
        {/* 
           Since this is the landing page repo, we do NOT include the sidebar here.
           This ensures a high-conversion, distraction-free sales funnel.
        */}
        {children}
      </body>
    </html>
  )
}
