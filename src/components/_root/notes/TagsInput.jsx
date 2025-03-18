import React, { useState, useRef } from "react";

const TagInput = ({
  initialTags = [],
  onTagsChange,
  allowCreate = true,
  placeholder = "Add tags...",
}) => {
  const [tags, setTags] = useState(initialTags);
  const [input, setInput] = useState("");
  const inputRef = useRef(null);

  const addTag = (text) => {
    if (allowCreate && text.trim() && !tags.includes(text.trim())) {
      const newTags = [...tags, text.trim()];
      setTags(newTags);
      onTagsChange?.(newTags);
    }
    setInput("");
  };

  const removeTag = (index) => {
    const newTags = tags.filter((_, i) => i !== index);
    setTags(newTags);
    onTagsChange?.(newTags);
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && input) {
      e.preventDefault();
      addTag(input);
    } else if (e.key === "Backspace" && !input && tags.length > 0) {
      removeTag(tags.length - 1);
    }
  };

  return (
    <div className="w-full">
      <div className="min-h-[44px] p-2 border border-gray-200 rounded-lg bg-white flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="inline-flex items-center px-3 py-1 rounded-full text-sm text-gray-800 bg-gray-200"
          >
            {tag}
            <button
              onClick={() => removeTag(index)}
              className="ml-2 text-gray-600 hover:text-gray-900 focus:outline-none cursor-pointer"
            >
              ✕
            </button>
          </span>
        ))}
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder={tags.length === 0 ? placeholder : ""}
          className="flex-1 min-w-[120px] outline-none border-none text-sm"
        />
      </div>
    </div>
  );
};

export default TagInput;
