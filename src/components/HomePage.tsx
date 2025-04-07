'use client'

import dynamic from 'next/dynamic'
import { useEffect } from 'react'

// Import components from the client app
const Navbar = dynamic(() => import('./layout/Navbar'), { ssr: false })
const Footer = dynamic(() => import('./layout/Footer'), { ssr: false })

// Dynamically import section components
const Hero = dynamic(() => import('./sections/Hero'), { ssr: false })

// Create placeholder components for sections that are still being ported
const Biography = () => <div className="p-10 text-center">Biography Section Loading...</div>
const Company = () => <div className="p-10 text-center">Company Section Loading...</div>
const ICubation = () => <div className="p-10 text-center">I-Cubation Section Loading...</div>
const Vision = () => <div className="p-10 text-center">Vision Section Loading...</div>
const MediaHighlights = () => <div className="p-10 text-center">Media Highlights Section Loading...</div>
const Interview = () => <div className="p-10 text-center">Interview Section Loading...</div>
const PitchGuidelines = () => <div className="p-10 text-center">Pitch Guidelines Section Loading...</div>
const Contact = () => <div className="p-10 text-center">Contact Section Loading...</div>

export default function HomePage() {
  useEffect(() => {
    // Add custom CSS for the pattern background and accent top
    const style = document.createElement("style");
    style.innerHTML = `
      .pattern-bg {
        background-color: #f8fafc;
        background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e2e8f0' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
      }
      
      .accent-top {
        position: relative;
      }
      
      .accent-top::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 4px;
        background-color: hsl(var(--primary));
        border-top-left-radius: 0.375rem;
        border-top-right-radius: 0.375rem;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="font-sans text-gray-800 bg-gray-50">
      <Navbar />
      <main>
        <Hero />
        <Biography />
        <Company />
        <ICubation />
        <Vision />
        <MediaHighlights />
        <Interview />
        <PitchGuidelines />
        <Contact />
      </main>
      <Footer />
    </div>
  );
} 