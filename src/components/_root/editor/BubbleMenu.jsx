import React from "react";
import { useEditorContext } from "../../../context/EditorContext";
import { BubbleMenu as TiptapBubbleMenu } from "@tiptap/react";
import {
  AiOutlineBold,
  AiOutlineItalic,
  AiOutlineUnderline,
} from "react-icons/ai";
import { MdHighlight, MdFormatColorText } from "react-icons/md";
import GenerateAnsBtn from "./GenerateAnsBtn";
import { isMobile } from "react-device-detect";
import { FaEllipsisH } from "react-icons/fa";

const highlightColors = [
  { name: "Yellow", value: "#FFF59D" },
  { name: "Pink", value: "#F8BBD0" },
  { name: "Blue", value: "#BBDEFB" },
  { name: "Green", value: "#C8E6C9" },
  { name: "Orange", value: "#FFCC80" },
];

const textColors = [
  { name: "Red", value: "#E53935" },
  { name: "Blue", value: "#1E88E5" },
  { name: "Green", value: "#43A047" },
  { name: "Purple", value: "#8E24AA" },
  { name: "Black", value: "#000000" },
];

const BubbleMenu = () => {
  const { editor } = useEditorContext();
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  if (!editor) return null;
  if (isMobile) {
    return (
      <TiptapBubbleMenu
        editor={editor}
        tippyOptions={{
          duration: 100,
          placement: "top",
          maxWidth: "none", // Allows menu to expand fully
        }}
      >
        <div className="flex items-center gap-1 p-2 bg-white rounded-lg shadow-lg border border-gray-300">
          {/* Always visible buttons */}
          <GenerateAnsBtn />
          <button
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={`btn btn-sm ${
              editor.isActive("bold") ? "btn-warning" : "btn-outline"
            }`}
          >
            <AiOutlineBold size={18} />
          </button>

          {/* Mobile menu toggle */}
          <button
            className="btn btn-sm btn-outline"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            <FaEllipsisH size={16} />
          </button>

          {/* Expanded menu */}
          {showMobileMenu && (
            <div className="absolute left-0 mt-10 bg-white shadow-lg rounded-lg border border-gray-300 p-2 z-50 grid grid-cols-2 gap-1 w-max">
              {/* Italic */}
              <button
                onClick={() => {
                  editor.chain().focus().toggleItalic().run();
                  setShowMobileMenu(false);
                }}
                className={`btn btn-sm ${
                  editor.isActive("italic") ? "btn-success" : "btn-outline"
                }`}
              >
                <AiOutlineItalic size={18} />
              </button>

              {/* Underline */}
              <button
                onClick={() => {
                  editor.chain().focus().toggleUnderline().run();
                  setShowMobileMenu(false);
                }}
                className={`btn btn-sm ${
                  editor.isActive("underline") ? "btn-error" : "btn-outline"
                }`}
              >
                <AiOutlineUnderline size={18} />
              </button>

              {/* Highlight dropdown */}
              <div className="dropdown dropdown-top">
                <button
                  className="btn btn-sm btn-outline flex items-center gap-1"
                  onClick={() => setShowMobileMenu(false)}
                >
                  <MdHighlight size={16} />
                </button>
                <ul className="dropdown-content menu p-2 shadow bg-white rounded-box w-36">
                  {highlightColors.map((color) => (
                    <li key={color.name}>
                      <button
                        onClick={() =>
                          editor
                            .chain()
                            .focus()
                            .setHighlight({ color: color.value })
                            .run()
                        }
                        className="flex items-center gap-2 p-1"
                      >
                        <span
                          className="w-4 h-4 rounded-full border border-gray-300"
                          style={{ backgroundColor: color.value }}
                        />
                        {color.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Text color dropdown */}
              <div className="dropdown dropdown-top">
                <button
                  className="btn btn-sm btn-outline flex items-center gap-1"
                  onClick={() => setShowMobileMenu(false)}
                >
                  <MdFormatColorText size={16} />
                </button>
                <ul className="dropdown-content menu p-2 shadow bg-white rounded-box w-36">
                  {textColors.map((color) => (
                    <li key={color.name}>
                      <button
                        onClick={() =>
                          editor.chain().focus().setColor(color.value).run()
                        }
                        className="flex items-center gap-2 p-1"
                        style={{ color: color.value }}
                      >
                        <span
                          className="w-4 h-4 rounded-full border border-gray-300"
                          style={{ backgroundColor: color.value }}
                        />
                        {color.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </TiptapBubbleMenu>
    );
  }
  return (
    <TiptapBubbleMenu
      editor={editor}
      tippyOptions={{ duration: 100, placement: "top" }}
    >
      <div className="flex flex-wrap items-center gap-2 p-3 bg-white text-gray-800 rounded-lg shadow-lg border border-gray-300 min-w-max">
        {/* Generate Answer */}
        <GenerateAnsBtn />
        {/* Bold */}
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`btn btn-sm btn-outline ${
            editor.isActive("bold") ? "btn-warning" : ""
          }`}
        >
          <AiOutlineBold size={18} />
        </button>

        {/* Italic */}
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`btn btn-sm btn-outline ${
            editor.isActive("italic") ? "btn-success" : ""
          }`}
        >
          <AiOutlineItalic size={18} />
        </button>

        {/* Underline */}
        <button
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={`btn btn-sm btn-outline ${
            editor.isActive("underline") ? "btn-error" : ""
          }`}
        >
          <AiOutlineUnderline size={18} />
        </button>

        {/* Highlight Dropdown */}
        <div className="dropdown dropdown-hover">
          <button className="btn btn-sm btn-outline dropdown-toggle flex items-center gap-1">
            <MdHighlight size={18} /> Highlight
          </button>
          <ul className="dropdown-content flex flex-col gap-1 menu p-2 shadow-lg bg-white border border-gray-300 rounded-lg w-36">
            {highlightColors.map((color) => (
              <li key={color.name}>
                <button
                  onClick={() =>
                    editor
                      .chain()
                      .focus()
                      .setHighlight({ color: color.value })
                      .run()
                  }
                  className="w-full text-left p-1 rounded flex items-center gap-2"
                  style={{ backgroundColor: color.value }}
                >
                  <span
                    className="w-4 h-4 rounded-full border border-gray-500"
                    style={{ backgroundColor: color.value }}
                  ></span>
                  {color.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Text Color Dropdown */}
        <div className="dropdown dropdown-hover">
          <button className="btn btn-sm btn-outline dropdown-toggle flex items-center gap-1">
            <MdFormatColorText size={18} /> Text Color
          </button>
          <ul className="dropdown-content menu p-2 shadow-lg bg-white border border-gray-300 rounded-lg w-36 flex flex-col gap-1">
            {textColors.map((color) => (
              <li key={color.name}>
                <button
                  onClick={() =>
                    editor.chain().focus().setColor(color.value).run()
                  }
                  className="w-full text-left p-1 rounded flex items-center gap-2"
                  style={{ color: color.value }}
                >
                  <span
                    className="w-4 h-4 rounded-full border border-gray-500"
                    style={{ backgroundColor: color.value }}
                  ></span>
                  {color.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </TiptapBubbleMenu>
  );
};

export default BubbleMenu;
