
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
              <span className="text-primary">Supercharge</span> Engagement. Capture <span className="text-primary">More</span> Leads. Drive <span className="text-primary">More</span> Sales.
            </h1>
            
            <div className="space-y-6 mb-8">
              <p className="text-lg md:text-xl text-muted-foreground">
                Meet <span className="font-bold">Chateleon AI Agent</span> – Your Website's 24/7 Revenue Assistant
              </p>
              
              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r">
                <p className="text-base md:text-lg text-red-700">
                  <span className="font-semibold">90% of business websites in India</span> are losing leads daily because of poor engagement.
                </p>
                <ul className="mt-2 space-y-1 text-red-600">
                  <li className="flex items-center">
                    <span className="mr-2">🚫</span> High bounce rates
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">😵‍💫</span> Low interaction
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">🛒</span> Abandoned carts
                  </li>
                </ul>
                <p className="mt-2 font-bold text-red-700">Not anymore.</p>
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
