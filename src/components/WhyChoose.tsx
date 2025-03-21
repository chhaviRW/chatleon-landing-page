
import React, { useEffect, useRef } from 'react';
import { Check, Trophy, Book, Users, Award, Globe, ShieldCheck } from 'lucide-react';

const WhyChoose = () => {
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

  const reasons = [
    {
      icon: <Trophy className="h-8 w-8" />,
      title: 'Taught by Industry Experts',
      description: 'Learn from AI practitioners with real-world experience in driving AI strategy and implementation at top organizations.'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Designed for Business Leaders',
      description: 'This isn\'t just another technical course. Our AI training for business leaders focuses on AI readiness, strategic frameworks, and business impact.'
    },
    {
      icon: <Book className="h-8 w-8" />,
      title: 'Practical, Hands-On Approach',
      description: 'Apply what you learn immediately with real-world case studies, interactive sessions, and business simulations.'
    },
    {
      icon: <ShieldCheck className="h-8 w-8" />,
      title: 'Flexible Learning Options',
      description: 'Whether you prefer online or in-person AI training workshops, our program is designed to fit your schedule.'
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Globally Recognized Certification',
      description: 'Earn a certification in AI leadership training, enhancing your credibility and positioning you as a forward-thinking executive.'
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: 'Exclusive Networking Opportunities',
      description: 'Connect with top executives, industry experts, and AI pioneers in our growing community of AI-driven leaders.'
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-white" ref={sectionRef} style={{ opacity: 0 }}>
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Why Choose Our AI Training Course?</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Choosing the right AI training program is crucial for business leaders looking to stay ahead in today's digital economy. Here's why our executive AI training stands out:
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="p-8 glass-card flex flex-col subtle-animation">
              <div className="mb-6 w-14 h-14 rounded-full bg-primary-light flex items-center justify-center text-primary">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{reason.title}</h3>
              <p className="text-muted-foreground">{reason.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 max-w-3xl mx-auto text-center glass-card p-8">
          <p className="text-lg mb-6">
            Our program bridges the gap between AI vision and actionable business strategies.
          </p>
          <a href="#register" className="btn-primary">
            Enroll Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
