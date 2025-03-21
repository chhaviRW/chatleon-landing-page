
import React, { useEffect, useRef } from 'react';
import { UserCircle2, Users, BriefcaseBusiness } from 'lucide-react';

const AudienceSection = () => {
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

  const audiences = [
    {
      icon: <UserCircle2 className="h-10 w-10" />,
      title: 'C-Suite Executives',
      description: 'Navigate AI strategy with confidence and align AI with your business goals. Our AI training module for business leaders ensures you make informed strategic decisions that drive growth and innovation.',
      roles: [
        'Chief Executive Officer (CEO)',
        'President',
        'Managing Director',
        'Chief Financial Officer (CFO)',
        'Chief Operating Officer (COO)',
        'Chief Technology Officer (CTO)',
        'Chief Human Resources Officer (CHRO)'
      ]
    },
    {
      icon: <BriefcaseBusiness className="h-10 w-10" />,
      title: 'Business Function Heads',
      description: 'From marketing to operations, our AI training course provides tools to integrate AI into your department's workflow for maximum impact.',
      roles: [
        'Vice Presidents',
        'Directors',
        'Heads of Departments'
      ]
    },
    {
      icon: <Users className="h-10 w-10" />,
      title: 'Senior Managers',
      description: 'Drive AI adoption and cultivate a culture of innovation. Our executive AI training equips managers with the knowledge to lead AI-driven transformation.',
      roles: [
        'Senior Project Managers',
        'Team Leaders',
        'Innovation Managers',
        'Technical Leads'
      ]
    }
  ];

  return (
    <section id="audience" className="py-20 bg-gradient-subtle" ref={sectionRef} style={{ opacity: 0 }}>
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Who Is This Program For?</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our AI training course is meticulously designed for business leaders at various levels who want to harness the power of AI for strategic growth and innovation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {audiences.map((audience, index) => (
            <div 
              key={index} 
              className="glass-card p-8 hover:shadow-glass-intense transition-all duration-300 h-full flex flex-col"
            >
              <div className="mb-6 h-16 w-16 rounded-xl bg-primary-light flex items-center justify-center text-primary">
                {audience.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{audience.title}</h3>
              <p className="text-muted-foreground mb-6">{audience.description}</p>
              
              <div className="mt-auto">
                <p className="font-medium mb-4">Ideal for:</p>
                <ul className="space-y-2">
                  {audience.roles.map((role, roleIdx) => (
                    <li key={roleIdx} className="flex items-center">
                      <div className="w-5 h-5 rounded-full bg-primary-light flex items-center justify-center mr-3">
                        <Check className="h-3 w-3 text-primary" />
                      </div>
                      <span>{role}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a href="#register" className="btn-primary">
            Find Your Program
          </a>
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;

// Import the Check icon at the top
import { Check } from 'lucide-react';
