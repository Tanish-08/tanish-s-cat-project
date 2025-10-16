
import React from 'react';

const Spinner: React.FC = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="w-5 h-5 border-2 border-t-transparent border-white rounded-full animate-spin"></div>
      <span>Loading...</span>
    </div>
  );
};

export default Spinner;
