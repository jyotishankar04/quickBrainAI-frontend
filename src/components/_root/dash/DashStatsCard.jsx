import React from "react";

// Reusable StatCard Component
const DashStatsCard = ({ title, value, icon, color }) => {
  const colors = {
    blue: {
      bg: "bg-blue-100",
      text: "text-blue-500",
      border: "border-blue-500",
    },
    green: {
      bg: "bg-green-100",
      text: "text-green-500",
      border: "border-green-500",
    },
    yellow: {
      bg: "bg-yellow-100",
      text: "text-yellow-500",
      border: "border-yellow-500",
    },
    purple: {
      bg: "bg-purple-100",
      text: "text-purple-500",
      border: "border-purple-500",
    },
  };

  return (
    <div
      className={`bg-white rounded-lg shadow p-4 border-l-4 ${colors[color].border}`}
    >
      <div className="flex items-center">
        <div
          className={`p-3 rounded-full ${colors[color].bg} ${colors[color].text} mr-4`}
        >
          {React.createElement(icon, { className: "w-6 h-6 " })}
        </div>
        <div>
          <p className="text-gray-500 text-sm">{title}</p>
          <p className="text-2xl font-semibold">{value}</p>
        </div>
      </div>
    </div>
  );
};

export default DashStatsCard;
