'use client'

import dynamic from 'next/dynamic'

// Re-export the client component
const ClientNavbar = dynamic(() => import('../../../client/src/components/layout/Navbar'), { 
  ssr: false 
})

export default function Navbar() {
  return <ClientNavbar />
} 