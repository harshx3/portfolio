import React from 'react';
import { Code2, ExternalLink } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import SectionTitle from './SectionTitle';

const Projects = () => {
  const projects = [
    {
      title: "Klimate",
      description: "An API driven web app for weather forecast in detailed view of 5 days with chart using TypeScript and React-Query",
      image: "./klimate.png",
      technologies: ["React", "API", "TypeScript", "Redux"],
      github: "https://github.com/harshx3/klimate",
      // demo: "#"
    },
    {
      title: "Paste",
      description: "Code snippet or text writting tool for maintaining your your text and code",
      image: "./paste.png",
      technologies: ["JavaScript", "HTML", "CSS"],
      github: "https://github.com/harshx3/paste",
      // demo: "#"
    }
  ];

  return (
    <div className="py-16 bg-gray-50" id="projects">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle icon={Code2} title="Projects" />

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <AnimatedSection
              key={index}
              // animation={index % 2 === 0 ? 'fade-left' : 'fade-right'}
              delay={index * 200}
            >
              <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-50 w-full object-contain"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a href={project.github} className="flex items-center text-gray-600 hover:text-blue-600">
                      <Code2 className="w-4 h-4 mr-2" />
                      Code
                    </a>
                    {/* <a href={project.demo} className="flex items-center text-gray-600 hover:text-blue-600">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a> */}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;