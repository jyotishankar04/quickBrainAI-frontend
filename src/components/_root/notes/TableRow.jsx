import React from "react";

const TableRow = ({ noteName, sharedBy, dateShared, type }) => {
  return (
    <tr className="hover:bg-gray-50 transition">
      <td className="py-3 px-4 text-sm text-gray-800">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-5 w-5 ${
              type === "PDF" ? "text-blue-500" : "text-green-500"
            } mr-2`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          <span>{noteName}</span>
        </div>
      </td>
      <td className="py-3 px-4 text-sm text-gray-700">
        <div className="flex items-center">
          <div
            className={`w-7 h-7 ${
              sharedBy.initials === "JD"
                ? "bg-purple-500"
                : sharedBy.initials === "SL"
                ? "bg-green-500"
                : "bg-blue-500"
            } rounded-full flex items-center justify-center text-white text-xs font-bold mr-2`}
          >
            {sharedBy.initials}
          </div>
          <span>{sharedBy.name}</span>
        </div>
      </td>
      <td className="py-3 px-4 text-sm text-gray-700">{dateShared}</td>
      <td className="py-3 px-4 text-sm">
        <span
          className={`${
            type === "PDF"
              ? "bg-blue-100 text-blue-600"
              : "bg-green-100 text-green-600"
          } text-xs font-medium px-2.5 py-0.5 rounded-full`}
        >
          {type}
        </span>
      </td>
      <td className="py-3 px-4 text-right">
        <div className="flex justify-end space-x-2">
          <button
            className="text-gray-400 hover:text-blue-600 transition"
            aria-label="View"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          </button>
          <button
            className="text-gray-400 hover:text-green-600 transition"
            aria-label="Save"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
              />
            </svg>
          </button>
        </div>
      </td>
    </tr>
  );
};

export default TableRow;
