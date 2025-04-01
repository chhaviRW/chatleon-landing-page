
import React from 'react';
import { ArrowRight } from 'lucide-react';

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-primary-light rounded-full mb-4">
            <span className="text-primary font-medium">🛠 How It Works</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get Started in 3 Quick Steps
          </h2>
        </div>
        
        <div className="relative">
          {/* Connector line */}
          <div className="hidden md:block absolute left-1/2 top-16 bottom-16 w-1 bg-gradient-blue -translate-x-1/2 z-0"></div>
          
          <div className="relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
              <div className="md:text-right flex flex-col justify-center order-2 md:order-1">
                <h3 className="text-2xl font-bold mb-4">Sign Up – It's FREE for 30 Days</h3>
                <p className="text-muted-foreground mb-4">
                  Get full access to all Chateleon features without any commitment. No credit card required for your 30-day trial.
                </p>
                <div className="flex justify-start md:justify-end">
                  <a href="#free-trial" className="arrow-link">
                    <span>Start your free trial</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
              <div className="order-1 md:order-2 flex justify-start md:justify-start">
                <div className="w-16 h-16 bg-gradient-blue text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg">
                  1
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
              <div className="flex justify-end md:justify-end">
                <div className="w-16 h-16 bg-gradient-blue text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg">
                  2
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-4">Install a Tiny Code Snippet</h3>
                <p className="text-muted-foreground mb-4">
                  Adding Chateleon to your website takes just 2 minutes with our simple code snippet. 
                  Need help? Our team can handle the installation for you at no extra cost.
                </p>
                <div className="flex">
                  <a href="#" className="arrow-link">
                    <span>View installation guide</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="md:text-right flex flex-col justify-center order-2 md:order-1">
                <h3 className="text-2xl font-bold mb-4">Watch Engagement & Sales Take Off</h3>
                <p className="text-muted-foreground mb-4">
                  Chateleon starts working immediately. Just sit back and watch as your 
                  website engagement increases and your leads and sales grow.
                </p>
                <div className="flex justify-start md:justify-end">
                  <a href="#results" className="arrow-link">
                    <span>See expected results</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
              <div className="order-1 md:order-2 flex justify-start md:justify-start">
                <div className="w-16 h-16 bg-gradient-blue text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg">
                  3
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
