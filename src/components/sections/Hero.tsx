'use client'

import dynamic from 'next/dynamic'

const ClientHero = dynamic(() => import('../../../client/src/components/sections/Hero'), { 
  ssr: false 
})

export default function Hero() {
  return <ClientHero />
} 