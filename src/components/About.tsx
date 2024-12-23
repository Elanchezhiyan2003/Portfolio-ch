
import React from 'react';

const About = () => {
  return (
    <section id="About" className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-cyan-400">
            About Me
          </h2>
          <p className="text-gray-300 mt-4">
            Crafting immersive digital experiences with expertise in web development, design, and creativity.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info Card */}
          <div className="bg-gray-800 rounded-xl p-8 shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
            <h3 className="text-2xl font-semibold text-cyan-400 mb-4">
              Who Am I?
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              I'm Elanchezhiyan M, a passionate web developer specializing in creating modern, responsive, and user-friendly websites. With expertise in animations, app design, and SEO, I turn ideas into reality.
            </p>
            <a
              href="/ELANCHEZHIYAN's Resume (3).pdf"
              download
              className="inline-block px-6 py-3 bg-cyan-400 text-gray-900 font-medium rounded-full hover:bg-cyan-500 transition-colors duration-300"
            >
              Download Resume
            </a>
          </div>

          {/* Stats Card */}
          <div className="bg-gray-800 rounded-xl p-8 shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
            <h3 className="text-2xl font-semibold text-cyan-400 mb-4">
              Quick Facts
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between border-b border-gray-700 pb-2">
                <span className="text-gray-400">Name</span>
                <span className="text-gray-300">Elanchezhiyan M</span>
              </div>
              <div className="flex justify-between border-b border-gray-700 pb-2">
                <span className="text-gray-400">Age</span>
                <span className="text-gray-300">21</span>
              </div>
              <div className="flex justify-between border-b border-gray-700 pb-2">
                <span className="text-gray-400">Address</span>
                <span className="text-gray-300">Namakkal</span>
              </div>
              <div className="flex justify-between border-b border-gray-700 pb-2">
                <span className="text-gray-400">E-mail</span>
                <a
                  href="mailto:chezhiyanmahi2020@gmail.com"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  chezhiyanmahi2020@gmail.com
                </a>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Freelance</span>
                <span className="text-cyan-400">Available</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
