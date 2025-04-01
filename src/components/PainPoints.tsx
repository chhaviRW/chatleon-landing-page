
import React from 'react';
import { AlertTriangle } from 'lucide-react';

const PainPoints = () => {
  const painPoints = [
    {
      icon: '🔻',
      title: 'Bounce Rates Over 50%?',
      description: "You're losing half your traffic before they even scroll."
    },
    {
      icon: '👻',
      title: 'Visitors Leave Without Action?',
      description: "Static pages don't hold attention."
    },
    {
      icon: '💬',
      title: 'Nobody Filling Your Contact Form?',
      description: "They're bored. Or confused. Or both."
    },
    {
      icon: '🛒',
      title: 'eCommerce Conversions Low?',
      description: "Users get stuck, distracted, or click away."
    },
    {
      icon: '💸',
      title: 'Spending on Ads with No ROI?',
      description: "You're burning money on traffic that doesn't convert."
    }
  ];

  return (
    <section id="pain-points" className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-red-50 rounded-full mb-4">
            <AlertTriangle className="w-5 h-5 text-red-500 mr-2" />
            <span className="text-red-700 font-medium">Website Pain Points</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Website Pain Points That Cost You Sales
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            <span className="font-medium">You might not even know these issues are hurting your bottom line</span>
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {painPoints.map((point, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="text-4xl mb-4">{point.icon}</div>
              <h3 className="text-xl font-bold mb-2">{point.title}</h3>
              <p className="text-muted-foreground">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
