import { Suspense } from 'react'
import HomePage from '@/components/HomePage'
import Loading from '@/components/Loading'

export default function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <HomePage />
    </Suspense>
  )
} 