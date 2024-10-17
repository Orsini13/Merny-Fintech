import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Inter, IBM_Plex_Serif } from 'next/font/google'
import './globals.css'
import { Weight } from 'lucide-react'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const ibmPlexSerif = {
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-ibm-plex-serif',
}

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export const metadata: Metadata = {
  title: 'Yonder',
  description: 'Yonder is a modern banking platform for you',
  icons: {
    icon: '/icons/logo.svg'
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}