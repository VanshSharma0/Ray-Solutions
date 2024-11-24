import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/photo-editing', label: 'Photo Editing' },
    { href: '/graphics-design', label: 'Graphics Design' },
    { href: '/social-media', label: 'Social Media' },
    { href: '/about', label: 'About' }
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className={`
          w-full
          transition-all duration-300
          ${isScrolled ? 'bg-gray-900/95 backdrop-blur-sm' : 'bg-gray-900'}
          shadow-lg shadow-gray-900/10
        `}>
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <a 
                href="/" 
                className="font-bold text-lg text-white hover:text-blue-400 transition-colors"
              >
                Logo
              </a>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center gap-1">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="px-4 py-2 rounded-lg text-sm font-medium
                      text-gray-300
                      transition-all duration-200
                      hover:text-white hover:bg-gray-800
                      focus:outline-none focus:ring-2 focus:ring-blue-500
                      relative group
                      after:absolute after:bottom-0 after:left-0 after:h-0.5 
                      after:w-0 after:bg-blue-500 after:transition-all after:duration-300
                      hover:after:w-full
                    "
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-lg text-gray-300
                  hover:text-white hover:bg-gray-800 transition-colors"
                aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          <div
            className={`
              md:hidden 
              transition-all duration-200 ease-in-out
              ${isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}
              overflow-hidden bg-gray-900 border-t border-gray-800
            `}
          >
            <nav className="px-4 py-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-3 text-gray-300 
                    hover:text-white hover:bg-gray-800 
                    rounded-lg transition-all duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Minimal spacer */}
      <div className="h-16" />
    </>
  );
};

export default Header;