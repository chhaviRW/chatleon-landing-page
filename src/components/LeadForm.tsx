
import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const LeadForm = () => {
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
        description: "Your brochure download link has been sent to your email.",
      });
    }, 1500);
  };

  if (submitted) {
    return (
      <div className="text-center py-8 animate-fade-in">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-light text-primary mb-4">
          <Check className="h-8 w-8" />
        </div>
        <h3 className="text-xl font-bold mb-2">Thank You!</h3>
        <p className="text-muted-foreground mb-4">
          We've sent the brochure to your email.
        </p>
        <a 
          href="#program" 
          className="arrow-link"
        >
          <span>Explore our program</span>
          <ArrowRight className="ml-2 h-4 w-4" />
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          placeholder="John Doe"
          className="input-field"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
          Business Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder="john@company.com"
          className="input-field"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      
      <div>
        <label htmlFor="company" className="block text-sm font-medium text-foreground mb-1">
          Company
        </label>
        <input
          type="text"
          id="company"
          name="company"
          required
          placeholder="Your Company"
          className="input-field"
          value={formData.company}
          onChange={handleChange}
        />
      </div>
      
      <div>
        <label htmlFor="role" className="block text-sm font-medium text-foreground mb-1">
          Job Title
        </label>
        <input
          type="text"
          id="role"
          name="role"
          required
          placeholder="CEO, CTO, Director, etc."
          className="input-field"
          value={formData.role}
          onChange={handleChange}
        />
      </div>
      
      <button
        type="submit"
        className="btn-primary w-full"
        disabled={loading}
      >
        {loading ? (
          <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
            <span>Processing...</span>
          </div>
        ) : (
          <span>Download Brochure</span>
        )}
      </button>
      
      <p className="text-xs text-muted-foreground text-center mt-4">
        By submitting, you agree to our Privacy Policy and Terms of Service.
      </p>
    </form>
  );
};

export default LeadForm;
