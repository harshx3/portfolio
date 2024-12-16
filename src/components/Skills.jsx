import React from 'react';
import { Code, Wrench } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import SectionTitle from './SectionTitle';

const Skills = () => {
  const skills = [
    {
      category: "Frontend Development",
      items: [
        { name: "React.js", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "TypeScript", level: 45 },
        { name: "HTML/CSS", level: 95 },
        { name: "Tailwind CSS", level: 88 },
      ]
    },
    {
      category: "Backend Development",
      items: [
        { name: "API Integration", level: 80 },
        { name: "Node.js", level: 60 },
        { name: "PostgreSQL", level: 45 },
        { name: "MongoDB", level: 50 },
        { name: "SQL", level: 70 }
      ]
    }
  ];

  const SkillBar = ({ name, level, delay }) => (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="text-gray-700 font-medium">{name}</span>
        <span className="text-gray-600">{level}%</span>
      </div>
      <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
        <AnimatedSection
          className="h-full bg-blue-600 rounded-full transition-all duration-1000"
          delay={delay}
        >
          <div style={{ width: `${level}%` }} className="h-full" />
        </AnimatedSection>
      </div>
    </div>
  );

  return (
    <div className="py-16 bg-white" id="skills">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle icon={Wrench} title="Skills" />

        <div className="grid md:grid-cols-2 gap-12">
          {skills.map((category, categoryIndex) => (
            <AnimatedSection
              key={categoryIndex}
              // animation={categoryIndex % 2 === 0 ? 'fade-right' : 'fade-left'}
              delay={categoryIndex * 100}
            >
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                  <Code className="w-5 h-5 mr-2 text-blue-600" />
                  {category.category}
                </h3>
                <div>
                  {category.items.map((skill, index) => (
                    <SkillBar
                      key={index}
                      name={skill.name}
                      level={skill.level}
                      delay={index * 100}
                    />
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;