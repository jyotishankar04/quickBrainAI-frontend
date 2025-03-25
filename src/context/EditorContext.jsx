/* eslint-disable react-refresh/only-export-components */
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
          "prose prose-sm sm:prose-xs lg:prose-sm xl:prose-md mx-auto p-6 focus:outline-none w-full max-w-4xl min-h-[300px] bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200",
        style: `
          line-height: 1.3; 
          letter-spacing: -0.01em;
          
          /* Remove margins between headings */
          .prose h1, .prose h2, .prose h3, 
          .prose h4, .prose h5, .prose h6 {
            margin-top: 0.5rem;
            margin-bottom: 0.5rem;
          }
          
          /* Tighten paragraph spacing */
          .prose p {
            margin-top: 0.5rem;
            margin-bottom: 0.5rem;
          }
        `,
      },
    },
  });

  return (
    <EditorContext.Provider value={{ editor }}>
      {children}
    </EditorContext.Provider>
  );
};

export const useEditorContext = () => {
  const context = useContext(EditorContext);
  if (!context) {
    throw new Error("useEditorContext must be used within an EditorProvider");
  }
  return context;
};

export default EditorProvider;
