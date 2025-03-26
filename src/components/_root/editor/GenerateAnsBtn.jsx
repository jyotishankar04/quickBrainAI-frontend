import React, { useEffect, useState } from "react";
import { useEditorContext } from "../../../context/EditorContext";
import { useGenerateAiAnswerMutation } from "../../../lib/query/react-query";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

const GenerateAnsBtn = () => {
  const { editor } = useEditorContext();
  const {
    mutateAsync: generateQuestionAnswer,
    isPending: isGeneratingAnswer,
    data: generatedAnswer,
    error: generateAnswerError,
    isError: isGenerateAnswerError,
  } = useGenerateAiAnswerMutation();
  const { noteId } = useParams();
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    if (isGenerateAnswerError) {
      toast.error(generateAnswerError.data.message);
    }
  }, [isGenerateAnswerError, generateAnswerError]);

  const handleGenerateAnswer = async () => {
    const selectedText = editor.state.selection
      .content()
      .content.textBetween(0, editor.state.selection.content().size + 1, " ");
    if (!selectedText) return;

    await generateQuestionAnswer({ noteId, question: selectedText });
    setShowDropdown(true); // Show dropdown when answers are generated
  };

  const insertAnswerIntoEditor = (answer) => {
    const { from, to } = editor.state.selection; // Get selection range
    const selectedText = editor.state.doc.textBetween(from, to, " "); // Get selected question

    if (!selectedText) return; // Prevent inserting if no text is selected

    editor
      .chain()
      .focus()
      .insertContentAt(
        to,
        `<p><span style="font-weight: bold;">Answer: </span>${answer}</p>`
      ) // Insert answer below the selected text
      .run();

    setShowDropdown(false);
  };

  if (!editor) return null;

  return (
    <div className="relative">
      <button onClick={handleGenerateAnswer} className="btn btn-sm btn-primary">
        {isGeneratingAnswer
          ? "Generating..."
          : "✨ Get Answer from QuickBrain AI"}
      </button>

      {/* AI-Generated Answers Popup */}
      {showDropdown && generatedAnswer?.data?.answers?.length > 0 && (
        <div className="absolute left-0 mt-2 w-80 bg-white border border-gray-300 rounded-lg shadow-lg z-50 p-3">
          {/* Header Section */}
          <div className="bg-gray-200 p-2 rounded-t-lg">
            <h1 className="font-bold text-gray-800 text-sm">QuickBrain AI</h1>
            <p className="text-xs text-gray-600">
              Here are AI-generated answers based on your selected text.
            </p>
          </div>

          {/* Answer List - Scrollable */}
          <ul className="bg-white divide-y divide-gray-200 max-h-60 overflow-y-auto">
            {generatedAnswer.data.answers.map((answer, index) => {
              if (!answer) return null;

              return (
                <li
                  key={index}
                  onClick={() => insertAnswerIntoEditor(answer)}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer transition duration-200"
                >
                  <span className="font-semibold text-gray-800">
                    {index + 1}.{" "}
                  </span>
                  <span className="text-gray-700">
                    {answer.length > 200
                      ? answer.substring(0, 200) + "..."
                      : answer}
                  </span>
                </li>
              );
            })}
          </ul>

          {/* Close Button */}
          <div className="flex justify-end p-2">
            <button
              onClick={() => setShowDropdown(false)}
              className="text-xs text-gray-500 hover:text-gray-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GenerateAnsBtn;
