/* eslint-disable no-unused-vars */
import { useEditorContext } from "../../../context/EditorContext";
import { FaBold, FaCode, FaEllipsisV, FaHeading } from "react-icons/fa";
import { FiItalic } from "react-icons/fi";
import { PiTextStrikethroughBold } from "react-icons/pi";
import { BsTextParagraph } from "react-icons/bs";
import { GrBlockQuote, GrOrderedList, GrUnorderedList } from "react-icons/gr";
import { GoHorizontalRule } from "react-icons/go";
import {
  BiCodeBlock,
  BiHighlight,
  BiRedo,
  BiShare,
  BiUndo,
} from "react-icons/bi";
import { ImTextColor } from "react-icons/im";
import {
  CiTextAlignCenter,
  CiTextAlignLeft,
  CiTextAlignRight,
} from "react-icons/ci";
import {
  RiArrowDropDownLine,
  RiH1,
  RiH2,
  RiH3,
  RiH4,
  RiH5,
  RiH6,
} from "react-icons/ri";
import StarterKit from "@tiptap/starter-kit";
import Color from "@tiptap/extension-color";
import TextStyle from "@tiptap/extension-text-style";
import ListItem from "@tiptap/extension-list-item";
import TextAlign from "@tiptap/extension-text-align";
import Placeholder from "@tiptap/extension-placeholder";
import Highlight from "@tiptap/extension-highlight";
import { useState, useRef, useEffect } from "react";
import SaveBtn from "./SaveBtn";
import GenerateSummaryBtn from "./GenerateSummaryBtn";
import ExportPDFButton from "./PDFExportBtn";
import ShareDialog from "../dialogs/ShareDialog";
import { useParams } from "react-router-dom";
import { isMobile } from "react-device-detect";

const headingLevels = [
  { name: "Heading 1", level: 1, icon: <RiH1 className="text-lg" /> },
  { name: "Heading 2", level: 2, icon: <RiH2 className="text-lg" /> },
  { name: "Heading 3", level: 3, icon: <RiH3 className="text-lg" /> },
  { name: "Heading 4", level: 4, icon: <RiH4 className="text-lg" /> },
  { name: "Heading 5", level: 5, icon: <RiH5 className="text-lg" /> },
  { name: "Heading 6", level: 6, icon: <RiH6 className="text-lg" /> },
  {
    name: "Paragraph",
    level: 0,
    icon: <BsTextParagraph className="text-lg" />,
  },
];

const textColors = [
  { name: "Red", value: "#FF5733" },
  { name: "Green", value: "#33FF57" },
  { name: "Blue", value: "#3357FF" },
  { name: "Gold", value: "#FFD700" },
  { name: "Pink", value: "#FF33A8" },
  { name: "Black", value: "#000000" },
];

const highlightColors = [
  { name: "Yellow", value: "#FFEB3B" },
  { name: "Pink", value: "#FFC0CB" },
  { name: "Blue", value: "#ADD8E6" },
  { name: "Green", value: "#90EE90" },
  { name: "Orange", value: "#FFA500" },
];

