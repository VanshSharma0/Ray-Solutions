import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Add ScrollToTop effect when location changes
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false); // Close mobile menu on navigation
  }, [location.pathname]);

  const navItems = [
    { to: '/', label: 'Home' },
    { to: '/photo-editing', label: 'Photo Editing' },
    { to: '/graphics-design', label: 'Graphic Design' },
    { to: '/social-media', label: 'Social Media Management' },
    { to: '/about', label: 'About' }
  ];

  const handleNavClick = () => {
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false);
  };

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
              <Link
                to="/"
                onClick={handleNavClick}
                className="font-bold text-lg text-white hover:text-blue-400 transition-colors"
              >
                <img src="/logo.png" alt="Logo" className="h-16 mt-8" />
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center gap-1">
                {navItems.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={handleNavClick}
                    className={`
                      px-4 py-2 rounded-lg text-sm font-medium
                      transition-all duration-200
                      hover:text-white hover:bg-gray-800
                      focus:outline-none focus:ring-2 focus:ring-blue-500
                      relative group
                      after:absolute after:bottom-0 after:left-0 after:h-0.5
                      after:w-0 after:bg-blue-500 after:transition-all after:duration-300
                      hover:after:w-full
                      ${location.pathname === item.to ? 'text-white bg-gray-800' : 'text-gray-300'}
                    `}
                  >
                    {item.label}
                  </Link>
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
                <Link
                  key={item.to}
                  to={item.to}
                  className={`
                    block px-4 py-3 rounded-lg
                    transition-all duration-200
                    ${location.pathname === item.to 
                      ? 'text-white bg-gray-800' 
                      : 'text-gray-300 hover:text-white hover:bg-gray-800'}
                  `}
                  onClick={handleNavClick}
                >
                  {item.label}
                </Link>
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