import React from "react";
import { SubscriptionDetails } from "../../constants/home.constants";
import { SvgIcons } from "../../constants/SvgIcons";

const PricingSection = () => {
  return (
    <div className="container mx-auto px-4" id="pricing">
      {/* Pricing Section */}
      <div className="text-center mb-16 animate__animated animate__fadeIn">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 mt-40">
          Simple, Transparent Pricing
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Choose the plan that fits your needs. All plans include core features
          with different usage limits and capabilities.
        </p>
      </div>

      {/* Pricing Plans */}
      <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
        {/* Cards will added here */}
        {SubscriptionDetails.map((obj, index) => {
          return (
            <div
              key={index}
              className={`flex-1 ${
                obj.isDisabled ? "opacity-50 pointer-events-none" : ""
              } bg-white rounded-xl border ${
                index === 1 ? "border-[#2563EB]" : "border-gray-200 scale-90"
              } shadow-sm transition-all duration-300 hover:shadow-md overflow-hidden animate__animated animate__fadeInUp`}
            >
              <div className="p-6 border-b border-gray-100">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {obj.head}
                </h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl font-bold text-gray-900">
                    {obj.price}
                  </span>
                  <span className="text-gray-500 ml-1">{obj.duration}</span>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Perfect for students and casual note takers
                </p>
                <a
                  href="#signup"
                  className="block w-full py-3 px-4 bg-white text-black font-medium rounded-lg text-center transition duration-300 group focus:bg-[#222839] focus:text-white hover:bg-[#222839] hover:text-white"
                >
                  {obj.btn}
                </a>
              </div>
              <div className="p-6">
                <h4 className="font-medium text-gray-800 mb-4">
                  {obj.includes}
                </h4>
                <ul className="space-y-3 mb-6">
                  {obj.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <SvgIcons />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PricingSection;
