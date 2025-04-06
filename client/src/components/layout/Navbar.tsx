import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Company", href: "#company" },
    { name: "I-Cubation", href: "#icubation" },
    { name: "Media", href: "#media" },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-primary font-bold text-xl">MAD Ventures</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-500 hover:text-gray-900 font-medium"
              >
                {item.name}
              </a>
            ))}
            <a 
              href="#contact"
              className="bg-primary text-white px-4 py-2 rounded-md font-medium hover:bg-primary/90 transition"
            >
              Contact
            </a>
          </nav>
          <div className="flex items-center md:hidden">
            <button
              type="button"
              onClick={toggleMobileMenu}
              className="text-gray-500 hover:text-gray-900"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden ${
          isMobileMenuOpen ? "block" : "hidden"
        } bg-white border-b border-gray-200`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={closeMobileMenu}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              {item.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={closeMobileMenu}
            className="block px-3 py-2 rounded-md text-base font-medium bg-primary text-white hover:bg-primary/90"
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
