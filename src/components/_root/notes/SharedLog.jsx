import React from "react";
import TableRow from "./TableRow";

const SharedLog = () => {
  const data = [
    {
      noteName: "Q4 Marketing Strategy",
      sharedBy: { initials: "JD", name: "John Doe" },
      dateShared: "Oct 15, 2023",
      type: "PDF",
    },
    {
      noteName: "Annual Budget Review",
      sharedBy: { initials: "SL", name: "Sarah Lee" },
      dateShared: "Oct 10, 2023",
      type: "Note",
    },
    {
      noteName: "New Feature Specs",
      sharedBy: { initials: "RJ", name: "Robert Johnson" },
      dateShared: "Oct 5, 2023",
      type: "PDF",
    },
  ];

  return (
    <div className="mb-8 animate__animated animate__fadeIn animate__animated--visible">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-800">Shared with Me</h2>
        <a
          href="#"
          className="text-blue-600 hover:text-blue-800 flex items-center text-sm font-medium"
        >
          View All
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-xl shadow-sm">
          <thead>
            <tr className="bg-gray-50">
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-700 rounded-tl-xl">
                Note Name
              </th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-700">
                Shared By
              </th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-700">
                Date Shared
              </th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-700">
                Type
              </th>
              <th className="py-3 px-4 text-right text-sm font-medium text-gray-700 rounded-tr-xl">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {data.map((row, index) => (
              <TableRow key={index} {...row} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SharedLog;
