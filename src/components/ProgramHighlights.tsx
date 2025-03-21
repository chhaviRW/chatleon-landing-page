
import React, { useEffect, useRef } from 'react';
import { 
  BrainCircuit, 
  Users, 
  GraduationCap, 
  Globe, 
  Lightbulb 
} from 'lucide-react';

const ProgramHighlights = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.highlight-card');
            elements.forEach((el, index) => {
              setTimeout(() => {
                (el as HTMLElement).style.opacity = '1';
                (el as HTMLElement).style.transform = 'translateY(0)';
              }, index * 150);
            });
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

  const highlights = [
    {
      icon: <BrainCircuit className="w-8 h-8" />,
      title: 'Learn from Industry Experts',
      description: 'Top AI professionals deliver hands-on AI training programs tailored for top management. Gain insights that create measurable business impact.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'In-Person Experience',
      description: 'Join an exclusive 3-hour AI training workshop where you\'ll collaborate, network, and engage in immersive learning.'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Global Business Community',
      description: 'Connect with a global network of C-suite executives, scholars, and AI industry leaders.'
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Industry Speakers',
      description: 'Gain real-world insights from accomplished professionals who have successfully implemented AI in their businesses.'
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: 'Expert Trainers',
      description: 'Expert AI Tutors from Australia, USA, Singapore and India bring diverse perspectives and cutting-edge knowledge.'
    }
  ];

  return (
    <section className="py-20 bg-accent" ref={sectionRef}>
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">What Can The Course Do For You?</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our program is meticulously designed to provide you with practical AI knowledge, strategic frameworks, and implementation tools that can be applied immediately to your business.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <div 
              key={index}
              className="highlight-card glass-card p-8 flex flex-col items-start subtle-animation"
              style={{ 
                opacity: 0, 
                transform: 'translateY(20px)', 
                transition: 'all 0.6s ease-out'
              }}
            >
              <div className="mb-6 w-14 h-14 rounded-full bg-primary-light flex items-center justify-center text-primary">
                {highlight.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{highlight.title}</h3>
              <p className="text-muted-foreground">{highlight.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a href="#register" className="btn-primary">
            Secure Your Spot
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProgramHighlights;
