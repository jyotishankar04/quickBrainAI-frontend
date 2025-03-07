import React from 'react';
import cardsData from '../../constants/cards.json'; // Import the JSON file

// NoteTakingFeatures Component
const NoteTakingFeatures = () => {
  return (
    <div className="text-center mb-16 animate__animated animate__fadeIn mt-7" id="el-09dp07aa">
      <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4" id="el-w67w2ncd">
        Powerful Note-Taking Features
      </h2>
      <p className="text-lg text-neutral-600 max-w-3xl mx-auto" id="el-bhdgs56s">
        Our platform combines intelligent technology with intuitive design to transform how you capture and organize information.
      </p>
    </div>
  );
};

// FeatureCard Component
const FeatureCard = ({ icon, title, description, features, animationDelay }) => {
  return (
    <div
      className={`bg-neutral-50 rounded-xl p-6 shadow-md transition duration-300 hover:shadow-lg animate__animated animate__fadeInUp ${animationDelay}`}
    >
      <div
        className="bg-blue-100 rounded-full w-14  h-14 flex items-center justify-center mb-5"
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

// FeaturesGrid Component
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

// AIPlaygroundSection Component
const AIPlaygroundSection = () => {
  return (
    <div
      className="mt-20 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12 shadow-sm animate__animated animate__fadeIn"
      style={{ opacity: 1 }}
      id="el-dp3qpf74"
    >
      <div className="flex flex-col md:flex-row items-center" id="el-jwr6a4lm">
        {/* Left Section */}
        <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8" id="el-6ab85n1t">
          <h3 className="text-2xl md:text-3xl font-bold mb-4" id="el-ilowqj27">
            The AI-Powered Playground
          </h3>
          <p className="text-gray-700 mb-6" id="el-qif1wz9n">
            Our unique two-panel layout combines the power of AI assistance with intuitive note editing. Ask questions, get summaries, and receive explanations while you take notes.
          </p>

          {/* Features List */}
          <ul className="space-y-3" id="el-8u6zx2e4">
            <li className="flex items-start" id="el-oaa1lf9t">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-1" id="el-2gmb1gzj">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-[#2563EB]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  id="el-v7d1xcy6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                    id="el-phvre0ea"
                  />
                </svg>
              </div>
              <span className="ml-3 text-gray-700" id="el-3haqftvw">
                Interactive AI suggestions that adapt to your content
              </span>
            </li>
            <li className="flex items-start" id="el-dy9gbzkz">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-1" id="el-u3c8313a">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-[#2563EB]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  id="el-feho33u4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                    id="el-h7dib5t6"
                  />
                </svg>
              </div>
              <span className="ml-3 text-gray-700" id="el-6kf0mesb">
                Smart formatting tools that anticipate your needs
              </span>
            </li>
            <li className="flex items-start" id="el-33jkp5sv">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-1" id="el-bldgdc55">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-[#2563EB]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  id="el-nhawzayn"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                    id="el-df4njdcc"
                  />
                </svg>
              </div>
              <span className="ml-3 text-gray-700" id="el-lugovfyd">
                Seamless connection between your PDF content and notes
              </span>
            </li>
          </ul>

          {/* Try the Playground Button */}
          <button
            className="mt-8 bg-[#2563EB] hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300 flex items-center"
            id="el-nv6y6xdw"
          >
            <span id="el-hacgyh5n">Try the Playground</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              viewBox="0 0 20 20"
              fill="currentColor"
              id="el-bhguohsn"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
                id="el-re508zxd"
              />
            </svg>
          </button>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2" id="el-ms72qr6e">
          <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200" id="el-n2jks71g">
            {/* Header */}
            <div className="bg-gray-50 border-b border-gray-200 p-4 flex items-center" id="el-vpqiotxk">
              <div className="flex space-x-2" id="el-h0hwybdg">
                <div className="w-3 h-3 rounded-full bg-red-400" id="el-pesi0gib"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400" id="el-x7cwbbf6"></div>
                <div className="w-3 h-3 rounded-full bg-green-400" id="el-1w4n1wpf"></div>
              </div>
              <div className="ml-4 text-sm font-medium text-gray-500" id="el-23x6kb3q">
                AI Note-Taking Playground
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col md:flex-row h-64" id="el-jvvy57gz">
              {/* AI Assistant Panel */}
              <div className="md:w-1/3 bg-gray-50 p-4 border-r border-gray-200" id="el-mcrrdo5w">
                <div className="text-sm font-medium text-gray-700 mb-3" id="el-nnlcqswc">
                  AI Assistant
                </div>
                <div className="bg-blue-50 rounded-lg p-3 border border-blue-100 mb-3" id="el-wsdck15c">
                  <p className="text-xs text-gray-700" id="el-5fgtefc9">
                    Can you explain the key concepts in this document?
                  </p>
                </div>
                <div className="bg-white rounded-lg p-3 border border-gray-200" id="el-pt8teb9w">
                  <p className="text-xs text-gray-700" id="el-8rh38uzr">
                    Based on your PDF, the main concepts are:
                  </p>
                  <ul className="mt-1 text-xs text-gray-600 pl-4 list-disc" id="el-5db0c9dd">
                    <li id="el-u4y3nqgy">Information retrieval</li>
                    <li id="el-ebuijnkf">Knowledge mapping</li>
                    <li id="el-78sppr6a">Cognitive learning models</li>
                  </ul>
                </div>
              </div>

              {/* Note Editor Panel */}
              <div className="md:w-2/3 p-4" id="el-2h7eumxm">
                <div className="flex items-center justify-between mb-3" id="el-fyl3ycvh">
                  <div className="flex space-x-2" id="el-6mrigy6h">
                    <button
                      className="p-1.5 bg-gray-100 rounded hover:bg-gray-200 transition-colors"
                      id="el-fsgg5yop"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-gray-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        id="el-2hvkmxv5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 6h16M4 12h8m-8 6h16"
                          id="el-9rtr3qab"
                        />
                      </svg>
                    </button>
                    <button
                      className="p-1.5 bg-gray-100 rounded hover:bg-gray-200 transition-colors"
                      id="el-i42k47cn"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-gray-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        id="el-4md6k7ku"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                          id="el-nov5v4d9"
                        />
                      </svg>
                    </button>
                  </div>
                  <span className="text-xs text-gray-500" id="el-pwvb1g64">
                    Auto-saving...
                  </span>
                </div>

                {/* Note Content */}
                <div
                  className="bg-white border border-gray-200 rounded-lg p-3 h-40 overflow-y-auto"
                  id="el-03d9qj4i"
                >
                  <h3 className="text-sm font-bold mb-2" id="el-3z7l2anj">
                    Research Notes: Cognitive Learning
                  </h3>
                  <p className="text-xs text-gray-700 mb-2" id="el-4cbxwz98">
                    The document explores three primary aspects of cognitive learning:
                  </p>
                  <ol className="pl-5 list-decimal text-xs text-gray-700 space-y-1" id="el-1dkuvp44">
                    <li id="el-xaat6p8b">
                      <span className="font-medium" id="el-rc8sq84y">
                        Information retrieval
                      </span>{' '}
                      - How we access stored knowledge
                    </li>
                    <li id="el-k82u6ger">
                      <span className="font-medium" id="el-3kat087m">
                        Knowledge mapping
                      </span>{' '}
                      - Creating connections between concepts
                    </li>
                    <li className="bg-yellow-50 px-1 py-0.5 -mx-1 rounded" id="el-jb57xrr2">
                      <span className="font-medium" id="el-oswv0rnw">
                        Cognitive models
                      </span>{' '}
                      - Frameworks that explain learning patterns
                    </li>
                  </ol>
                  <p className="text-xs text-gray-700 mt-2" id="el-olca1oo2">
                    These concepts form the foundation for effective note-taking strategies that enhance retention and understanding.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// SecondPage Component (Combines all components)
const SecondPage = () => {
  return (
    <div id='features' className="container pb-20 mx-auto px-4">
      <NoteTakingFeatures />
      <FeaturesGrid />
      <AIPlaygroundSection />
    </div>
  );
};

export default SecondPage;