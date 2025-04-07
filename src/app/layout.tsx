import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import '@client/index.css'
import type { Metadata } from 'next'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Thomas Ahn | Founder & CEO | MAD Ventures',
  description: 'Thomas Ahn is the Founder & CEO of MAD Ventures, focusing on food and beverage, IT, and software investments.',
  openGraph: {
    title: 'Thomas Ahn | Founder & CEO | MAD Ventures',
    description: 'MAD Ventures helps create $100 Million technology companies on Vancouver Island',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
} 