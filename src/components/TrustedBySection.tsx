
import React from 'react';
import { Star, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const reviews = [
  {
    name: "Rahul Sharma",
    company: "TechSolutions India",
    image: "/placeholder.svg",
    text: "Chateleon AI has transformed how we capture leads. Our conversion rate is up by 45% in just two months!",
    rating: 5
  },
  {
    name: "Priya Patel",
    company: "Fashionista eCommerce",
    image: "/placeholder.svg",
    text: "The AI agent understands exactly what our customers need. We've seen a 72% increase in completed purchases since implementation.",
    rating: 5
  },
  {
    name: "Vikram Mehta",
    company: "PropertyGuru Chennai",
    image: "/placeholder.svg",
    text: "Incredible product! Our bounce rates dropped from 65% to 23% within weeks. Chateleon pays for itself many times over.",
    rating: 4
  },
  {
    name: "Ananya Desai",
    company: "HealthPlus Wellness",
    image: "/placeholder.svg",
    text: "The multilingual support is a game-changer for us. Now we engage customers in Hindi, Tamil, and English, all automatically!",
    rating: 5
  }
];

const TrustedBySection = () => {
  return (
    <section className="py-16 bg-accent/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-primary-light rounded-full mb-4">
            <Users className="w-4 h-4 text-primary mr-2" />
            <span className="text-primary font-medium">Trusted by Businesses</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by 1200+ Business Owners from India
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            See what our customers are saying about Chateleon AI
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, index) => (
            <Card key={index} className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden mr-4">
                    <img 
                      src={review.image} 
                      alt={review.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">{review.name}</h4>
                    <p className="text-sm text-muted-foreground">{review.company}</p>
                  </div>
                </div>
                
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
                
                <p className="text-muted-foreground">"{review.text}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;
