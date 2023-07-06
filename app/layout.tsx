import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'], weight: '300' })

export const metadata = {
  title: 'STEAM FAIR',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`bg-zinc-800 text-zinc-50 ${poppins.className}`}>{children}</body>
    </html>
  )
}
