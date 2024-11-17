import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Inter, IBM_Plex_Serif } from 'next/font/google'
import './globals.css'
import { Weight } from 'lucide-react'
import { getLoggedInUser } from '@/lib/actions/user.actions'
import { redirect } from 'next/navigation'

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-ibm-plex-serif'
})
export const metadata: Metadata = {
  title: 'Yonder',
  description: 'Yonder is a modern banking platform for you',
  icons: {
    icon: '/icons/logo.svg'
  }
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {

  const loggedIn = await getLoggedInUser();

  // if (!loggedIn) redirect('/sign-in')

  return (
    <html lang="en">
      <body
        className={`${inter.variable}  ${ibmPlexSerif.variable}`}
      >
        {children}
      </body>
    </html>
  )
}
