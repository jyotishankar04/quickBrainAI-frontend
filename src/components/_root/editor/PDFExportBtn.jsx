import { useRef } from "react";
import { useEditorContext } from "../../../context/EditorContext";
import { useReactToPrint } from "react-to-print";
import { useParams } from "react-router-dom";

const ExportPDFButton = () => {
  const { editor } = useEditorContext();
  const contentRef = useRef(null);
  const { noteId } = useParams();
  const handlePrint = useReactToPrint({
    contentRef,
    bodyClass: "print-content",
    documentTitle: `Note-${noteId}-${new Date().toLocaleString()}`,
  });

  return (
    <div>
      {/* Div for printing (should not be hidden) */}
      <div ref={contentRef} className="print-content">
        <div dangerouslySetInnerHTML={{ __html: editor?.getHTML() || "" }} />
      </div>

      <button
        className="btn btn-sm btn-secondary"
        onClick={handlePrint}
        disabled={!editor}
      >
        Export as PDF
      </button>
    </div>
  );
};

export default ExportPDFButton;
