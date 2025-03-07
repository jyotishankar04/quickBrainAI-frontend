import React from "react";
import cardsData from "../../../constants/cards.json"; // Corrected import path

const FeatureCard = ({ icon, title, description, features, animationDelay }) => {
  return (
    <div
      className={`bg-neutral-50 rounded-xl p-6 shadow-md transition duration-300 hover:shadow-lg animate__animated animate__fadeInUp ${animationDelay}`}
    >
      <div
        className="bg-blue-100 rounded-full w-14 h-14 flex items-center justify-center mb-5"
        dangerouslySetInnerHTML={{ __html: icon }} // Render the SVG icon
      />
      <h3 className="text-xl font-semibold text-neutral-800 mb-3">{title}</h3>
      <p className="text-neutral-600 mb-4">{description}</p>
      <ul className="space-y-2 text-neutral-600">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-blue-500 mr-2 mt-0.5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

const FeaturesGrid = () => {
  const { features } = cardsData; // Destructure the features array from the JSON data

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="el-rzwekd3s">
      {features.map((feature, index) => (
        <FeatureCard key={index} {...feature} />
      ))}
    </div>
  );
};

export default FeaturesGrid;