import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faSchool, faChalkboardTeacher, faUserTie } from '@fortawesome/free-solid-svg-icons';

const options = [
  { icon: <FontAwesomeIcon icon={faSchool} />, label: 'Student or soon to be enrolled' },
  { icon: <FontAwesomeIcon icon={faUserTie} />, label: 'Professional pursuing a career' },
  { icon: <FontAwesomeIcon icon={faEnvelope} />, label: 'Parent of a school-age child' },
  { icon: <FontAwesomeIcon icon={faEnvelope} />, label: 'Lifelong learner' },
  { icon: <FontAwesomeIcon icon={faChalkboardTeacher} />, label: 'Teacher' },
  { icon: <FontAwesomeIcon icon={faEnvelope} />, label: 'Other' },
];

const Education = () => {
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
            className={`flex items-left justify-left px-4 py-2 rounded-md transition-colors duration-300 border-2 ${
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

export default Education;