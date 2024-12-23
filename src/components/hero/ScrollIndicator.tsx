import React from 'react';
import { ChevronDown } from 'lucide-react';

const ScrollIndicator = () => {
  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
      <ChevronDown className="h-8 w-8 text-cyan-400/50" />
    </div>
  );
};

export default ScrollIndicator;