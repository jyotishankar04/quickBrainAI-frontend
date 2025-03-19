
import React, { useState, useRef } from "react";
import TagInput from "../../../components/_root/notes/TagsInput"; // Adjust the import path as needed

const CreateNotePage = () => {
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [note, setNote] = useState({
    title: "",
    description: "",
    isPrivate: false,
    documentType: "blank",
    category: "General",
  });
  const [tags, setTags] = useState([]);
  const fileInputRef = useRef(null);

  const handleNoteChange = (field, value) => {
    setNote((prev) => ({ ...prev, [field]: value }));
  };

  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      if (
        file.type === "application/pdf" ||
        file.name.endsWith(".pdf") ||
        file.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ||
        file.name.endsWith(".docx")
      ) {
        setNote((prev) => ({
          ...prev,
          file,
          documentType: "pdf",
        }));
      } else {
        alert("Please upload PDF or DOCX file only");
      }
    }
  };

  const handleCreateNote = () => {
    if (!note.title.trim()) {
      alert("Please enter a title");
      return;
    }
    console.log("Creating note:", { ...note, tags });
    setShowSuccessToast(true);
    setTimeout(() => {
      setShowSuccessToast(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-8">
          {/* Back Button */}
          <button
            onClick={() => window.history.back()}
            className="text-blue-600 hover:text-blue-700 !rounded-button whitespace-nowrap cursor-pointer"
          >
            <i className="fas fa-arrow-left mr-2"></i>
            Back
          </button>

          {/* Centered Header */}
          <h1 className="text-2xl font-semibold text-blue-900 mx-auto">
            Create New Note
          </h1>

          {/* Spacer to balance layout */}
          <div className="w-[70px]"></div>
        </div>

        {/* Form Section */}
        <div className="bg-white rounded-lg shadow-lg border border-blue-100 p-6 space-y-6">
          <div>
            <label className="block text-sm font-medium text-blue-800 mb-2">
              Title
            </label>
            <input
              type="text"
              value={note.title}
              onChange={(e) => handleNoteChange("title", e.target.value)}
              className="w-full px-4 py-2 border border-blue-200 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-blue-50"
              placeholder="Enter note title"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-blue-800 mb-2">
              Description
            </label>
            <textarea
              value={note.description}
              onChange={(e) =>
                handleNoteChange("description", e.target.value)
              }
              rows={4}
              className="w-full px-4 py-2 border border-blue-200 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-blue-50"
              placeholder="Enter note description"
            />
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={note.isPrivate}
              onChange={(e) =>
                handleNoteChange("isPrivate", e.target.checked)
              }
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label className="text-sm text-gray-700">Private note</label>
          </div>
          <div>
            <label className="block text-sm font-medium text-blue-800 mb-2">
              Document Type
            </label>
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => handleNoteChange("documentType", "blank")}
                className={`p-4 border-2 rounded-lg text-center cursor-pointer transition-all duration-200 ${
                  note.documentType === "blank"
                    ? "border-blue-500 bg-blue-50 shadow-md"
                    : "border-blue-200 hover:border-blue-300 hover:bg-blue-50"
                }`}
              >
                <i className="fas fa-file-alt text-2xl mb-2"></i>
                <div className="text-sm">Blank Document</div>
              </button>
              <button
                onClick={() => fileInputRef.current?.click()}
                className={`p-4 border-2 rounded-lg text-center cursor-pointer transition-all duration-200 ${
                  note.documentType === "pdf"
                    ? "border-blue-500 bg-blue-50 shadow-md"
                    : "border-blue-200 hover:border-blue-300 hover:bg-blue-50"
                }`}
              >
                <i className="fas fa-file-pdf text-2xl mb-2"></i>
                <div className="text-sm">Upload PDF/DOCX</div>
              </button>
              <input
                ref={fileInputRef}
                type="file"
                accept=".pdf,.docx"
                className="hidden"
                onChange={handleFileUpload}
              />
            </div>
            {note.file && (
              <div className="mt-2 text-sm text-blue-600 bg-blue-50 p-2 rounded-md">
                <i className="fas fa-paperclip mr-2"></i>
                Selected file: {note.file.name}
              </div>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-blue-800 mb-2">
              Category
            </label>
            <input
              type="text"
              value={note.category}
              onChange={(e) => handleNoteChange("category", e.target.value)}
              className="w-full px-4 py-2 border border-blue-200 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-blue-50"
              placeholder="Enter or create new category"
            />
          </div>
          {/* TagInput Section */}
          <div>
            <label className="block text-sm font-medium text-blue-800 mb-2">
              Tags
            </label>
            <TagInput
              initialTags={tags}
              onTagsChange={setTags}
              allowCreate={true}
              placeholder="Type and press enter..."
            />
          </div>

          {/* Create Button Below */}
          <div className="pt-4">
            <button
              onClick={handleCreateNote}
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg cursor-pointer hover:bg-blue-700"
            >
              Create
            </button>
          </div>
        </div>
      </div>

      {showSuccessToast && (
        <div className="fixed bottom-4 right-4 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg">
          <div className="flex items-center">
            <i className="fas fa-check-circle mr-2"></i>
            <span>Note created successfully!</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateNotePage;

