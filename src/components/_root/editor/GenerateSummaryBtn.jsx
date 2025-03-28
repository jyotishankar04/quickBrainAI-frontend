import { useEffect, useRef, useState } from "react";
import { BsMagic, BsFileText } from "react-icons/bs";
import { useGetSummary } from "../../../lib/query/react-query";
import { useParams } from "react-router-dom";
import LoadingModal from "../LoadingModel";
import { useEditorContext } from "../../../context/EditorContext";

const GenerateSummaryBtn = () => {
  const { noteId } = useParams();
  const modalRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const { editor } = useEditorContext(); // Get the Tiptap editor instance

  const {
    data: summaryData,
    isLoading: isSummaryPending,
    refetch: refetchSummary,
  } = useGetSummary(noteId, { enabled: false });

  useEffect(() => {
    if (summaryData?.data && modalRef.current) {
      modalRef.current.showModal();
    }
  }, [summaryData]);

  const handleSubmit = async () => {
    if (!noteId) return;

    setIsLoading(true);
    try {
      await refetchSummary();
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    if (modalRef.current) {
      modalRef.current.close();
    }
  };
  const insertSummaryToNote = () => {
    if (!summaryData?.data || !editor) return;

    // Focus the editor and move to end of document
    editor.commands.focus();
    editor.commands.setTextSelection(editor.state.doc.content.size);

    // Add spacing if not at beginning of document
    if (editor.state.doc.content.size > 0) {
      editor.commands.enter();
      editor.commands.enter(); // Double line break for better spacing
    }

    // Insert heading for the summary
    editor.commands.setHeading({ level: 2 });
    editor.commands.insertContent("Generated CSR Summary");
    editor.commands.enter(); // Move to next line

    // Insert the summary paragraph
    editor.commands.setParagraph();
    editor.commands.insertContent(summaryData.data.summary);
    editor.commands.enter();
    editor.commands.enter(); // Double line break before next section

    // Insert heading for key points
    editor.commands.setHeading({ level: 3 });
    editor.commands.insertContent("Key Points");
    editor.commands.enter(); // Move to next line

    // Create a bullet list for key points
    editor.commands.toggleBulletList();
    summaryData.data.keyPoints.forEach((point, index) => {
      editor.commands.insertContent(
        `<strong>${point.title}</strong>: ${point.description}`
      );
      // Don't add extra paragraph after last item
      if (index < summaryData.data.keyPoints.length - 1) {
        editor.commands.enter();
      }
    });
    editor.commands.toggleBulletList(); // Exit bullet list

    // Add final spacing
    editor.commands.enter();

    handleClose();
  };

  if (isLoading) {
    return (
      <LoadingModal
        isVisible={true}
        text="Generating Summary..."
        textContext="This may take a few seconds"
      />
    );
  }

  return (
    <>
      <button
        onClick={handleSubmit}
        disabled={isSummaryPending || isLoading}
        className="btn btn-sm btn-primary flex items-center gap-2"
      >
        {isLoading ? (
          <span className="loading loading-spinner loading-xs"></span>
        ) : (
          <>
            <BsMagic size={18} />
            Generate Summary
          </>
        )}
      </button>

      <dialog ref={modalRef} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box bg-base-100 max-h-[90vh] max-w-4xl flex flex-col">
          <div className="flex justify-between items-center mb-4 sticky top-0 bg-base-100 pt-4 z-10">
            <h3 className="font-bold text-lg">CSR Summary & Key Points</h3>
            <button
              onClick={handleClose}
              className="btn btn-sm btn-circle btn-ghost"
              aria-label="Close"
            >
              ✕
            </button>
          </div>

          <div className="flex-1 overflow-y-auto pr-2 pb-4">
            {summaryData?.data?.summary && (
              <div className="bg-base-200 rounded-lg p-4 mb-6">
                <h4 className="text-lg font-semibold mb-2">Summary</h4>
                <p className="text-base-content/80 break-words whitespace-pre-line">
                  {summaryData.data.summary}
                </p>
              </div>
            )}

            {summaryData?.data?.keyPoints && (
              <div className="space-y-4">
                <h4 className="text-lg font-semibold">Key Points</h4>
                <div className="space-y-4">
                  {summaryData.data.keyPoints.map((point, index) => (
                    <div
                      key={index}
                      className="collapse collapse-arrow bg-base-200 rounded-lg"
                    >
                      <input type="checkbox" />
                      <div className="collapse-title text-md font-medium">
                        {point.title}
                      </div>
                      <div className="collapse-content">
                        <p className="text-base-content/80 break-words whitespace-pre-line">
                          {point.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="modal-action sticky bottom-0 bg-base-100 pb-4">
            <button
              onClick={insertSummaryToNote}
              className="btn btn-primary flex items-center gap-2"
            >
              <BsFileText size={16} />
              Insert to Note
            </button>
            <button onClick={handleClose} className="btn btn-ghost">
              Close
            </button>
          </div>
        </div>

        <form method="dialog" className="modal-backdrop">
          <button onClick={handleClose}>close</button>
        </form>
      </dialog>
    </>
  );
};

export default GenerateSummaryBtn;
