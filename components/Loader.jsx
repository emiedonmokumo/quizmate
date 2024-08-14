import React from 'react';

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img src="/spinner.png" alt="Loading..." className="animate-spin sm:w-20" />
    </div>
  );
};

export default Loader;