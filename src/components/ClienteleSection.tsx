
import React, { useEffect, useRef } from 'react';

const ClienteleSection = () => {
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
    <section className="py-16 bg-white" ref={sectionRef} style={{ opacity: 0 }}>
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6">Partial Clientele List</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Trusted by leading organizations across industries and continents
          </p>
        </div>
        
        <div className="glass-card p-8">
          <img 
            src="/lovable-uploads/faf86709-973e-4752-bddc-dca3893f6c9b.png" 
            alt="Client logos including Australian Government, UNSW, Victoria Government, VicRoads, The Smith Family, Monash University, PWC, Vodafone, and more" 
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default ClienteleSection;
