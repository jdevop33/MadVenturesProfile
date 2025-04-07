'use client'

import dynamic from 'next/dynamic'

const ClientBiography = dynamic(() => import('../../client/src/components/sections/Biography'), { 
  ssr: false 
})

export default function Biography() {
  return <ClientBiography />
} 