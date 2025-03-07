import React from 'react';

const HeroSection = () => {
  return (
    <section id="hero" className="bg-neutral-900 h-15vh text-white py-20 md:py-28 min-h-[10vh] flex items-center">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Column: Text Content */}
          <div className="md:w-1/2 mb-10 md:mb-0 animate__animated animate__fadeInLeft" style={{ opacity: 1 }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              Capture Your <span className="text-[#2563EB]">Ideas</span>
              <br />
              Organize Your <span className="text-[#2563EB]">Thoughts</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg">
              Transform the way you take notes with our intelligent platform. Upload PDFs, collaborate with AI, and access your notes anywhere.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#signup"
                className="bg-[#2563EB] hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300 text-center"
              >
                Get Started — Free
              </a>
              <a
                href="#how-it-works"
                className="bg-transparent border border-gray-400 hover:border-white text-white font-medium py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center"
              >
                <span>Watch Demo</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>

            {/* Login Link */}
            <div className="mt-8 text-sm text-gray-400">
              <p>
                Already have an account?{' '}
                <a href="#login" className="text-[#2563EB] hover:underline">
                  Log in
                </a>
              </p>
            </div>
          </div>

          {/* Right Column: App Mockup */}
          <div className="md:w-1/2 animate__animated animate__fadeInRight" style={{ opacity: 1 }}>
            <div className="relative">
              {/* Main App Interface Mockup */}
              <div className="bg-neutral-800 rounded-lg shadow-2xl overflow-hidden border border-neutral-700">
                {/* Top Bar */}
                <div className="bg-neutral-800 p-4 border-b border-neutral-700 flex items-center">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-sm text-center text-gray-400 flex-grow">Note-Taking Playground</div>
                </div>

                {/* App Content */}
                <div className="flex flex-col md:flex-row h-80">
                  {/* Left Side: AI Assistant */}
                  <div className="md:w-1/3 border-r border-neutral-700 p-4">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-medium">AI Assistant</h3>
                      <button className="text-xs bg-[#2563EB] px-2 py-1 rounded text-white">New Chat</button>
                    </div>
                    <div className="bg-neutral-900 rounded p-3 mb-3">
                      <p className="text-sm text-gray-300">How can I summarize this research paper?</p>
                    </div>
                    <div className="bg-[#2563EB]/10 border border-[#2563EB]/30 rounded p-3">
                      <p className="text-sm">I can help you extract key points from your paper. Would you like me to focus on methodology or findings?</p>
                    </div>
                  </div>

                  {/* Right Side: Notes Editor */}
                  <div className="md:w-2/3 p-4">
                    <div className="flex items-center mb-4">
                      <div className="flex space-x-2 bg-neutral-800 p-1 rounded-lg">
                        <button className="p-1 hover:bg-neutral-700 rounded" title="Bold">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </button>
                        <button className="p-1 hover:bg-neutral-700 rounded" title="Highlight">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </button>
                      </div>
                      <span className="ml-auto text-xs text-gray-400">Auto-saving...</span>
                    </div>

                    {/* Notes Content */}
                    <div className="bg-neutral-900 rounded-lg p-4 h-48 overflow-auto">
                      <h2 className="text-lg font-bold mb-2">Research Paper Notes</h2>
                      <p className="text-sm text-gray-300 mb-2">
                        The study demonstrates a significant correlation between note-taking methods and information retention.
                      </p>
                      <p className="text-sm text-gray-300 mb-2">Key findings:</p>
                      <ul className="text-sm text-gray-300 list-disc pl-5">
                        <li>Digital note-takers showed 27% better organization</li>
                        <li>Handwritten notes led to 31% better recall</li>
                        <li className="bg-yellow-500/20 px-1 rounded">Combined approaches yielded optimal results</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#2563EB]/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#2563EB]/10 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 text-center">
          {/* Feature 1 */}
          <div className="bg-neutral-800/50 p-6 rounded-lg border border-neutral-700 hover:border-[#2563EB]/50 transition duration-300 opacity-0 animate__animated animate__fadeIn">
            <div className="bg-[#2563EB]/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-[#2563EB]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-medium mb-2">Smart PDF Import</h3>
            <p className="text-gray-400 text-sm">Upload and extract content from PDFs with intelligent parsing and organization.</p>
          </div>

          {/* Feature 2 */}
          <div className="bg-neutral-800/50 p-6 rounded-lg border border-neutral-700 hover:border-[#2563EB]/50 transition duration-300 opacity-0 animate__animated animate__fadeIn">
            <div className="bg-[#2563EB]/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-[#2563EB]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-medium mb-2">AI-Powered Assistant</h3>
            <p className="text-gray-400 text-sm">Get summaries, explanations, and insights with our integrated AI chat assistant.</p>
          </div>

          {/* Feature 3 */}
          <div className="bg-neutral-800/50 p-6 rounded-lg border border-neutral-700 hover:border-[#2563EB]/50 transition duration-300 opacity-0 animate__animated animate__fadeIn">
            <div className="bg-[#2563EB]/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-[#2563EB]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-medium mb-2">Real-time Sync</h3>
            <p className="text-gray-400 text-sm">Access your notes across all devices with automatic syncing and offline capabilities.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;