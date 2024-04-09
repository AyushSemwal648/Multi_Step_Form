import React from 'react';

const ProgressBar = ({ currentPage, totalPages }) => {
  const progressPercentage = (currentPage / (totalPages - 1)) * 100;

  return (
    <div className="progressbar w-full bg-gray-300 h-1 rounded-full mb-6 mt-5">
      <div
        className="bg-blue-500 h-full rounded-full transition-all duration-500"
        style={{ width: `${progressPercentage}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;