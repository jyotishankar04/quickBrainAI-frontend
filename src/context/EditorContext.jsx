// src/EditorContext.js
import React, { createContext, useContext } from "react";
import { useEditor } from "@tiptap/react";
import {
  extensions,
  content,
} from "../components/_root/editor/TipTapEditorMenu";

const EditorContext = createContext(null);

export const EditorProvider = ({ children }) => {
  const editor = useEditor({
    extensions,
    content,
    editorProps: {
      attributes: {
        class:
          "prose prose-sm sm:prose lg:prose-lg xl:prose-2xl m-5 focus:outline-none   w-full h-full",
      },
    },
  });

  return (
    <EditorContext.Provider value={{ editor }}>
      {children}
    </EditorContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useEditorContext = () => {
  const context = useContext(EditorContext);
  if (!context) {
    throw new Error("useEditorContext must be used within an EditorProvider");
  }
  return context;
};

export default EditorProvider;
