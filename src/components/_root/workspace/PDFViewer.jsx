import React from "react";

const PDFViewer = ({ url }) => {
  if (!url) {
    return (
      <div className="w-full h-full">
        <div className="w-full h-full flex justify-center items-center">
          <span className="text-2xl font-semibold">No PDF</span>
        </div>
      </div>
    );
  }
  return (
       <iframe className="w-full h-full" src={url} title="PDF Viewer"></iframe>
  );
};

export default PDFViewer;
