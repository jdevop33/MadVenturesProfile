import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Biography from "@/components/sections/Biography";
import Company from "@/components/sections/Company";
import ICubation from "@/components/sections/ICubation";
import Vision from "@/components/sections/Vision";
import MediaHighlights from "@/components/sections/MediaHighlights";
import Contact from "@/components/sections/Contact";
import { useEffect } from "react";

const Home = () => {
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
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
