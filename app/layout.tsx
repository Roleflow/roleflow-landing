import './globals.css'

export const metadata = {
  title: 'Roleflow | Stop Lead Decay',
  description: 'Automate your High-Ticket Agency DMs.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
