import React from 'react';
import { Briefcase } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import SectionTitle from './SectionTitle';

const Experience = () => {
  const experiences = [
    {
      title: "Front-End Engineer",
      jobType: "Internship",
      company: "Tech Mahindra",
      period: "Jul-2021 to Aug-2021",
      description: "Worked on frontend development team, implementing new features, and improving performance."
    },

  ];

  return (
    <div className="py-16 bg-white" id="experience">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle icon={Briefcase} title="Work Experience" />

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <AnimatedSection
              key={index}
              animation="fade-right"
              delay={index * 200}
              className="relative pl-8 border-l-2 border-blue-500"
            >
              <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-2" />
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
                  <span className="text-sm text-gray-600">{exp.period}</span>
                </div>
                <h6 className='text-gray-600'>{exp.jobType}</h6>
                <p className="text-lg text-blue-600 mb-2">{exp.company}</p>
                <p className="text-gray-600">{exp.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;