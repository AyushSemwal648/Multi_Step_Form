
import React, { useState } from 'react';

const options = [
  { icon: '📊', label: 'Learning specific skills to advance my career' },
  { icon: '🌎', label: 'Exploring new topics I\'m interested in' },
  { icon: '🧮', label: 'Refreshing my math foundations' },
  { icon: '🧠', label: 'Exercising my brain to stay sharp' },
  { icon: '🔍', label: 'Something else' },
];

const Interest = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="mb-4 text-xl font-bold">Which describes you best?</h2>
      <p className="mb-8 text-gray-600">This will help us personalize your experience.</p>
      <div className="flex flex-col gap-4 w-full max-w-md">
        {options.map((option, index) => (
          <button
            key={index}
            className={`flex items-left justify-left px-4 py-2 rounded-md transition-colors duration-300 ${
              selectedOption === option
              ? 'border-black bg-black text-white shadow-sm shadow-black'
              : 'border-gray-200 bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
            onClick={() => handleOptionClick(option)}
          >
            <span className="mr-2">{option.icon}</span>
            <span>{option.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};


export default Interest