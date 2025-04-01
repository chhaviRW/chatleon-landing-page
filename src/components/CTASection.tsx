
import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import LeadForm from './LeadForm';

const CTASection = () => {
  return (
    <section id="free-trial" className="bg-gradient-blue text-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h2 className="text-4xl font-bold mb-6">
              🎁 Grab Your FREE 30-Day Trial Now
            </h2>
            
            <p className="text-xl mb-8 text-white/90">
              No credit card. No risk. Full results.
            </p>
            
            <div className="space-y-4 mb-8 max-w-md mx-auto lg:mx-0">
              <div className="flex items-center">
                <div className="bg-white/20 rounded-full p-1 mr-3">
                  <Check className="w-4 h-4" />
                </div>
                <span>Get more engagement</span>
              </div>
              <div className="flex items-center">
                <div className="bg-white/20 rounded-full p-1 mr-3">
                  <Check className="w-4 h-4" />
                </div>
                <span>Capture more leads</span>
              </div>
              <div className="flex items-center">
                <div className="bg-white/20 rounded-full p-1 mr-3">
                  <Check className="w-4 h-4" />
                </div>
                <span>Close more sales</span>
              </div>
              <div className="flex items-center">
                <div className="bg-white/20 rounded-full p-1 mr-3">
                  <Check className="w-4 h-4" />
                </div>
                <span>Track every move</span>
              </div>
            </div>
            
            <p className="text-xl font-medium mb-8">
              Let your website do the work for you with Chateleon AI Agent.
              <br />It's time your traffic actually converted. 🧠💼
            </p>
            
            <div className="hidden lg:block">
              <a href="#" className="inline-flex items-center justify-center bg-white text-primary font-bold px-8 py-4 rounded-lg hover:bg-white/90 transition-colors">
                <span>GET 30-DAY FREE TRIAL</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="glass-card bg-white/10 backdrop-blur p-6 md:p-8 rounded-2xl shadow-xl border border-white/20 max-w-md mx-auto">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-2">Start Your Free Trial</h3>
              <p className="text-white/80">No credit card required</p>
            </div>
            
            <LeadForm isLight={true} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
