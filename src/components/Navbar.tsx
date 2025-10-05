import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo1 from '@/assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'backdrop-blur-xl bg-slate-950/90 border-b border-cyan-500/20' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-3 sm:px-4 md:px-6">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-1.5 sm:gap-2 hover:scale-105 transition-transform duration-300"
          >
            <img 
              src={logo1} 
              alt="billianceai logo" 
              className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 animate-pulse" 
            />
            <span className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              billianceai
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative text-sm font-medium transition-colors duration-300 hover:text-cyan-400 ${
                  isActive(item.path)
                    ? 'text-cyan-400'
                    : 'text-slate-300'
                }`}
              >
                {item.name}
                {isActive(item.path) && (
                  <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"></div>
                )}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Button 
              asChild
              className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-4 lg:px-6 py-2 rounded-full font-medium transition-all duration-300 hover:scale-105 text-sm"
            >
              <Link to="/contact">
                Get Started <ArrowRight className="ml-2" size={14} />
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-300 hover:text-cyan-400 transition-colors duration-300 p-1"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-slate-950/95 backdrop-blur-xl border-b border-cyan-500/20 animate-in slide-in-from-top duration-300">
            <div className="container mx-auto px-3 sm:px-4 py-4 sm:py-6">
              <div className="flex flex-col space-y-3 sm:space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`text-base sm:text-lg font-medium transition-colors duration-300 hover:text-cyan-400 py-1 ${
                      isActive(item.path)
                        ? 'text-cyan-400'
                        : 'text-slate-300'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-3 sm:pt-4 border-t border-slate-700/50">
                  <Button 
                    asChild
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-medium text-sm sm:text-base"
                  >
                    <Link to="/contact" onClick={() => setIsOpen(false)}>
                      Get Started <ArrowRight className="ml-2" size={14} />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
