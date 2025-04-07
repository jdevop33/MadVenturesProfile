'use client'

import dynamic from 'next/dynamic'

// Re-export the client component
const ClientFooter = dynamic(() => import('../../../client/src/components/layout/Footer'), { 
  ssr: false 
})

export default function Footer() {
  return <ClientFooter />
} 