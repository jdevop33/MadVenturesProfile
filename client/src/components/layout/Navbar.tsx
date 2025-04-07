import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Primary navigation items (always visible)
  const primaryNavItems = [
    { name: "About", href: "#about" },
    { name: "Company", href: "#company" },
    { name: "I-Cubation", href: "#icubation" },
  ];

  // Secondary navigation items (in dropdown)
  const secondaryNavItems = [
    { name: "Vision", href: "#vision" },
    { name: "Media", href: "#media" },
    { name: "Interview", href: "#interview" },
    { name: "Pitch Guidelines", href: "#pitch-guidelines" },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-primary font-bold text-xl">MAD Ventures</span>
          </div>
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {/* Primary nav items */}
            {primaryNavItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-gray-900 font-medium"
              >
                {item.name}
              </a>
            ))}
            
            {/* Dropdown for secondary items */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-gray-600 hover:text-gray-900 font-medium">
                More <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {secondaryNavItems.map((item) => (
                  <DropdownMenuItem key={item.name} asChild>
                    <a href={item.href}>{item.name}</a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            
            {/* Contact button */}
            <a 
              href="#contact"
              className="bg-primary text-white px-4 py-2 rounded-md font-medium hover:bg-primary/90 transition"
            >
              Contact
            </a>
          </nav>
          
          {/* Mobile menu button */}
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
          {/* Show all nav items in mobile menu */}
          {[...primaryNavItems, ...secondaryNavItems].map((item) => (
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
