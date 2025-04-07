import { Suspense } from 'react'
import dynamic from 'next/dynamic'

// Import Home page from client code
const HomePage = dynamic(() => import('@client/pages/Home'), { ssr: false })

export const metadata = {
  title: 'Thomas Ahn | Founder & CEO | MAD Ventures',
  description: 'Thomas Ahn is the Founder & CEO of MAD Ventures, focusing on food and beverage, IT, and software investments.',
}

export default function Home() {
  return (
    <Suspense fallback={<div className="p-8 text-center">Loading...</div>}>
      <HomePage />
    </Suspense>
  )
} 