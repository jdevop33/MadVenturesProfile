'use client'

import React, { Suspense } from 'react'
import dynamic from 'next/dynamic'

// Import CSS from the existing client app
import '../../client/src/index.css'

// Dynamically import the Home page component from the client directory
// with SSR disabled to ensure it works as a pure client-side component
const HomePage = dynamic(() => import('../../src/components/HomePage'), { 
  ssr: false,
  loading: () => <LoadingFallback />
})

function LoadingFallback() {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-white">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
        <p className="mt-4 text-gray-700">Loading...</p>
      </div>
    </div>
  )
}

export function ClientAppWrapper() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <HomePage />
    </Suspense>
  )
} 