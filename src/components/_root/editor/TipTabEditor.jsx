// src/Tiptap.tsx
import {
  EditorContent,
  FloatingMenu,
  BubbleMenu,
  EditorProvider,
} from "@tiptap/react";
import { MenuBar } from "./TipTapEditorMenu";
import { useEditorContext } from "../../../context/EditorContext";

const Tiptap = () => {
  const { editor } = useEditorContext();

  return (
    <div className="w-full flex-1 overflow-y-auto flex flex-col h-full ">
      <EditorContent editor={editor} />
    </div>
  );
};

export default Tiptap;
