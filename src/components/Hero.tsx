import React from 'react';
import HeroImage from './hero/HeroImage';
import HeroContent from './hero/HeroContent';
import ScrollIndicator from './hero/ScrollIndicator';

const Hero = () => {
  return (
    <div className="min-h-screen pt-16 bg-gray-900 flex items-center relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center gap-12">
        <HeroImage />
        <HeroContent />
      </div>
      {/* <ScrollIndicator /> */}
    </div>
  );
};

export default Hero;