import React from 'react';
import AnimatedSection from './AnimatedSection';

const SectionTitle = ({ icon: Icon, title }) => {
  return (
    <AnimatedSection className="text-center mb-12">
      <Icon className="w-12 h-12 mx-auto text-blue-600 mb-4" />
      <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
    </AnimatedSection>
  );
};

export default SectionTitle;