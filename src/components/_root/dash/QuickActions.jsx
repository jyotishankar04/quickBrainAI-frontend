import QuickAction from "./QuickAction";

const quickActions = [
  {
    title: "Create New Note",
    path: "/app/notes/new",
    isDisabled: false,
    icon: (
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
          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
        />
      </svg>
    ),
    color: "blue",
  },
  {
    title: "View Notes",
    path: "/app/notes",
    isDisabled: false,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 12s3.75-7.5 9.75-7.5 9.75 7.5 9.75 7.5-3.75 7.5-9.75 7.5S2.25 12 2.25 12z"
        />
      </svg>
    ),
    color: "green",
  },
  {
    title: "Ask AI Assistant",
    path: "/app/ask-ai",
    isDisabled: true,
    icon: (
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
          d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
        />
      </svg>
    ),
    color: "purple",
  },
  {
    title: "View Calendar",
    path: "/app/calendar",
    isDisabled: true,
    icon: (
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
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
    color: "yellow",
  },
];

const QuickActions = () => {
  return (
    <div className="bg-white rounded-lg shadow p-4 lg:col-span-1">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">
        Quick Actions
      </h2>
      <div className="space-y-3">
        {quickActions.map((action, index) => (
          <QuickAction
            key={index}
            title={action.title}
            icon={action.icon}
            color={action.color}
            isDisabled={action.isDisabled}
            path={action.path}
          />
        ))}
      </div>
    </div>
  );
};

export default QuickActions;
