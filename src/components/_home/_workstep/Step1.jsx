import React, { useState } from "react";

const Step1 = () => {
  const [selectedFile, setSelectedFile] = useState(null); // creating the  State to store the selected file
  const [noteName, setNoteName] = useState(""); // creating the  State to store the note name

  // Handle file selection
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  // Handling the file note name input change
  const handleNoteNameChange = (event) => {
    setNoteName(event.target.value);
  };

  // Handling the form submission  form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedFile && noteName) {
      alert("File uploaded successfully!");
      setNoteName("");
      setSelectedFile("");
    } else {
      alert("Please select a file and enter a note name.");
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center mb-16 animate__animated animate__fadeInUp">
      <div className="md:w-1/2 mb-8 md:mb-0 md:pr-10">
        <div className="bg-white p-3 rounded-full inline-flex items-center justify-center w-16 h-16 mb-6 shadow-md">
          <span className="text-[#2563EB] text-2xl font-bold">1</span>
        </div>
        <h3 className="text-2xl font-bold mb-4">Upload Your Documents</h3>
        <p className="text-gray-600 mb-4">
          Start by uploading PDFs or creating a new blank note. Our system
          automatically processes your documents and prepares them for editing.
        </p>
        <ul className="space-y-2">
          <li className="flex items-center text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-green-500 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
            Support for PDF, DOCX, and TXT formats
          </li>
          <li className="flex items-center text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-green-500 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
            Intelligent text recognition and formatting
          </li>
          <li className="flex items-center text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-green-500 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
            Secure file handling with encryption
          </li>
        </ul>
      </div>
      <div className="md:w-1/2">
        <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 p-4">
          <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
            <div className="flex items-center justify-center h-48 border-2 border-dashed border-gray-300 rounded-lg bg-white">
              <div className="text-center p-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto h-12 w-12 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  ></path>
                </svg>
                <p className="mt-2 text-sm text-gray-600">
                  Drag and drop your PDF here
                </p>
                <p className="text-xs text-gray-500 mt-1 mb-2">or</p>
                <input
                  type="file"
                  id="file-upload"
                  className="hidden"
                  onChange={handleFileChange} // it will handle the file section 
                />
                <label
                  htmlFor="file-upload"
                  className="mt-2 px-4 py-2 bg-[#2563EB] text-white text-sm rounded-lg hover:bg-blue-600 transition duration-300 cursor-pointer "
                >
                  Browse Files
                </label>
                {selectedFile && (
                  <p className="mt-2 text-sm text-gray-600">
                    Selected File: {selectedFile.name}
                  </p>
                )}
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Note Name
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter a name for your note"
                value={noteName}
                onChange={handleNoteNameChange}
              />
            </div>
            <button
              className="w-full mt-4 px-4 py-2 bg-[#2563EB] text-white rounded-lg hover:bg-blue-600 transition duration-300 flex items-center justify-center"
              onClick={handleSubmit}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                ></path>
              </svg>
              Create Note
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step1;
