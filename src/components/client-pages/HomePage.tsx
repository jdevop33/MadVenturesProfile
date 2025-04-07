'use client'

import { useEffect } from "react";
import dynamic from 'next/dynamic';

// Dynamically import components
const Navbar = dynamic(() => import('../../client/src/components/layout/Navbar'), { ssr: false });
const Footer = dynamic(() => import('../../client/src/components/layout/Footer'), { ssr: false });
const Hero = dynamic(() => import('../../client/src/components/sections/Hero'), { ssr: false });
const Biography = dynamic(() => import('../../client/src/components/sections/Biography'), { ssr: false });
const Company = dynamic(() => import('../../client/src/components/sections/Company'), { ssr: false });
const ICubation = dynamic(() => import('../../client/src/components/sections/ICubation'), { ssr: false });
const Vision = dynamic(() => import('../../client/src/components/sections/Vision'), { ssr: false });
const MediaHighlights = dynamic(() => import('../../client/src/components/sections/MediaHighlights'), { ssr: false });
const Interview = dynamic(() => import('../../client/src/components/sections/Interview'), { ssr: false });
const PitchGuidelines = dynamic(() => import('../../client/src/components/sections/PitchGuidelines'), { ssr: false });
const Contact = dynamic(() => import('../../client/src/components/sections/Contact'), { ssr: false });

// Import client CSS
import '../../client/src/index.css';

export default function ClientHomePage() {
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