import Color from "@tiptap/extension-color";
import ListItem from "@tiptap/extension-list-item";
import TextStyle from "@tiptap/extension-text-style";
import StarterKit from "@tiptap/starter-kit";
import { useEditorContext } from "../../../context/EditorContext";
import { FaBold, FaCode } from "react-icons/fa";
import { FiItalic } from "react-icons/fi";
import { PiTextStrikethroughBold } from "react-icons/pi";
import { BsTextParagraph } from "react-icons/bs";
import { GrBlockQuote, GrOrderedList, GrUnorderedList } from "react-icons/gr";
import { GoHorizontalRule } from "react-icons/go";
import { BiCodeBlock, BiHighlight, BiRedo, BiUndo } from "react-icons/bi";
import { ImTextColor } from "react-icons/im";
import Highlight from "@tiptap/extension-highlight";
import Placeholder from "@tiptap/extension-placeholder";
import TextAlign from "@tiptap/extension-text-align";
import Text from "@tiptap/extension-text";
import Paragraph from "@tiptap/extension-paragraph";
import Document from "@tiptap/extension-document";

import {
  CiTextAlignCenter,
  CiTextAlignLeft,
  CiTextAlignRight,
} from "react-icons/ci";
import BulletList from "@tiptap/extension-bullet-list";

export const MenuBar = () => {
  const { editor } = useEditorContext();
  if (!editor) return null;

  const buttons = [
    {
      name: "bold",
      action: () => editor.chain().focus().toggleBold().run(),
      icon: <FaBold />,
      tooltip: "Bold",
    },
    {
      name: "italic",
      action: () => editor.chain().focus().toggleItalic().run(),
      icon: <FiItalic />,
      tooltip: "Italic",
    },
    {
      name: "strike",
      action: () => editor.chain().focus().toggleStrike().run(),
      icon: <PiTextStrikethroughBold />,
      tooltip: "Strikethrough",
    },
    {
      name: "code",
      action: () => editor.chain().focus().toggleCode().run(),
      icon: <FaCode />,
      tooltip: "Code",
    },
    {
      name: "paragraph",
      action: () => editor.chain().focus().setParagraph().run(),
      icon: <BsTextParagraph />,
      tooltip: "Paragraph",
    },
    {
      name: "bulletList",
      action: () => editor.chain().focus().toggleBulletList().run(),
      icon: <GrUnorderedList />,
      tooltip: "Bullet List",
    },
    {
      name: "orderedList",
      action: () => editor.chain().focus().toggleOrderedList().run(),
      icon: <GrOrderedList />,
      tooltip: "Ordered List",
    },
    {
      name: "blockquote",
      action: () => editor.chain().focus().toggleBlockquote().run(),
      icon: <GrBlockQuote />,
      tooltip: "Blockquote",
    },
    {
      name: "codeBlock",
      action: () => editor.chain().focus().setHorizontalRule().run(),
      icon: <GoHorizontalRule />,
      tooltip: "Horizontal Rule",
    },
    {
      name: "undo",
      action: () => editor.chain().focus().undo().run(),
      icon: <BiUndo />,
      tooltip: "Undo",
    },
    {
      name: "redo",
      action: () => editor.chain().focus().redo().run(),
      icon: <BiRedo />,
      tooltip: "Redo",
    },
  ];

  const colors = [
    { hex: "#000000", name: "Black" },
    { hex: "#FF5733", name: "Red" },
    { hex: "#33FF57", name: "Green" },
    { hex: "#33A1FF", name: "Blue" },
    { hex: "#FFC300", name: "Yellow" },
    { hex: "#FF33A8", name: "Pink" },
    { hex: "#A833FF", name: "Violet" },
    { hex: "#1DB954", name: "Spotify Green" },
  ];

  const highlightColors = [
    { hex: "#FF5733", name: "Red" },
    { hex: "#33FF57", name: "Green" },
    { hex: "#FFC300", name: "Yellow" },
  ];

  return (
    <div className="control-group">
      <div className="flex flex-wrap gap-1 items-center p-2 ">
        {buttons.map((btn, index) => (
          <button
            key={index}
            onClick={btn.action}
            className={`${
              editor.isActive(btn.name) ? "btn-primary" : ""
            } btn btn-sm`}
            title={btn.tooltip}
          >
            {btn.icon}
          </button>
        ))}

        <button
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          className={`${
            editor.isActive("codeBlock") ? "btn-primary" : ""
          } btn btn-sm`}
        >
          <BiCodeBlock className="w-5 h-5" />
        </button>
        <button
          onClick={() => editor.chain().focus().setTextAlign("left").run()}
          className={`${
            editor.isActive({ textAlign: "left" }) ? "btn-primary" : ""
          } btn btn-sm`}
        >
          <CiTextAlignLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => editor.chain().focus().setTextAlign("center").run()}
          className={`${
            editor.isActive({ textAlign: "center" }) ? "btn-primary" : ""
          } btn btn-sm`}
        >
          <CiTextAlignCenter className="w-5 h-5" />
        </button>
        <button
          onClick={() => editor.chain().focus().setTextAlign("right").run()}
          className={`${
            editor.isActive({ textAlign: "right" }) ? "btn-primary" : ""
          } btn btn-sm`}
        >
          <CiTextAlignRight className="w-5 h-5" />
        </button>
        {colors.map((color) => (
          <button
            key={color.hex}
            onClick={() => editor.chain().focus().setColor(color.hex).run()}
            className={`${
              editor.isActive("textStyle", { color: color.hex })
                ? "btn-primary"
                : ""
            } btn btn-sm`}
            style={{ color: color.hex }}
            title={`Text color: ${color.name}`}
          >
            <ImTextColor className="w-5 h-5 " />
          </button>
        ))}

        {highlightColors.map((color) => (
          <button
            key={color.name}
            onClick={() =>
              editor.chain().focus().toggleHighlight({ color: color.hex }).run()
            }
            className={`${
              editor.isActive("highlight", { color: color.hex })
                ? "btn-primary"
                : ""
            } btn btn-sm`}
            title={`Highlight color: ${color.name}`}
          >
            <BiHighlight className={`w-5 h-5 `} style={{ color: color.hex }} />
          </button>
        ))}
        <button
          onClick={() => editor.chain().focus().unsetHighlight().run()}
          disabled={!editor.isActive("highlight")}
          title={`Remove Highlight`}
          className="btn btn-sm "
        >
          Remove Highlight
        </button>
      </div>
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const extensions = [
  Color.configure({ types: [TextStyle.name, ListItem.name] }),
  TextStyle.configure({ types: [ListItem.name] }),
  TextAlign.configure({
    types: ["heading", "paragraph"],
  }),
  StarterKit.configure({
    bulletList: {
      keepMarks: true,
      keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
    },
    orderedList: {
      keepMarks: true,
      keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
    },
  }),
  Highlight.configure({ multicolor: true }),
  Placeholder.configure({
    placeholder: "Start taking notes...",
  }),
];

export const content = ``;

export default MenuBar;

// // eslint-disable-next-line react-refresh/only-export-components
// export default () => {
//   return (
//     <EditorProvider
//       slotBefore={<MenuBar />}
//       extensions={extensions}
//       content={content}
//     ></EditorProvider>
//   );
// };
