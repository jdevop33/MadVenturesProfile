import Link from 'next/link';
import dynamic from 'next/dynamic';

// Import not-found page from client code if it exists
const ClientNotFound = dynamic(() => import('@client/pages/not-found'), { 
  ssr: false,
  loading: () => <DefaultNotFound />
});

function DefaultNotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 text-center">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="mb-6">The page you are looking for does not exist.</p>
      <Link 
        href="/" 
        className="px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-colors"
      >
        Return Home
      </Link>
    </div>
  );
}

export default function NotFound() {
  return <ClientNotFound />;
} 