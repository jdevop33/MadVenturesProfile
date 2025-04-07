'use client'

import dynamic from 'next/dynamic'

const ClientVision = dynamic(() => import('../../client/src/components/sections/Vision'), { 
  ssr: false 
})

export default function Vision() {
  return <ClientVision />
} 