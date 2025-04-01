
import React from 'react';
import { Brain, MessageSquare, TrendingUp, ShoppingBag } from 'lucide-react';

const FeatureSection = () => {
  return (
    <section id="features" className="bg-gradient-to-b from-background to-accent/30 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-primary-light rounded-full mb-4">
            <span className="text-primary font-medium">🤖 Enter: Chateleon AI Agent</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Your Smart Engagement Assistant — On Auto-Pilot
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Unlike old-school chatbots, Chateleon learns, reacts, and engages with your website visitors in real-time. It's like hiring a 24/7 sales & support team, but AI-powered and lightning fast.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="feature-card">
            <div className="feature-icon">
              <Brain className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-2">Understands Behavior</h3>
            <p className="text-muted-foreground">
              Identifies who's about to bounce, who's interested, and who needs help – instantly.
            </p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">
              <MessageSquare className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-2">Engages Like a Human</h3>
            <p className="text-muted-foreground">
              Conversations that feel real – not robotic. No scripts. No spammy popups.
            </p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-2">Captures Leads On The Spot</h3>
            <p className="text-muted-foreground">
              Timing is everything. Chateleon knows when to ask for emails, numbers, and sales.
            </p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">
              <ShoppingBag className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-2">Boosts eCommerce Purchases</h3>
            <p className="text-muted-foreground">
              Suggests products, answers questions, guides shoppers, nudges carts to checkout.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-4">Key Features Built to Boost Revenue</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <div className="text-primary mr-3">🔄</div>
                  <div>
                    <p className="font-medium">Dynamic Engagement</p>
                    <p className="text-sm text-muted-foreground">Every visitor gets a tailored experience</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-primary mr-3">💬</div>
                  <div>
                    <p className="font-medium">Conversational Lead Capture</p>
                    <p className="text-sm text-muted-foreground">Converts like magic</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-primary mr-3">🛒</div>
                  <div>
                    <p className="font-medium">eCommerce Intelligence</p>
                    <p className="text-sm text-muted-foreground">Product guidance + upsells</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-primary mr-3">📥</div>
                  <div>
                    <p className="font-medium">Exit-Intent Rescue</p>
                    <p className="text-sm text-muted-foreground">Stops bounce traffic before it's gone</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-primary mr-3">🎯</div>
                  <div>
                    <p className="font-medium">Smart Targeting</p>
                    <p className="text-sm text-muted-foreground">Based on clicks, scrolls, hesitation</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-primary mr-3">🇮🇳</div>
                  <div>
                    <p className="font-medium">Multilingual AI</p>
                    <p className="text-sm text-muted-foreground">Hindi, Tamil, Bengali, Marathi & more</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-primary mr-3">📊</div>
                  <div>
                    <p className="font-medium">Live Engagement Metrics</p>
                    <p className="text-sm text-muted-foreground">See who's interacting & converting</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-primary mr-3">🤝</div>
                  <div>
                    <p className="font-medium">WhatsApp & CRM Integration</p>
                    <p className="text-sm text-muted-foreground">Route hot leads in real-time</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-blue text-white p-8 md:p-12 flex flex-col justify-center">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">Get Started in 3 Quick Steps</h3>
                <p className="text-white/80">It's easier than you think</p>
              </div>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-xl font-bold flex-shrink-0 mr-4">
                    1
                  </div>
                  <div>
                    <p className="font-bold">Sign Up – It's FREE for 30 Days</p>
                    <p className="text-white/80">No card. No pressure. Full access.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-xl font-bold flex-shrink-0 mr-4">
                    2
                  </div>
                  <div>
                    <p className="font-bold">Install a Tiny Code Snippet</p>
                    <p className="text-white/80">Takes 2 minutes. Or let our team do it for you.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-xl font-bold flex-shrink-0 mr-4">
                    3
                  </div>
                  <div>
                    <p className="font-bold">Watch Engagement & Sales Take Off</p>
                    <p className="text-white/80">Chateleon starts working immediately.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
