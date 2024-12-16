import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import SectionTitle from './SectionTitle';

const Education = () => {
  const education = [
    {
      degree: "Master of Science",
      school: "University of the Cumberlands",
      year: "2023-2024",
      description: "Information Technology",
      place: "Gujarat, IND",
    },
    {
      degree: "Bachelor of Technology",
      school: "Sankalchand Patel University",
      year: "2017-2012",
      description: "Information Technology",
      place: "Kentucky, USA",
    }
  ];

  return (
    <div className="py-16 bg-gray-50" id="education">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle icon={GraduationCap} title="Education" />

        <div className="space-y-8">
          {education.map((edu, index) => (
            <AnimatedSection
              key={index}
              animation="fade-left"
              delay={index * 200}
            >
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">{edu.degree}</h3>
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{edu.year}</span>
                  </div>
                </div>
                <div className='flex justify-between'>
                  <p className="text-lg text-blue-600 mb-2">{edu.school}</p>
                  <span className='text-gray-600'>{edu.place}</span>
                </div>
                <p className="text-gray-600">{edu.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;