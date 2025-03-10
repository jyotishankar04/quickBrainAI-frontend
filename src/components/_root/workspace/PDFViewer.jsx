const PDFViewer = ({ url }) => {
  return (
    <iframe
      src={url + "#toolbar=0&zoom=page-width"}
      frameBorder="0"
      className="w-full h-full "
      width="100%"
      height="100%"
    ></iframe>
  );
};

export default PDFViewer;
