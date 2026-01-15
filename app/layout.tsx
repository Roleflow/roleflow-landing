import './globals.css'
import { Inter } from 'next/font/google'

// Initializing Inter - The industry standard for high-status, clinical UI.
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700', '900'] 
})

export const metadata = {
  title: 'Roleflow | AI Sales Infrastructure',
  description: 'Deploy 24/7 AI Sales Workforce to eliminate lead decay and maximize commissions.',
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
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-[#020617] text-white antialiased`}>
        {/* 
           This container holds the Landing Page, the Qualification Form, 
           and the Calendar Gate. 
        */}
        {children}
      </body>
    </html>
  )
}
