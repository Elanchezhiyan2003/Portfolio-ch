import React from 'react';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section id="Contact-us" className="bg-gray-900 py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-800/50 rounded-xl p-8 hover:shadow-lg hover:shadow-cyan-400/50 transition-shadow duration-300">
          <h2 className="text-4xl text-cyan-400 font-bold text-center mb-8">Contact Us</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-cyan-400 mb-2">Name</label>
              <input
                type="text"
                id="name"
                required
                className="w-full bg-gray-900 border-2 border-cyan-400/50 rounded-lg px-4 py-2 text-cyan-400 focus:outline-none focus:border-cyan-400"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-cyan-400 mb-2">Email</label>
              <input
                type="email"
                id="email"
                required
                className="w-full bg-gray-900 border-2 border-cyan-400/50 rounded-lg px-4 py-2 text-cyan-400 focus:outline-none focus:border-cyan-400"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-cyan-400 mb-2">Subject</label>
              <input
                type="text"
                id="subject"
                className="w-full bg-gray-900 border-2 border-cyan-400/50 rounded-lg px-4 py-2 text-cyan-400 focus:outline-none focus:border-cyan-400"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-cyan-400 mb-2">Message</label>
              <textarea
                id="message"
                rows={4}
                required
                className="w-full bg-gray-900 border-2 border-cyan-400/50 rounded-lg px-4 py-2 text-cyan-400 focus:outline-none focus:border-cyan-400"
              />
            </div>

            <button
              type="submit"
              className="w-full px-8 py-3 bg-cyan-400 text-gray-900 rounded-lg hover:bg-cyan-300 transition-colors duration-300 font-medium"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;