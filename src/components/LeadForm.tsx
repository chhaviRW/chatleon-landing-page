
import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';
import { cn } from '@/lib/utils';

interface LeadFormProps {
  isLight?: boolean;
}

const LeadForm = ({ isLight = false }: LeadFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      toast({
        title: "Thank you for your interest!",
        description: "Your free trial has been activated.",
      });
    }, 1500);
  };

  if (submitted) {
    return (
      <div className={cn("text-center py-8 animate-fade-in", 
        isLight ? "text-white" : "text-foreground")}>
        <div className={cn("inline-flex items-center justify-center w-16 h-16 rounded-full mb-4",
          isLight ? "bg-white/20 text-white" : "bg-primary-light text-primary")}>
          <Check className="h-8 w-8" />
        </div>
        <h3 className="text-xl font-bold mb-2">Thank You!</h3>
        <p className={cn("mb-4", 
          isLight ? "text-white/80" : "text-muted-foreground")}>
          We've sent your trial activation details.
        </p>
        <a 
          href="#how-it-works" 
          className={cn("arrow-link", 
            isLight ? "text-white hover:text-white/80" : "text-primary hover:text-primary/80")}
        >
          <span>See how it works</span>
          <ArrowRight className="ml-2 h-4 w-4" />
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className={cn("block text-sm font-medium mb-1", 
          isLight ? "text-white" : "text-foreground")}>
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          placeholder="John Doe"
          className={cn("block w-full px-4 py-3 rounded-lg focus:ring-2 transition-all duration-200",
            isLight ? 
              "bg-white/10 backdrop-blur border border-white/20 text-white placeholder:text-white/50 focus:ring-white/50 focus:border-transparent" : 
              "bg-white/70 backdrop-blur border border-gray-200 focus:ring-primary focus:border-transparent"
          )}
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      
      <div>
        <label htmlFor="email" className={cn("block text-sm font-medium mb-1", 
          isLight ? "text-white" : "text-foreground")}>
          Business Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder="john@company.com"
          className={cn("block w-full px-4 py-3 rounded-lg focus:ring-2 transition-all duration-200",
            isLight ? 
              "bg-white/10 backdrop-blur border border-white/20 text-white placeholder:text-white/50 focus:ring-white/50 focus:border-transparent" : 
              "bg-white/70 backdrop-blur border border-gray-200 focus:ring-primary focus:border-transparent"
          )}
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      
      <div>
        <label htmlFor="company" className={cn("block text-sm font-medium mb-1", 
          isLight ? "text-white" : "text-foreground")}>
          Company
        </label>
        <input
          type="text"
          id="company"
          name="company"
          required
          placeholder="Your Company"
          className={cn("block w-full px-4 py-3 rounded-lg focus:ring-2 transition-all duration-200",
            isLight ? 
              "bg-white/10 backdrop-blur border border-white/20 text-white placeholder:text-white/50 focus:ring-white/50 focus:border-transparent" : 
              "bg-white/70 backdrop-blur border border-gray-200 focus:ring-primary focus:border-transparent"
          )}
          value={formData.company}
          onChange={handleChange}
        />
      </div>
      
      <div>
        <label htmlFor="role" className={cn("block text-sm font-medium mb-1", 
          isLight ? "text-white" : "text-foreground")}>
          Job Title
        </label>
        <input
          type="text"
          id="role"
          name="role"
          required
          placeholder="CEO, CTO, Director, etc."
          className={cn("block w-full px-4 py-3 rounded-lg focus:ring-2 transition-all duration-200",
            isLight ? 
              "bg-white/10 backdrop-blur border border-white/20 text-white placeholder:text-white/50 focus:ring-white/50 focus:border-transparent" : 
              "bg-white/70 backdrop-blur border border-gray-200 focus:ring-primary focus:border-transparent"
          )}
          value={formData.role}
          onChange={handleChange}
        />
      </div>
      
      <button
        type="submit"
        className={cn("w-full", 
          isLight ? 
            "px-6 py-3 bg-white text-primary font-medium rounded-lg shadow-md hover:bg-white/90 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-white/50 flex items-center justify-center" : 
            "btn-primary"
        )}
        disabled={loading}
      >
        {loading ? (
          <div className="flex items-center justify-center">
            <div className={cn("animate-spin rounded-full h-5 w-5 border-b-2 mr-2", 
              isLight ? "border-primary" : "border-white")}></div>
            <span>Processing...</span>
          </div>
        ) : (
          <span>{isLight ? "START FREE TRIAL" : "Download Brochure"}</span>
        )}
      </button>
      
      <p className={cn("text-xs text-center mt-4", 
        isLight ? "text-white/70" : "text-muted-foreground")}>
        By submitting, you agree to our Privacy Policy and Terms of Service.
      </p>
    </form>
  );
};

export default LeadForm;
