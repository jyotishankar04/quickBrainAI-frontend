import React from 'react';
import Step1 from './_workstep/Step1';
import Step2 from './_workstep/Step2';
import Step3 from './_workstep/Step3';
import Step4 from './_workstep/Step4';

const HowItWorks = () => {

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16 animate__animated animate__fadeIn">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 mt-10">How It Works</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Our intuitive process makes it easy to create, edit, and organize your notes in just a few simple steps.
        </p>
      </div>

      <div className="max-w-5xl mx-auto">
        <Step1 />
        <Connector />
        <Step2 />
        <Connector />
        <Step3 />
        <Connector />
        <Step4 />
      </div>
    </div>
  );
};

const Connector = () => (
  <div className="flex justify-center mb-16">
    <div className="h-16 w-0.5 bg-gray-300 animate__animated animate__fadeIn"></div>
  </div>
);

export default HowItWorks;