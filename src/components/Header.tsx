
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header
      className={cn(
        'w-full py-4 z-50 transition-all duration-300',
        scrolled ? 'header-scrolled py-3' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="text-xl font-bold text-primary flex items-center gap-2">
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-blue">
                RandomWalk
              </span>
            </a>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#program" 
              className="text-foreground hover:text-primary transition-colors duration-200"
            >
              Program
            </a>
            <a 
              href="#benefits" 
              className="text-foreground hover:text-primary transition-colors duration-200"
            >
              Benefits
            </a>
            <a 
              href="#audience" 
              className="text-foreground hover:text-primary transition-colors duration-200"
            >
              Who It's For
            </a>
            <a 
              href="#pricing" 
              className="text-foreground hover:text-primary transition-colors duration-200"
            >
              Pricing
            </a>
            <a 
              href="#about" 
              className="text-foreground hover:text-primary transition-colors duration-200"
            >
              About Us
            </a>
          </nav>
          
          <div className="hidden md:block">
            <a href="#register" className="btn-primary">Register Now</a>
          </div>
          
          <button 
            className="md:hidden flex items-center text-foreground" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <svg 
              className="h-6 w-6" 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              aria-hidden="true"
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden glass-morphism mt-4 rounded-xl p-4 animate-scale-in">
            <div className="flex flex-col space-y-4 pt-2 pb-3">
              <a 
                href="#program" 
                className="text-foreground hover:text-primary px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Program
              </a>
              <a 
                href="#benefits" 
                className="text-foreground hover:text-primary px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Benefits
              </a>
              <a 
                href="#audience" 
                className="text-foreground hover:text-primary px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Who It's For
              </a>
              <a 
                href="#pricing" 
                className="text-foreground hover:text-primary px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </a>
              <a 
                href="#about" 
                className="text-foreground hover:text-primary px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                About Us
              </a>
              <a 
                href="#register" 
                className="btn-primary w-full text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Register Now
              </a>
            </div>
          </div>
        )}
      </div>
      
      {/* Promotional bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4 text-center text-sm">
        <div className="max-w-7xl mx-auto">
          <p className="font-medium mb-0.5">
            Accelerate Your Business with AI Training for Business Leaders.
          </p>
          <p className="text-xs">
            25% Off Course Fees Until April 10, 2025 – Register Today!
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
