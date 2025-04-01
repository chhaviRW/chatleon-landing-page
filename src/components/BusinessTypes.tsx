
import React from 'react';
import { ShoppingBag, Building, Code, Users } from 'lucide-react';

const BusinessTypes = () => {
  const businessTypes = [
    {
      icon: <ShoppingBag className="w-8 h-8" />,
      title: 'D2C or eCommerce brand',
      description: 'Increase conversions and reduce cart abandonment'
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: 'Local service business',
      description: 'Generate more qualified leads and bookings'
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Freelancer or startup',
      description: 'Engage visitors and grow your client base'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Agency or consultancy',
      description: 'Showcase expertise and capture high-value prospects'
    }
  ];

  return (
    <section id="business-types" className="bg-gradient-to-b from-white to-accent/30 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-primary-light rounded-full mb-4">
            <span className="text-primary font-medium">📣 Built for Business</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Built for Indian Business Owners in 2025
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Whether you're a growing startup or an established enterprise, Chateleon adapts to your business needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {businessTypes.map((type, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-[1.03]"
            >
              <div className="text-primary mb-4">{type.icon}</div>
              <h3 className="text-xl font-bold mb-2">{type.title}</h3>
              <p className="text-muted-foreground">{type.description}</p>
            </div>
          ))}
        </div>
        
        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl max-w-4xl mx-auto">
          <h3 className="text-xl font-bold text-red-700 mb-2">
            🔥 Don't Waste Another Click
          </h3>
          <p className="text-gray-700 mb-4">
            If you're spending on Meta ads, Google search or shopping ads, influencer campaigns, or affiliate/referral traffic but your visitors leave without action — you're leaking revenue every single day.
          </p>
          <p className="text-xl font-bold text-red-700">
            💸 Chateleon plugs that leak.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BusinessTypes;
