
import React from 'react';
import { Quote } from 'lucide-react';

const TestimonialSection = () => {
  const testimonials = [
    {
      quote: "We doubled engagement and saw 3x the leads in our first 20 days.",
      author: "Vishal D.",
      position: "Founder, Urban Organics",
      image: "/placeholder.svg"
    },
    {
      quote: "Chateleon literally pays for itself. Our sales went up 35% in 3 weeks.",
      author: "Neha R.",
      position: "Owner, IndiaFashionMart",
      image: "/placeholder.svg"
    },
    {
      quote: "We're capturing leads we never would have gotten before. The ROI is clear.",
      author: "Ajay M.",
      position: "Marketing Director, TechSolve",
      image: "/placeholder.svg"
    }
  ];

  return (
    <section className="bg-gradient-to-b from-accent/30 to-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-primary-light rounded-full mb-4">
            <span className="text-primary font-medium">💬 Testimonials</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Customers Say
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 relative"
            >
              <div className="absolute top-4 left-4 text-primary/20">
                <Quote className="w-10 h-10" />
              </div>
              <div className="pt-8 pb-4">
                <p className="text-lg italic">"{testimonial.quote}"</p>
              </div>
              <div className="flex items-center mt-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 mr-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author} 
                    className="w-12 h-12 rounded-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
