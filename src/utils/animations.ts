
import { useEffect, useRef } from 'react';

export const useIntersectionObserver = (
  callback: IntersectionObserverCallback,
  options: IntersectionObserverInit = {}
) => {
  const observer = useRef<IntersectionObserver | null>(null);
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(callback, options);
    
    if (targetRef.current) {
      observer.current.observe(targetRef.current);
    }
    
    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [callback, options]);

  return targetRef;
};

export const useAnimateInView = (
  className: string = 'animate-fade-up',
  options: IntersectionObserverInit = { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
) => {
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.target) {
          entry.target.classList.add(className);
          // Important: Set opacity to 1 explicitly once in view
          (entry.target as HTMLElement).style.opacity = '1';
          // Stop observing after animation is triggered
          observer.unobserve(entry.target);
        }
      });
    }, options);
    
    if (targetRef.current) {
      observer.observe(targetRef.current);
    }
    
    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, [className, options]);

  return targetRef;
};

export const useStaggerAnimation = (
  selector: string,
  delay: number = 100,
  options: IntersectionObserverInit = { threshold: 0.1 }
) => {
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const elements = entry.target.querySelectorAll(selector);
          elements.forEach((el, index) => {
            setTimeout(() => {
              (el as HTMLElement).style.opacity = '1';
              (el as HTMLElement).style.transform = 'translateY(0)';
            }, index * delay);
          });
          // Stop observing after animation is triggered
          observer.unobserve(entry.target);
        }
      });
    }, options);
    
    if (targetRef.current) {
      observer.observe(targetRef.current);
    }
    
    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, [selector, delay, options]);

  return targetRef;
};
