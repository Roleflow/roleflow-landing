import './globals.css'
import { Inter } from 'next/font/google'

// Initializing Inter - The industry standard for high-status, clinical UI.
// We use weights 400 (regular), 700 (bold), and 900 (black) for geometric hierarchy.
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700', '900'],
  variable: '--font-inter',
})

export const metadata = {
  title: 'ROLEFLOW | Scalable AI Sales Infrastructure',
  description: 'Deploy 24/7 AI Sales Workforce to eliminate lead decay and maximize revenue attribution.',
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: '/icon.png', // Uses your logo for the browser tab
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable}`}>
      <head>
        {/* Anti-Cursive Enforcement & Mobile Optimization */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" /> 
      </head>
      <body className={`${inter.className} bg-[#020617] text-white antialiased`}>
        {/* 
           This wrapper ensures that the layout is consistent 
           across the Landing Page and the Gated Outcome pages.
        */}
        {children}
      </body>
    </html>
  )
}
