
import React from 'react';
import { Users, Award, GraduationCap, Globe, Clock } from 'lucide-react';
import { useAnimateInView } from '@/utils/animations';

const ProgramStats = () => {
  const sectionRef = useAnimateInView();

  const stats = [
    {
      value: '130+',
      label: 'Powerhouse team of seasoned International mentors',
      icon: <Users className="h-6 w-6" />
    },
    {
      value: '9+',
      label: 'Distinguished AI industry experts',
      icon: <Award className="h-6 w-6" />
    },
    {
      value: '10',
      label: 'Ranked Top 10 EdTech by the Australian Department of Education',
      icon: <GraduationCap className="h-6 w-6" />
    },
    {
      value: '5000+',
      label: 'Business leaders trained worldwide',
      icon: <Users className="h-6 w-6" />
    }
  ];

  const details = [
    {
      label: 'Designed for Business Leaders',
      icon: <Users className="h-6 w-6" />
    },
    {
      label: 'Adopted by 5000+ business leaders',
      icon: <Users className="h-6 w-6" />
    },
    {
      label: 'Flexible learning',
      icon: <Clock className="h-6 w-6" />
    },
    {
      label: 'Duration: 2 Days (Online | On-Site)',
      icon: <Clock className="h-6 w-6" />
    },
    {
      label: '3+ Continents',
      icon: <Globe className="h-6 w-6" />
    },
    {
      label: '4+ Countries',
      icon: <Globe className="h-6 w-6" />
    }
  ];

  return (
    <section className="py-16 bg-gradient-subtle" ref={sectionRef} style={{ opacity: 0 }}>
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-8">Program Statistics</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="glass-card p-6 flex flex-col">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center text-primary mr-3">
                      {stat.icon}
                    </div>
                    <span className="text-3xl font-bold text-primary">{stat.value}</span>
                  </div>
                  <p className="text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold mb-8">Program Details</h2>
            <div className="glass-card p-6">
              <ul className="space-y-4">
                {details.map((detail, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-primary-light flex items-center justify-center text-primary mr-3">
                      {detail.icon}
                    </div>
                    <span className="text-base">{detail.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramStats;
