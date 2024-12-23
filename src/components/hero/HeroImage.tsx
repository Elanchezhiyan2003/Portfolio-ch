import React from 'react';
import DQ from '/src/assets/dq.jpg'
const HeroImage = () => {
  return (
    <div className="relative flex-1 flex justify-center items-center">
      <div className="relative w-72 h-72 md:w-96 md:h-96">
        <img
          src={DQ}
          className="w-full h-full rounded-full object-cover shadow-xl hover:shadow-2xl hover:shadow-cyan-400/50 transition-all duration-300"
        />
        <div className="absolute inset-0 rounded-full ring-2 ring-cyan-400/50 ring-offset-4 ring-offset-gray-900"></div>
      </div>
    </div>
  );
};

export default HeroImage;