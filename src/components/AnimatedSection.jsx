import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const AnimatedSection = ({ children, className = '', animation = 'fade-up', delay = 0 }) => {
  const { elementRef, isVisible } = useIntersectionObserver({
    threshold: 0.2,
    rootMargin: '-50px',
  });

  const baseStyles = 'transition-all duration-700 opacity-0';
  const animationStyles = {
    'fade-up': 'translate-y-10',
    'fade-left': '-translate-x-10',
    'fade-right': 'translate-x-10',
  };

  const visibleStyles = 'opacity-100 translate-y-0 translate-x-0';

  return (
    <div
      ref={elementRef}
      className={`${baseStyles} ${animationStyles[animation]} ${
        isVisible ? visibleStyles : ''
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;