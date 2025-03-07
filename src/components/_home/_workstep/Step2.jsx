import React from 'react';

const Step2 = () => {
  return (
    <div className="flex flex-col md:flex-row-reverse items-center mb-16 animate__animated animate__fadeInUp animate__delay-1s">
      <div className="md:w-1/2 mb-8 md:mb-0 md:pl-10">
        <div className="bg-white p-3 rounded-full inline-flex items-center justify-center w-16 h-16 mb-6 shadow-md">
          <span className="text-[#2563EB] text-2xl font-bold">2</span>
        </div>
        <h3 className="text-2xl font-bold mb-4">Edit and Enhance</h3>
        <p className="text-gray-600 mb-4">
          Use our intuitive editor to highlight important sections, add your own notes, and leverage AI assistance to better understand your content.
        </p>
        <ul className="space-y-2">
          <li className="flex items-center text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            Rich text formatting with keyboard shortcuts
          </li>
          <li className="flex items-center text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            AI-powered summaries and explanations
          </li>
          <li className="flex items-center text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            Automatic citation and reference management
          </li>
        </ul>
      </div>
      <div className="md:w-1/2">
        <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
          <div className="bg-gray-50 p-3 border-b border-gray-200 flex items-center">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>
            <div className="ml-4 text-sm font-medium text-gray-500">Research Paper - Editor</div>
          </div>
          <div className="flex h-72">
            <div className="w-1/3 bg-gray-50 p-3 border-r border-gray-200">
              <div className="text-xs font-semibold text-gray-700 mb-2">AI ASSISTANT</div>
              <div className="bg-white rounded-lg p-2 shadow-sm border border-gray-200 mb-2">
                <p className="text-xs text-gray-600">What are the key conclusions?</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-2 shadow-sm border border-blue-100">
                <p className="text-xs text-gray-700">Based on the paper, the three main conclusions are:</p>
                <ul className="text-xs text-gray-600 list-disc pl-4 mt-1">
                  <li>Digital note-taking improves organization by 27%</li>
                  <li>Hybrid methods showed best retention</li>
                  <li>Visual elements enhance recall by 35%</li>
                </ul>
              </div>
            </div>
            <div className="w-2/3 p-4">
              <div className="flex items-center mb-3">
                <div className="flex space-x-1 bg-gray-100 rounded-md p-1">
                  <button className="p-1 hover:bg-white rounded" title="Bold">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M13.293 10a4 4 0 01-4 4H6a4 4 0 110-8h3.293a4 4 0 014 4z"></path>
                      <path fillRule="evenodd" d="M7 10a2 2 0 104 0 2 2 0 00-4 0z" clipRule="evenodd"></path>
                    </svg>
                  </button>
                  <button className="p-1 hover:bg-white rounded" title="Highlight">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
                    </svg>
                  </button>
                  <button className="p-1 hover:bg-white rounded" title="List">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path>
                    </svg>
                  </button>
                </div>
                <span className="ml-auto text-xs text-green-500">Saved</span>
              </div>
              <div className="text-sm">
                <h3 className="font-bold text-gray-800 mb-2">Research Findings</h3>
                <p className="text-gray-700 mb-2">The study demonstrates a correlation between note-taking methods and information retention.</p>
                <p className="font-semibold text-gray-800 mb-1">Key conclusions:</p>
                <ul className="pl-5 list-disc text-gray-700 mb-2 space-y-1">
                  <li><span className="bg-yellow-100 px-1 py-0.5">Digital note-taking improves organization by 27%</span></li>
                  <li>Traditional methods result in 31% better initial recall</li>
                  <li>Hybrid approaches combining digital organization with handwritten notes showed optimal results</li>
                </ul>
                <p className="text-gray-700">Visual elements such as diagrams and mind maps enhance information recall by approximately 35% compared to text-only notes.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step2;