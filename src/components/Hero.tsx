import React, { useEffect, useRef } from 'react';
import { ArrowRight, Zap, Users, TrendingUp } from 'lucide-react';
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
            <div className="pill-tag mb-6">
              <Zap className="h-3 w-3 mr-1" />
              <span>B2B AI ENGAGEMENT SOLUTION</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              Skyrocket Your Website Sales by 85% with Chateleon Autonomous AI Agents
            </h1>
            
            <div className="space-y-6 mb-8">
              <p className="text-lg md:text-xl text-muted-foreground">
                24/7 Revenue Generation for Your Website
              </p>
              
              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r">
                <ul className="space-y-2 text-green-700">
                  <li className="flex items-center">
                    <span className="mr-2">📊</span> 75% Businesses Reduced Bounce Rates
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">🚀</span> 10X Increase in Website Traffic
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">✅</span> 99/100 People Filling Contact Forms
                  </li>
                </ul>
              </div>
              
              <p className="text-lg">
                Chateleon isn't just an animated mascot — it's a fully intelligent AI Agent that turns your traffic into paying customers, effortlessly.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:items-center mt-8">
              <a href="#free-trial" className="btn-primary">
                <span>🎁 Get 30-Day FREE Trial</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              
              <span className="text-sm text-muted-foreground text-center sm:text-left">No Credit Card Required</span>
            </div>
          </div>
          
          <div className="animate-fade-in delay-300 lg:ml-auto">
            <div className="glass-card p-6 md:p-8 shadow-lg max-w-md mx-auto lg:mx-0">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold mb-2">Start Your Free Trial</h3>
                <p className="text-muted-foreground">No credit card required</p>
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
