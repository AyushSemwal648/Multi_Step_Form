import React from 'react';

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">
          Finding learning path recommendations for you based on your responses
        </h2>
        <div className="flex justify-center mt-8">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-yellow-700"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;