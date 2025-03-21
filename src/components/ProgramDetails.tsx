
import React, { useEffect, useRef } from 'react';
import { Users, Calendar, MapPin, Globe } from 'lucide-react';

const ProgramDetails = () => {
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

  const stats = [
    { 
      icon: <Users className="h-8 w-8 text-primary" />,
      value: '5000+', 
      label: 'Business Leaders' 
    },
    { 
      icon: <Calendar className="h-8 w-8 text-primary" />,
      value: '2 Days', 
      label: 'Online & On-Site' 
    },
    { 
      icon: <Globe className="h-8 w-8 text-primary" />,
      value: '3+', 
      label: 'Continents' 
    },
    { 
      icon: <MapPin className="h-8 w-8 text-primary" />,
      value: '4+', 
      label: 'Countries' 
    },
  ];

  return (
    <section id="program" className="py-20 bg-white" ref={sectionRef} style={{ opacity: 0 }}>
      <div className="section-container">
        <div className="text-center mb-16">
          <div className="pill-tag mb-4">Designed for Business Leaders</div>
          <h2 className="text-4xl font-bold mb-6">Program Details</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive AI training program is designed specifically for business executives to provide practical, applicable knowledge that drives real results.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="stat-block group subtle-animation"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 glass-card p-8 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-6">Why Join Our Program?</h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary-light text-primary flex items-center justify-center mr-3 mt-0.5">
                <Check className="h-3.5 w-3.5" />
              </div>
              <p>
                <span className="font-medium">Elite Network:</span> Join the UAE's most ambitious executives in shaping the nation's AI-driven future
              </p>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary-light text-primary flex items-center justify-center mr-3 mt-0.5">
                <Check className="h-3.5 w-3.5" />
              </div>
              <p>
                <span className="font-medium">Top-Rated Program:</span> #1 for AI Training Programs in the UAE
              </p>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary-light text-primary flex items-center justify-center mr-3 mt-0.5">
                <Check className="h-3.5 w-3.5" />
              </div>
              <p>
                <span className="font-medium">Practical Focus:</span> Frameworks to Build AI Strategies for immediate implementation
              </p>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary-light text-primary flex items-center justify-center mr-3 mt-0.5">
                <Check className="h-3.5 w-3.5" />
              </div>
              <p>
                <span className="font-medium">Real-World Application:</span> Business Case Studies Across Industries relevant to your sector
              </p>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary-light text-primary flex items-center justify-center mr-3 mt-0.5">
                <Check className="h-3.5 w-3.5" />
              </div>
              <p>
                <span className="font-medium">Interactive Learning:</span> Live Sessions on AI Strategy and Applications with industry experts
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProgramDetails;

// Import the Check icon at the top
import { Check } from 'lucide-react';
