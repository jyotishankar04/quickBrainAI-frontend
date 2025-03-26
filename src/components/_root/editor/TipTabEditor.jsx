// src/Tiptap.tsx
import { EditorContent } from "@tiptap/react";
import { useEditorContext } from "../../../context/EditorContext";
import BubbleMenu from "./BubbleMenu";
const Tiptap = () => {
  const { editor } = useEditorContext();

  return (
    <div className="w-full flex-1 overflow-y-auto flex flex-col h-full ">
      <EditorContent editor={editor} />

      <BubbleMenu />
    </div>
  );
};

export default Tiptap;
