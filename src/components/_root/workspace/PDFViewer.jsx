import React from "react";

const PDFViewer = ({ url }) => {
  return (
    <iframe className="w-full h-full" src={url} title="PDF Viewer"></iframe>
  );
};

export default PDFViewer;
