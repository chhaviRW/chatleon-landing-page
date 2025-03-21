
import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

interface CountdownProps {
  targetDate: Date;
}

const CountdownBar: React.FC<CountdownProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +targetDate - +new Date();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        });
      }
    };
    
    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const showPosition = 300; // Show after scrolling 300px
      
      if (scrollPosition > showPosition) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      clearInterval(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [targetDate]);

  const timeUnits = [
    { value: timeLeft.days, label: 'DAYS' },
    { value: timeLeft.hours, label: 'HOURS' },
    { value: timeLeft.minutes, label: 'MINUTES' },
    { value: timeLeft.seconds, label: 'SECONDS' }
  ];

  return (
    <div 
      className={`fixed bottom-0 left-0 right-0 z-50 transition-transform duration-500 ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="glass-morphism bg-white/90 shadow-lg border-t border-gray-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="flex items-center">
              <Clock className="w-5 h-5 text-primary mr-2" />
              <span className="font-medium">PRICES INCREASE IN:</span>
            </div>
            
            <div className="flex items-center space-x-4">
              {timeUnits.map((unit, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="text-2xl font-bold min-w-[2ch] text-center">
                    {unit.value.toString().padStart(2, '0')}
                  </div>
                  <div className="text-xs">{unit.label}</div>
                </div>
              ))}
            </div>
            
            <a 
              href="#register" 
              className="btn-primary ml-0 sm:ml-6 whitespace-nowrap"
            >
              Register Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownBar;
