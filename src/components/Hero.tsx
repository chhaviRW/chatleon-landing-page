
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import LeadForm from './LeadForm';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      },
      { threshold: 0.1 }
    );
    
    if (heroRef.current) {
      observer.observe(heroRef.current);
    }
    
    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-accent to-background pt-16 md:pt-20 pb-16">
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute inset-0 bg-hero-pattern"></div>
        <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-background to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-background to-transparent"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={heroRef}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="stagger-animation">
            <div className="pill-tag mb-6">AI - LEADERSHIP - TRAINING FOR BUSINESS GROWTH</div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              Transform Your Business <br />
              <span className="bg-clip-text text-transparent bg-gradient-blue">With AI Strategy</span>
            </h1>
            
            <div className="space-y-6 mb-8">
              <p className="text-lg md:text-xl text-muted-foreground">
                Master AI strategy and implementation with executive AI training led by industry experts from RandomWalk.
              </p>
              
              <p className="text-lg md:text-xl text-muted-foreground">
                Gain hands-on experience with the best AI course tailored for business leaders, covering AI skills, analytics, and conversion optimization.
              </p>
              
              <p className="text-xl font-medium">
                Join our practical AI training course today.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:items-center mt-8">
              <a href="#program" className="btn-primary">
                <span>LEARN MORE</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              
              <a href="#register" className="btn-secondary">
                Register Now
              </a>
            </div>
          </div>
          
          <div className="animate-fade-in delay-300">
            <div className="glass-card p-6 md:p-8 shadow-lg">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold mb-2">Download Brochure</h3>
                <p className="text-muted-foreground">Get complete program details</p>
              </div>
              
              <LeadForm />
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
    </div>
  );
};

export default Hero;
