import { BiSave } from "react-icons/bi";
import { useEditorContext } from "../../../context/EditorContext";
import { useParams } from "react-router-dom";
import { useSaveNote } from "../../../lib/query/react-query";
import { useCallback, useEffect, useRef } from "react";

const SaveBtn = () => {
  const { editor } = useEditorContext();
  const { noteId } = useParams();
  const lastSavedContent = useRef(""); // Store last saved content

  const { mutateAsync: saveNoteMutate, isPending: isSavePending } =
    useSaveNote();

  const saveNote = useCallback(async () => {
    if (!editor) return;

    const noteContent = editor.getHTML();

    // Check if the content has changed
    if (noteContent === lastSavedContent.current) return;

    await saveNoteMutate({ noteId, content: noteContent });

    // Update last saved content
    lastSavedContent.current = noteContent;
  }, [editor, saveNoteMutate, noteId]);

  useEffect(() => {
    const interval = setInterval(() => {
      saveNote();
    }, 6000);
    return () => clearInterval(interval);
  }, [saveNote]);

  if (!editor) return null;

  const handleSave = async (e) => {
    e.preventDefault();
    await saveNote();
  };

  return (
    <button
      onClick={handleSave}
      disabled={isSavePending}
      className="btn btn-sm btn-primary flex items-center"
    >
      {isSavePending ? (
        <span>
          <span className="loading loading-spinner"></span> Saving...
        </span>
      ) : (
        <span className="flex items-center">
          Save Changes <BiSave className="ml-2 w-5 h-5" />
        </span>
      )}
    </button>
  );
};

export default SaveBtn;
