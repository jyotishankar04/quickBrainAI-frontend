const QuickAction = ({ title, icon, color }) => {
  const colors = {
    blue: { bg: "bg-blue-100", text: "text-blue-600" },
    green: { bg: "bg-green-100", text: "text-green-600" },
    purple: { bg: "bg-purple-100", text: "text-purple-600" },
    yellow: { bg: "bg-yellow-100", text: "text-yellow-600" },
  };

  return (
    <a
      href="#"
      className={`flex items-center p-3 ${colors[color].bg} hover:bg-gray-100 rounded-lg transition`}
    >
      <div
        className={`${colors[color].bg} ${colors[color].text} p-2 rounded mr-3`}
      >
        {icon}
      </div>
      <span className="font-medium">{title}</span>
    </a>
  );
};

export default QuickAction;
