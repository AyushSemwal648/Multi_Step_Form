import React from 'react';

const Paths = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 sm:p-8 md:p-10">
      <h2 className="text-2xl font-bold mb-4 sm:mb-6 md:mb-8">Learning paths based on your answers</h2>
      <p className="text-gray-600 mb-6 sm:mb-8 md:mb-10">Choose one to get started. You can switch anytime.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
        <button className="bg-gray-100 rounded-lg p-4 sm:p-6 md:p-8 hover:bg-gray-200 transition-colors duration-300">
          <div className="flex items-center mb-4 sm:mb-6 md:mb-8">
            <div className="bg-yellow-500 text-white px-2 py-1 rounded-full mr-2 text-xs font-semibold">
              MOST POPULAR
            </div>
            <h3 className="text-lg font-semibold sm:text-xl md:text-2xl">Foundational Math Build</h3>
          </div>
          <p className="text-gray-700 sm:text-base md:text-lg">
            your foundational skills in algebra, geometry, and probability.
          </p>
        </button>
        <button className="bg-gray-100 rounded-lg p-4 sm:p-6 md:p-8 hover:bg-gray-200 transition-colors duration-300">
          <div className="flex items-center mb-4 sm:mb-6 md:mb-8">
            <h3 className="text-lg font-semibold sm:text-xl md:text-2xl">Mathematical Thinking</h3>
          </div>
          <p className="text-gray-700 sm:text-base md:text-lg">
            Build your foundational skills in algebra, geometry, and probability.
          </p>
        </button>
      </div>
    </div>
  );
};

export default Paths;