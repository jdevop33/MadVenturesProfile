'use client'

import dynamic from 'next/dynamic'

const ClientICubation = dynamic(() => import('../../client/src/components/sections/ICubation'), { 
  ssr: false 
})

export default function ICubation() {
  return <ClientICubation />
} 