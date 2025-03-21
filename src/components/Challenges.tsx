
import React, { useEffect, useRef } from 'react';
import { HelpCircle, TrendingUp, Database, BrainCircuit, Users } from 'lucide-react';

const Challenges = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-up');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="py-20 bg-gradient-subtle" ref={sectionRef} style={{ opacity: 0 }}>
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Program Overview</h2>
          <p className="text-lg text-muted-foreground">
            In today's fast-changing business landscape, ignoring AI is no longer an option. AI training for business leaders is essential as AI is transforming industries worldwide. But turning AI potential into real business value can feel overwhelming.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="glass-card p-8 flex flex-col items-center text-center">
            <div className="text-4xl font-bold text-primary mb-2">38%</div>
            <p className="text-lg mb-6">Businesses have Implemented AI in some form</p>
            <div className="w-32 h-12 bg-gray-200 rounded-md flex items-center justify-center">
              <span className="font-medium text-sm">SPICE WORKS</span>
            </div>
          </div>
          
          <div className="glass-card p-8 flex flex-col items-center text-center">
            <div className="text-4xl font-bold text-primary mb-2">54%</div>
            <p className="text-lg mb-6">Business Leaders cite a lack of AI readiness as a primary reason for not adopting AI</p>
            <div className="w-32 h-12 bg-gray-200 rounded-md flex items-center justify-center">
              <span className="font-medium text-sm">WORLD ECONOMIC FORUM</span>
            </div>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-8 text-center">Common Challenges</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="flex items-start p-6 glass-card">
              <div className="flex-shrink-0 mr-4">
                <div className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center">
                  <HelpCircle className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h4 className="text-xl font-medium mb-2">Where do I begin?</h4>
                <p className="text-muted-foreground">
                  Understanding how to start your AI journey and identify the right opportunities.
                </p>
              </div>
            </div>
            
            <div className="flex items-start p-6 glass-card">
              <div className="flex-shrink-0 mr-4">
                <div className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center">
                  <Database className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h4 className="text-xl font-medium mb-2">Navigating Complexities</h4>
                <p className="text-muted-foreground">
                  Understanding AI technologies and their practical business applications.
                </p>
              </div>
            </div>
            
            <div className="flex items-start p-6 glass-card">
              <div className="flex-shrink-0 mr-4">
                <div className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h4 className="text-xl font-medium mb-2">AI Strategy Development</h4>
                <p className="text-muted-foreground">
                  Creating a coherent AI roadmap that aligns with business objectives.
                </p>
              </div>
            </div>
            
            <div className="flex items-start p-6 glass-card">
              <div className="flex-shrink-0 mr-4">
                <div className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h4 className="text-xl font-medium mb-2">Building AI Teams</h4>
                <p className="text-muted-foreground">
                  Assembling and leading teams with the right skills to execute AI initiatives.
                </p>
              </div>
            </div>
          </div>
          
          <div className="glass-card p-8 text-center">
            <p className="text-lg mb-6">
              <span className="font-medium">You're not alone.</span> Our AI leadership training equips executives with the right skills to drive AI initiatives with confidence. With expert-led instruction and practical applications, you'll gain the skills needed to transform AI from idea to results.
            </p>
            <a href="#register" className="btn-primary inline-flex">
              Join The Program
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Challenges;
