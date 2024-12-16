import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white" id='hero'>
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <img
            src="./user.JPG"
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-blue-500 object-cover"
          />
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Harsh Makwana</h1>
          <p className="text-xl text-blue-600 md:text-2xl mb-6">Front-End Developer</p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Passionate about creating beautiful and functional web applications.
            Specialized in JavaScript, React, Node.js, and modern web technologies.
          </p>
        </div>

        <div className="flex justify-center space-x-6">
          <a href="https://github.com/harshx3" className="text-gray-300 hover:text-blue-500 transition-colors cursor-pointer" target='_blank'>
            <Github className="w-6 h-6 " />
          </a>
          <a href="https://www.linkedin.com/in/harsh-makwana-415289185/" className="text-gray-300 hover:text-blue-500 transition-colors cursor-pointer" target='_blank'>
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="mailto:harshmakwana686@outlook.com?subject=Opening for FrontEnd Engineer" className="text-gray-300 hover:text-blue-500 transition-colors cursor-pointer" target='_blank'>
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;