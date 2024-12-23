
import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-cyan-400 text-xl font-semibold">
            Elanchezhiyan Mahendiran
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#Hero" className="text-cyan-400 hover:text-cyan-300 transition-colors">Home</a>
            <a href="#About" className="text-cyan-400 hover:text-cyan-300 transition-colors">About</a>
            <a href="#Education" className="text-cyan-400 hover:text-cyan-300 transition-colors">Education</a>
            <a href="#Project" className="text-cyan-400 hover:text-cyan-300 transition-colors">Project</a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden text-cyan-400 focus:outline-none"
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" 
                />
              ) : (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16" 
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden flex flex-col space-y-2 mt-2">
            <a href="#Hero" className="text-cyan-400 hover:text-cyan-300 transition-colors">Home</a>
            <a href="#About" className="text-cyan-400 hover:text-cyan-300 transition-colors">About</a>
            <a href="#Education" className="text-cyan-400 hover:text-cyan-300 transition-colors">Education</a>
            <a href="#Project" className="text-cyan-400 hover:text-cyan-300 transition-colors">Project</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
