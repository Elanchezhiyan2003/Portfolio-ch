import React from 'react';

const About = () => {
  return (
    <section id="About" className="bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-800/50 rounded-xl p-8 hover:shadow-lg hover:shadow-cyan-400/50 transition-shadow duration-300">
          <h2 className="text-3xl text-cyan-400 font-semibold mb-6">
            I am Professional Web Developer
          </h2>
          <p className="text-gray-300 mb-8 leading-relaxed">
            In the realm where creativity intertwines with technical prowess, I orchestrate
            a symphony of digital artistry. With expertise spanning web development,
            photography, design, app innovation, video editing, and the intricacies of SEO,
            I sculpt immersive digital experiences that transcend the ordinary.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-300">
            <div>
              <ul className="space-y-3">
                <li>Name</li>
                <li>Age</li>
                <li>Address</li>
                <li>E-mail</li>
                <li>Freelance</li>
              </ul>
            </div>
            <div>
              <ul className="space-y-3">
                <li>:</li>
                <li>:</li>
                <li>:</li>
                <li>:</li>
                <li>:</li>
              </ul>
            </div>
            <div>
              <ul className="space-y-3">
                <li>Elanchezhiyan M</li>
                <li>21</li>
                <li>Namakkal</li>
                <li>
                  <a href="mailto:chezhiyanmahi2020@gmail.com" className="text-cyan-400 hover:text-cyan-300">
                    chezhiyanmahi2020@gmail.com
                  </a>
                </li>
                <li>Available</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8">
            <a
              href="/ELANCHEZHIYAN's Resume (3).pdf"
              download
              className="inline-block px-8 py-3 border-2 border-cyan-400 text-cyan-400 rounded-full hover:bg-cyan-400 hover:text-gray-900 transition-colors duration-300"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;