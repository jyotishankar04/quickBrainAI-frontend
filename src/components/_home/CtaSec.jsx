import React from "react";
import { Link } from "react-router-dom";

const CtaSec = () => {

  return (
    <div className=" w-[90%] m-auto mt-20 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12 shadow-sm animate__animated animate__fadeIn">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-2/3 mb-8 md:mb-0 md:pr-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to transform your note-taking?
          </h3>
          <p className="text-gray-700 mb-6">
            Join thousands of students, researchers, and professionals who have
            improved their productivity with our platform.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to={"/auth/login"}>
              <a
                href="#signup"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#2563EB] hover:bg-blue-700 transition-colors duration-300"
              >
                Start Free Trial
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </Link>
            <Link to="/contactsales" className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-300">
              Contact Sales
            </Link>
          
          </div>
        </div>
        <div className="md:w-1/3">
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
            <div className="flex items-center mb-4">
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="User"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h4 className="font-medium text-gray-900">Sarah Johnson</h4>
                <p className="text-sm text-gray-500">PhD Researcher</p>
              </div>
            </div>
            <p className="text-gray-600 italic mb-4">
              "This platform has revolutionized how I organize research papers.
              The AI assistant helps me extract key concepts in seconds instead
              of hours."
            </p>
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaSec;
