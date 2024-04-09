import React from 'react'

const Intro = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-8">
      <div className="max-w-md mx-4 text-center">
        <div className="mb-8">
        <img src="/Playing on the swing.gif" alt="Pulley" className="w-40 h-40 mx-auto" />
        </div>
        <h1 className="text-3xl font-bold mb-4">You're in the right place</h1>
        <p className="text-gray-600 mb-4">
          Brilliant gets you hands-on to help improve your professional skills and knowledge. You'll interact with concepts and solve fun problems in math, science, and computer science.
        </p>
        
      </div>
    </div>
  );
};


export default Intro