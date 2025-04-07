'use client'

import dynamic from 'next/dynamic'

const ClientCompany = dynamic(() => import('../../client/src/components/sections/Company'), { 
  ssr: false 
})

export default function Company() {
  return <ClientCompany />
} 