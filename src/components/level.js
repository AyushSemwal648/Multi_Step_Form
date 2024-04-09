import React, {useState} from 'react'

const mathComfortLevels = [
  {
    title: 'Arithmetic',
    description: 'Introductory',
    expression: '5 × 1/2 = ?',
  },
  {
    title: 'Basic Algebra',
    description: 'Foundational',
    expression: '3x + 5 = 4',
  },
  {
    title: 'Intermediate Algebra',
    description: 'Intermediate',
    expression: 'x = (-b ± √(b^2 - 4ac)) / 2a',
  },
  {
    title: 'Calculus',
    description: 'Advanced',
    expression: '∫x^2 dx = ?',
  },
];

const Level = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="mb-4 text-xl font-bold">What is your math comfort level?</h2>
      <p className="mb-8 text-gray-600">
        Choose the highest level you feel confident in — you can always adjust later.
      </p>
      <div className="grid grid-cols-2 gap-4">
        {mathComfortLevels.map((option, index) => (
          <button
            key={index}
            className={`flex flex-col items-center justify-center p-4 rounded-md transition-colors duration-300 ${
              selectedOption === option
              ? 'border-black bg-black text-white shadow-sm shadow-black'
              : 'border-gray-200 bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
            onClick={() => handleOptionClick(option)}
          >
            <h3 className="text-lg font-bold mb-2">{option.title}</h3>
            <p className="text-gray-600 mb-4">{option.description}</p>
            <div className="bg-white rounded-md px-3 py-1 text-gray-800">
              {option.expression}
            </div>
          </button>
        ))}
      </div>
      
    </div>
  );
};

export default Level