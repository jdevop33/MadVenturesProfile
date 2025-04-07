import { ClientAppWrapper } from './client'
import { notFound } from 'next/navigation'

// Generate only a few necessary routes statically
export function generateStaticParams() {
  return [
    { slug: ['about'] },
    { slug: ['contact'] }
  ]
}

// The catch-all page component for other routes
export default function Page({ params }: { params: { slug: string[] } }) {
  if (params.slug && params.slug.length === 0) {
    // Avoid conflicting with the root page
    return notFound()
  }
  
  return <ClientAppWrapper />
} 