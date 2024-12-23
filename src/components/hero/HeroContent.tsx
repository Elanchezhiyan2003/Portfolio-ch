import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroContent = () => {
  return (
    <div className="flex-1 space-y-8 text-center md:text-left">
      <div className="space-y-4">
        <h2 className="text-5xl md:text-6xl text-cyan-400 font-light animate-fade-in">
          Hello!
        </h2>
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          I Am a Web Developer
        </h1>
        <p className="text-cyan-400/80 text-lg max-w-2xl leading-relaxed">
          Crafting beautiful and functional web experiences with modern technologies.
          Specialized in creating responsive, user-friendly applications that make an impact.
        </p>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
        <a
          href="#Contact-us"
          className="group inline-flex items-center justify-center px-8 py-3 border-2 border-cyan-400 text-cyan-400 rounded-full hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300"
        >
          Contact Me
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </a>
        <a
          href="#Project"
          className="group inline-flex items-center justify-center px-8 py-3 bg-gray-800 text-cyan-400 rounded-full hover:bg-gray-700 transition-all duration-300"
        >
          View Projects
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  );
};

export default HeroContent;