export const MenuBar = () => {
  const { editor } = useEditorContext();
  const [showHeadingDropdown, setShowHeadingDropdown] = useState(false);
  const [showTextColorDropdown, setShowTextColorDropdown] = useState(false);
  const [showHighlightDropdown, setShowHighlightDropdown] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const dropdownRef = useRef(null);
  const { noteId } = useParams();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowHeadingDropdown(false);
        setShowTextColorDropdown(false);
        setShowHighlightDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!editor) return null;

  const getActiveHeading = () => {
    for (let i = 1; i <= 6; i++) {
      if (editor.isActive("heading", { level: i })) {
        return `H${i}`;
      }
    }
    return "Paragraph";
  };

  // Mobile view with collapsed menu
  if (isMobile) {
    return (
      <div
        className="flex flex-col gap-2 bg-base-200 rounded-lg border border-base-300 mb-4 shadow-sm p-2"
        ref={dropdownRef}
      >
        {/* First row - essential controls */}
        <div className="flex justify-between items-center">
          <div className="flex gap-1">
            {/* Heading dropdown */}
            <div className="dropdown dropdown-bottom">
              <label
                tabIndex={0}
                className="btn btn-sm btn-ghost"
                onClick={() => setShowHeadingDropdown(!showHeadingDropdown)}
              >
                <FaHeading className="text-lg" />
                <RiArrowDropDownLine className="text-lg" />
              </label>
              {showHeadingDropdown && (
                <ul
                  tabIndex={0}
                  className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 z-50"
                >
                  {headingLevels.map((h) => (
                    <li key={h.level || "paragraph"}>
                      <button
                        onClick={() => {
                          h.level
                            ? editor
                                .chain()
                                .focus()
                                .toggleHeading({ level: h.level })
                                .run()
                            : editor.chain().focus().setParagraph().run();
                          setShowHeadingDropdown(false);
                        }}
                      >
                        {h.icon}
                        {h.name}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Basic formatting */}
            <button
              onClick={() => editor.chain().focus().toggleBold().run()}
              className={`btn btn-sm ${
                editor.isActive("bold") ? "btn-active" : "btn-ghost"
              }`}
              title="Bold"
            >
              <FaBold />
            </button>
            <button
              onClick={() => editor.chain().focus().toggleItalic().run()}
              className={`btn btn-sm ${
                editor.isActive("italic") ? "btn-active" : "btn-ghost"
              }`}
              title="Italic"
            >
              <FiItalic />
            </button>
            {/* Undo/Redo */}
            <button
              onClick={() => editor.chain().focus().undo().run()}
              className="btn btn-sm btn-ghost"
              disabled={!editor.can().undo()}
              title="Undo"
            >
              <BiUndo className="text-lg" />
            </button>
            <button
              onClick={() => editor.chain().focus().redo().run()}
              className="btn btn-sm btn-ghost"
              disabled={!editor.can().redo()}
              title="Redo"
            >
              <BiRedo className="text-lg" />
            </button>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="btn btn-sm btn-ghost"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            <FaEllipsisV />
          </button>
        </div>

        {/* Expanded mobile menu */}
        {showMobileMenu && (
          <div className="grid grid-cols-4 gap-1 p-2 bg-base-100 rounded-lg">
            {/* Text formatting */}
            <button
              onClick={() => editor.chain().focus().toggleStrike().run()}
              className={`btn btn-sm ${
                editor.isActive("strike") ? "btn-active" : "btn-ghost"
              }`}
              title="Strikethrough"
            >
              <PiTextStrikethroughBold />
            </button>
            <button
              onClick={() => editor.chain().focus().toggleCode().run()}
              className={`btn btn-sm ${
                editor.isActive("code") ? "btn-active" : "btn-ghost"
              }`}
              title="Code"
            >
              <FaCode />
            </button>

            {/* Lists */}
            <button
              onClick={() => editor.chain().focus().toggleBulletList().run()}
              className={`btn btn-sm ${
                editor.isActive("bulletList") ? "btn-active" : "btn-ghost"
              }`}
              title="Bullet List"
            >
              <GrUnorderedList />
            </button>
            <button
              onClick={() => editor.chain().focus().toggleOrderedList().run()}
              className={`btn btn-sm ${
                editor.isActive("orderedList") ? "btn-active" : "btn-ghost"
              }`}
              title="Ordered List"
            >
              <GrOrderedList />
            </button>

            {/* Block elements */}
            <button
              onClick={() => editor.chain().focus().toggleBlockquote().run()}
              className={`btn btn-sm ${
                editor.isActive("blockquote") ? "btn-active" : "btn-ghost"
              }`}
              title="Blockquote"
            >
              <GrBlockQuote />
            </button>
            <button
              onClick={() => editor.chain().focus().setHorizontalRule().run()}
              className="btn btn-sm btn-ghost"
              title="Horizontal Rule"
            >
              <GoHorizontalRule />
            </button>
            <button
              onClick={() => editor.chain().focus().toggleCodeBlock().run()}
              className={`btn btn-sm ${
                editor.isActive("codeBlock") ? "btn-active" : "btn-ghost"
              }`}
              title="Code Block"
            >
              <BiCodeBlock />
            </button>

            {/* Undo/Redo */}
            <button
              onClick={() => editor.chain().focus().undo().run()}
              className="btn btn-sm btn-ghost"
              disabled={!editor.can().undo()}
              title="Undo"
            >
              <BiUndo />
            </button>
            <button
              onClick={() => editor.chain().focus().redo().run()}
              className="btn btn-sm btn-ghost"
              disabled={!editor.can().redo()}
              title="Redo"
            >
              <BiRedo />
            </button>
          </div>
        )}

        {/* Actions row */}
        <div className="flex justify-between gap-2">
          <GenerateSummaryBtn />
          <SaveBtn />
          <ShareDialog id={noteId}>
            <button
              className="btn btn-primary btn-sm"
              onClick={() =>
                document.getElementById("shareNoteModal" + noteId).showModal()
              }
            >
              <BiShare />
              <span className="hidden sm:inline">Share</span>
            </button>
          </ShareDialog>
        </div>
      </div>
    );
  }

  return (
    <div
      className="flex flex-col md:flex-row gap-2 justify-between items-start md:items-center p-3 bg-base-200 rounded-lg border border-base-300 mb-4 shadow-sm"
      ref={dropdownRef}
    >
      <div className="flex flex-wrap gap-2 items-center w-full md:w-auto">
        {/* Heading Dropdown */}
        <div className="dropdown dropdown-hover dropdown-bottom">
          <label tabIndex={0} className="btn btn-sm btn-ghost">
            <FaHeading className="text-lg" />
            <span className="ml-1">{getActiveHeading()}</span>
            <RiArrowDropDownLine className="text-lg" />
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 z-10"
          >
            {headingLevels.map((h) => (
              <li key={h.level || "paragraph"}>
                <button
                  onClick={() =>
                    h.level
                      ? editor
                          .chain()
                          .focus()
                          .toggleHeading({ level: h.level })
                          .run()
                      : editor.chain().focus().setParagraph().run()
                  }
                  className={`${
                    editor.isActive("heading", { level: h.level })
                      ? "active"
                      : ""
                  }`}
                >
                  {h.icon}
                  {h.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Basic Formatting */}
        <div className="flex gap-1 items-center">
          <button
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={`btn btn-sm ${
              editor.isActive("bold") ? "btn-active" : "btn-ghost"
            }`}
            title="Bold"
          >
            <FaBold />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={`btn btn-sm ${
              editor.isActive("italic") ? "btn-active" : "btn-ghost"
            }`}
            title="Italic"
          >
            <FiItalic />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleStrike().run()}
            className={`btn btn-sm ${
              editor.isActive("strike") ? "btn-active" : "btn-ghost"
            }`}
            title="Strikethrough"
          >
            <PiTextStrikethroughBold />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleCode().run()}
            className={`btn btn-sm ${
              editor.isActive("code") ? "btn-active" : "btn-ghost"
            }`}
            title="Code"
          >
            <FaCode />
          </button>
        </div>

        {/* Lists */}
        <div className="flex gap-1">
          <button
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={`btn btn-sm ${
              editor.isActive("bulletList") ? "btn-active" : "btn-ghost"
            }`}
            title="Bullet List"
          >
            <GrUnorderedList />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            className={`btn btn-sm ${
              editor.isActive("orderedList") ? "btn-active" : "btn-ghost"
            }`}
            title="Ordered List"
          >
            <GrOrderedList />
          </button>
        </div>

        {/* Block Elements */}
        <div className="flex gap-1">
          <button
            onClick={() => editor.chain().focus().toggleBlockquote().run()}
            className={`btn btn-sm ${
              editor.isActive("blockquote") ? "btn-active" : "btn-ghost"
            }`}
            title="Blockquote"
          >
            <GrBlockQuote />
          </button>
          <button
            onClick={() => editor.chain().focus().setHorizontalRule().run()}
            className="btn btn-sm btn-ghost"
            title="Horizontal Rule"
          >
            <GoHorizontalRule />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleCodeBlock().run()}
            className={`btn btn-sm ${
              editor.isActive("codeBlock") ? "btn-active" : "btn-ghost"
            }`}
            title="Code Block"
          >
            <BiCodeBlock />
          </button>
        </div>

        {/* Text Alignment */}
        <div className="flex gap-1">
          <button
            onClick={() => editor.chain().focus().setTextAlign("left").run()}
            className={`btn btn-sm ${
              editor.isActive({ textAlign: "left" })
                ? "btn-active"
                : "btn-ghost"
            }`}
            title="Align Left"
          >
            <CiTextAlignLeft />
          </button>
          <button
            onClick={() => editor.chain().focus().setTextAlign("center").run()}
            className={`btn btn-sm ${
              editor.isActive({ textAlign: "center" })
                ? "btn-active"
                : "btn-ghost"
            }`}
            title="Align Center"
          >
            <CiTextAlignCenter />
          </button>
          <button
            onClick={() => editor.chain().focus().setTextAlign("right").run()}
            className={`btn btn-sm ${
              editor.isActive({ textAlign: "right" })
                ? "btn-active"
                : "btn-ghost"
            }`}
            title="Align Right"
          >
            <CiTextAlignRight />
          </button>
        </div>

        {/* Text Color Dropdown */}
        <div className="dropdown dropdown-hover dropdown-bottom">
          <label tabIndex={0} className="btn btn-sm btn-ghost">
            <ImTextColor />
            <span className="ml-1">Text Color</span>
          </label>
          <div
            tabIndex={0}
            className="dropdown-content p-2 shadow bg-base-100 rounded-box w-52 z-10"
          >
            <div className="grid grid-cols-4 gap-2">
              {textColors.map((color) => (
                <button
                  key={color.value}
                  onClick={() =>
                    editor.chain().focus().setColor(color.value).run()
                  }
                  className="w-8 h-8 rounded-full border border-base-300 tooltip"
                  data-tip={color.name}
                  style={{ backgroundColor: color.value }}
                  title={color.name}
                />
              ))}
            </div>
            <button
              onClick={() => editor.chain().focus().unsetColor().run()}
              className="btn btn-xs btn-block mt-2"
            >
              Reset Color
            </button>
          </div>
        </div>

        {/* Highlight Dropdown */}
        <div className="dropdown dropdown-hover dropdown-bottom">
          <label tabIndex={0} className="btn btn-sm btn-ghost">
            <BiHighlight />
            <span className="ml-1">Highlight</span>
          </label>
          <div
            tabIndex={0}
            className="dropdown-content p-2 shadow bg-base-100 rounded-box w-52 z-10"
          >
            <div className="grid grid-cols-4 gap-2">
              {highlightColors.map((color) => (
                <button
                  key={color.value}
                  onClick={() =>
                    editor
                      .chain()
                      .focus()
                      .toggleHighlight({ color: color.value })
                      .run()
                  }
                  className="w-8 h-8 rounded-full border border-base-300 tooltip"
                  data-tip={color.name}
                  style={{ backgroundColor: color.value }}
                  title={color.name}
                />
              ))}
            </div>
            <button
              onClick={() => editor.chain().focus().unsetHighlight().run()}
              className="btn btn-xs btn-block mt-2"
            >
              Reset Highlight
            </button>
          </div>
        </div>
      </div>

      {/* Right Side Actions */}
      <div className="flex flex-wrap gap-2 justify-end w-full md:w-auto mt-2 md:mt-0">
        <GenerateSummaryBtn />
        <SaveBtn />
        <ShareDialog id={noteId}>
          <button
            className="btn btn-primary btn-sm"
            onClick={() =>
              document.getElementById("shareNoteModal" + noteId).showModal()
            }
          >
            <BiShare />
            Share
          </button>
        </ShareDialog>
      </div>
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const extensions = [
  StarterKit.configure({
    heading: {
      levels: [1, 2, 3, 4, 5, 6],
    },
    bulletList: {
      keepMarks: true,
      keepAttributes: false,
    },
    orderedList: {
      keepMarks: true,
      keepAttributes: false,
    },
  }),
  Color.configure({ types: [TextStyle.name, ListItem.name] }),
  TextStyle.configure({ types: [ListItem.name] }),
  TextAlign.configure({
    types: ["heading", "paragraph"],
  }),
  Highlight.configure({ multicolor: true }),
  Placeholder.configure({
    placeholder: "Start writing here...",
  }),
];

export const content = `Who are the members of the team?`;
