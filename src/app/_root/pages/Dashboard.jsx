import React from "react";
import DashStatsCard from "../../../components/_root/dash/DashStatsCard.jsx";
import { FaRegCalendarAlt, FaRegFileAlt, FaRegStar } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import {
  dashboardStats,
  noteCardsData,
} from "../../../constants/app.constants.js";
import NotesCard from "../../../components/_root/notes/NotesCard.jsx";
import { Link } from "react-router-dom";
import QuickActions from "../../../components/_root/dash/QuickActions.jsx";

const Dashboard = () => {
  return (
    <main className="flex-1 overflow-y-auto p-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Dashboard Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600">
            Welcome back, John! Here's an overview of your notes.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {dashboardStats.map((stat, index) => (
            <DashStatsCard
              key={index}
              title={stat.title}
              value={stat.value}
              icon={stat.icon}
              color={stat.color}
            />
          ))}
        </div>

        {/* Recent Notes */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-900">
              Recent Notes
            </h2>
            <Link
              to="/app/notes"
              className="text-blue-600 hover:text-blue-800 text-sm font-medium"
            >
              View All
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {noteCardsData.map((note, index) => (
              <NotesCard
                key={index}
                title={note.title}
                description={note.description}
                category={note.category}
                updated={note.updated}
                iconColor={note.iconColor}
              />
            ))}
          </div>
        </div>

        {/* Quick Actions & Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Quick Actions */}
          <QuickActions />
          {/* Recent Activity */}
          <div className="bg-white rounded-lg shadow p-4 lg:col-span-2">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Recent Activity
            </h2>
            <div className="space-y-4">
              <ActivityItem
                title="You edited Project Meeting Notes"
                time="2 hours ago"
                icon={
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
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    />
                  </svg>
                }
                color="blue"
              />
              <ActivityItem
                title="You created Shopping List"
                time="Yesterday"
                icon={
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
                }
                color="green"
              />
              <ActivityItem
                title="You marked Shopping List as favorite"
                time="Yesterday"
                icon={
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
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    />
                  </svg>
                }
                color="yellow"
              />

              <ActivityItem
                title="You uploaded Vacation Photos"
                time="3 days ago"
                icon={
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
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                    />
                  </svg>
                }
                color="purple"
              />
            </div>
            <a
              href="#"
              className="block text-center text-blue-600 hover:text-blue-800 mt-4 text-sm font-medium"
            >
              View All Activity
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

// Reusable NoteCard Component

// Reusable QuickAction Component

// Reusable ActivityItem Component
const ActivityItem = ({ title, time, icon, color }) => {
  const colors = {
    blue: { bg: "bg-blue-100", text: "text-blue-600" },
    green: { bg: "bg-green-100", text: "text-green-600" },
    yellow: { bg: "bg-yellow-100", text: "text-yellow-600" },
    purple: { bg: "bg-purple-100", text: "text-purple-600" },
  };

  return (
    <div className="flex items-start">
      <div
        className={`${colors[color].bg} ${colors[color].text} p-2 rounded-full mr-3`}
      >
        {icon}
      </div>
      <div>
        <p className="font-medium">{title}</p>
        <p className="text-sm text-gray-500">{time}</p>
      </div>
    </div>
  );
};

export default Dashboard;
