import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-cyan-400 text-xl font-semibold">
            Elanchezhiyan Mahendiran
          </div>
          <div className="flex space-x-8">
            <a href="#Hero" className="text-cyan-400 hover:text-cyan-300 transition-colors">Home</a>
            <a href="#About" className="text-cyan-400 hover:text-cyan-300 transition-colors">About</a>
            <a href="#Education" className="text-cyan-400 hover:text-cyan-300 transition-colors">Education</a>
            <a href="#Project" className="text-cyan-400 hover:text-cyan-300 transition-colors">Project</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;