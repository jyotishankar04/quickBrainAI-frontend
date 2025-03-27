import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "highlight.js/styles/github-dark.css";
import "katex/dist/katex.min.css";
import mermaid from "mermaid";
import { FiCopy, FiCheck } from "react-icons/fi";

const MarkdownMessage = ({ content }) => {
  const [copiedStates, setCopiedStates] = useState({});

  useEffect(() => {
    // Initialize mermaid only if it exists and content is present
    if (mermaid && content) {
      try {
        mermaid.initialize({
          startOnLoad: true,
          theme: "default",
          fontFamily: "inherit",
          securityLevel: "loose",
        });
        mermaid.contentLoaded();
      } catch (error) {
        console.error("Mermaid initialization error:", error);
      }
    }
  }, [content]);

  const extractPlainText = (children) => {
    const extractText = (child) => {
      if (typeof child === "string") return child;
      if (Array.isArray(child)) return child.map(extractText).join("");
      if (child && typeof child === "object" && child.props?.children) {
        return extractText(child.props.children);
      }
      return "";
    };
    return extractText(children);
  };

  const handleCopy = (children, index) => {
    const copyText = extractPlainText(children);

    try {
      navigator.clipboard.writeText(copyText.trim());
      setCopiedStates((prev) => ({ ...prev, [index]: true }));

      setTimeout(() => {
        setCopiedStates((prev) => {
          const newStates = { ...prev };
          delete newStates[index];
          return newStates;
        });
      }, 2000);
    } catch (error) {
      console.error("Copy to clipboard failed:", error);
    }
  };

  return (
    <div className="w-full prose prose-sm sm:prose-base text-gray-900 break-words">
      <ReactMarkdown
        rehypePlugins={[rehypeHighlight, rehypeKatex]}
        remarkPlugins={[remarkMath]}
        components={{
          code({ inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            const codeIndex = Math.random().toString(36).substr(2, 9);

            if (inline) {
              return (
                <code className="bg-gray-200 px-1.5 py-0.5 rounded text-sm font-mono text-gray-900">
                  {children}
                </code>
              );
            }

            return (
              <div className="relative my-4 rounded-lg bg-gray-900">
                <div className="flex justify-between items-center px-4 py-2 bg-gray-800 text-gray-200 text-xs">
                  <span>{match ? match[1].toUpperCase() : "CODE"}</span>
                  <button
                    className="flex items-center gap-1 text-xs hover:text-blue-400 transition-colors"
                    onClick={() => handleCopy(children, codeIndex)}
                    title="Copy code"
                  >
                    {copiedStates[codeIndex] ? (
                      <>
                        <FiCheck className="w-4 h-4 text-green-400" /> Copied
                      </>
                    ) : (
                      <>
                        <FiCopy className="w-4 h-4" /> Copy
                      </>
                    )}
                  </button>
                </div>
                <pre className="p-4 overflow-x-auto text-sm leading-tight">
                  <code
                    className={`text-gray-200 ${className || ""}`}
                    {...props}
                  >
                    {children}
                  </code>
                </pre>
              </div>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownMessage;
