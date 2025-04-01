
import React, { useEffect } from 'react';
import Hero from '@/components/Hero';
import PainPoints from '@/components/PainPoints';
import FeatureSection from '@/components/FeatureSection';
import TestimonialSection from '@/components/TestimonialSection';
import Results from '@/components/Results';
import HowItWorks from '@/components/HowItWorks';
import BusinessTypes from '@/components/BusinessTypes';
import CTASection from '@/components/CTASection';
import CountdownBar from '@/components/CountdownBar';

const Index = () => {
  // Set target date for countdown (30 days from now)
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 30);
  
  // Smooth scroll for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');
      
      if (link && link.hash && link.hash.startsWith('#') && link.href.includes(window.location.pathname)) {
        e.preventDefault();
        
        const targetId = link.hash.slice(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 100,
            behavior: 'smooth'
          });
          
          // Update URL without scrolling
          window.history.pushState(null, '', link.hash);
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <main>
        <Hero />
        <PainPoints />
        <FeatureSection />
        <Results />
        <TestimonialSection />
        <HowItWorks />
        <BusinessTypes />
        <CTASection />
      </main>
      
      <CountdownBar targetDate={targetDate} />
      
      <footer className="bg-secondary text-secondary-foreground py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="font-bold text-xl">Chateleon</p>
              <p className="text-sm opacity-75 mt-1">Your Website's 24/7 Revenue Assistant</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#" className="text-secondary-foreground hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-secondary-foreground hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-secondary-foreground hover:text-white transition-colors">Contact Us</a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-700 text-sm text-center opacity-75">
            <p>© {new Date().getFullYear()} Chateleon. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
