const PDFViewer = ({ url }) => {
  return (
    <iframe
      className="w-full h-full"
      src={url + "#toolbar=0&zoom=page-width"}
      title="PDF Viewer"
    ></iframe>
  );
};

export default PDFViewer;
