import React from 'react';
import Flex from '../assets/flex.jpg';

const ProjectCard = ({ number }: { number: number }) => (
  <div className="bg-gray-800/50 rounded-xl overflow-hidden hover:shadow-lg hover:shadow-cyan-400/50 transition-all duration-300 transform hover:-translate-y-2">
    <img
      src={Flex}
      alt={`Project ${number}`}
      className="w-full h-48 object-cover"
    />
    <div className="p-6">
      <h3 className="text-xl text-white font-semibold mb-3">Project {number}</h3>
      <p className="text-gray-400 mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
        Praesent libero.
      </p>
      <button className="w-full px-6 py-2 border-2 border-cyan-400 text-cyan-400 rounded-full hover:bg-cyan-400 hover:text-gray-900 transition-colors duration-300">
        View Project
      </button>
    </div>
  </div>
);

const Projects = () => {
  return (
    <section id="Project" className="bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl text-cyan-400 font-bold text-center mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((num) => (
            <ProjectCard key={num} number={num} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;