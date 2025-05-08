"use client";

import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
// Image import removed as it's not being used

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navLinks = [
    { name: 'Home', to: 'hero', offset: -100 },
    { name: 'Services', to: 'services', offset: -80 },
    { name: 'Testimonials', to: 'testimonials', offset: -80 },
    { name: 'Location', to: 'location', offset: -80 },
    { name: 'Contact', to: 'contact', offset: -80 },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="text-2xl font-bold">
            <span className="text-blue-600">Smile</span>
            <span className={scrolled ? 'text-blue-900' : 'text-white'}>Dental</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <ScrollLink
              key={link.name}
              to={link.to}
              spy={true}
              smooth={true}
              offset={link.offset}
              duration={500}
              className={`cursor-pointer font-medium hover:text-blue-500 transition-colors ${
                scrolled ? 'text-blue-900' : 'text-white'
              }`}
            >
              {link.name}
            </ScrollLink>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={toggleMobileMenu}
            className="text-blue-600 focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="flex flex-col py-4">
            {navLinks.map((link) => (
              <ScrollLink
                key={link.name}
                to={link.to}
                spy={true}
                smooth={true}
                offset={link.offset}
                duration={500}
                className="px-4 py-2 text-blue-900 hover:bg-blue-50 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </ScrollLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;