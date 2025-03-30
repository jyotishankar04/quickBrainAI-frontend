/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import DashStatsCard from "../../../components/_root/dash/DashStatsCard.jsx";
import { FaRegCalendarAlt, FaRegFileAlt, FaRegStar } from "react-icons/fa";
import { MdCalendarMonth, MdOutlineRemoveRedEye } from "react-icons/md";
import NotesCard from "../../../components/_root/notes/NotesCard.jsx";
import { Link } from "react-router-dom";
import QuickActions from "../../../components/_root/dash/QuickActions.jsx";
import { useStatsQuery } from "../../../lib/query/react-query.js";
import toast from "react-hot-toast";
import LoadingModal from "../../../components/_root/LoadingModel.jsx";
import { useQueryClient } from "@tanstack/react-query";
import { BiCategory, BiPlus } from "react-icons/bi";
import { TfiLock, TfiUnlock } from "react-icons/tfi";
import { FiFile } from "react-icons/fi";
import moment from "moment";
import { TbEdit } from "react-icons/tb";
import NoDataFound from "../../../components/NoDataFound.jsx";

const Dashboard = () => {
  const {
    data: stats,
    isPending: isStatsPending,
    isLoading: isStatsLoading,
    isError: isStatsError,
    error: statsError,
    isSuccess: isStatsSuccess,
    refetch: refetchStats,
  } = useStatsQuery();

  const queryClient = useQueryClient();
  const user = queryClient.getQueryData(["session"]);

  useEffect(() => {
    if (isStatsError) {
      toast.error(statsError.message);
    }
  }, [isStatsError, statsError]);

  const getActivityIcon = (action) => {
    switch (action) {
      case "note_created":
        return BiPlus;
      case "note_updated":
        return TbEdit;
      case "category_created":
        return BiPlus;
      case "note_starred":
        return FaRegStar;
      case "note_unstarred":
        return FaRegStar;
      default:
        return MdCalendarMonth;
    }
  };

  const getActivityColor = (action) => {
    switch (action) {
      case "note_created":
        return "blue";
      case "note_updated":
        return "blue";
      case "category_created":
        return "purple";
      case "note_starred":
        return "yellow";
      case "note_unstarred":
        return "red";
      default:
        return "gray";
    }
  };

  if (isStatsLoading) {
    return <LoadingModal isVisible={true} text="Fetching stats..." />;
  }
  const dashboardStats = [
    {
      title: "Total Notes",
      value: stats ? stats.data.totalNotes : "_ _",
      icon: FaRegFileAlt,
      color: "blue",
    },
    {
      title: "Total Categories",
      value: stats ? stats.data.totalCategories : "_ _",
      icon: BiCategory,
      color: "green",
    },
    {
      title: "Starred Notes",
      value: stats ? stats.data.starredNotes : "_ _",
      icon: FaRegStar,
      color: "yellow",
    },
    {
      title: "Created This Week ( 7 days )", // in last 7 days
      value: stats ? stats.data.notesLastWeek : "_ _",
      icon: FaRegCalendarAlt,
      color: "purple",
    },
    {
      title: "Public Notes",
      value: stats ? stats.data.publicNotes : "_ _",
      icon: TfiUnlock,
      color: "red",
    },
    {
      title: "Private Notes",
      value: stats ? stats.data.privateNotes : "_ _",
      icon: TfiLock,
      color: "gray",
    },
    {
      title: "Note with PDF",
      value: stats ? stats.data.notesWithFiles : "_ _",
      icon: FiFile,
      color: "orange",
    },
    {
      title: "Created This Month ( 30 days )",
      value: stats ? stats.data.notesLastMonth : "_ _",
      icon: MdCalendarMonth,
      color: "pink",
    },
  ];
  return stats.success && user ? (
    <main className="flex-1 overflow-y-auto p-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Dashboard Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600">
            Welcome back,{" "}
            <span className="font-semibold text-primary">{user.data.name}</span>
            ! Here's an overview of your notes.
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
            {stats && stats.data.lastThreeNotes.length ? (
              stats.data.lastThreeNotes.map((obj) => (
                <NotesCard
                  key={obj.id}
                  title={obj.noteTitle}
                  category={obj.category}
                  description={obj.noteDescription}
                  updated={obj.updatedAt}
                  created={obj.createdAt}
                  starred={obj.isStared}
                  id={obj.id}
                  isPrivate={obj.isPrivate}
                  tags={obj.tags}
                  files={obj.files}
                />
              ))
            ) : (
              <NoDataFound text={"No notes found"} />
            )}
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
              {stats.data.lastFiveActivities.slice(0, 5).map((obj) => (
                <ActivityItem
                  key={obj.id}
                  title={`${obj.action.replace("_", " ")}: ${obj.title}`}
                  time={obj.createdAt}
                  Icon={getActivityIcon(obj.action)}
                  color={getActivityColor(obj.action)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  ) : (
    <div className="flex items-center justify-center h-screen">
      <div className="w-82 ">
        <div className="mb-4">
          <img src="/500.svg" alt="500" className="object-cover mx-auto" />
        </div>
        <div className="text-center">
          <button
            type="button"
            disabled={isStatsPending}
            onClick={() => refetchStats()}
            className="btn btn-primary"
          >
            {isStatsPending ? (
              <span className="loading loading-spinner"></span>
            ) : (
              "Try Again"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

const ActivityItem = ({ title, time, Icon, color }) => {
  const colors = {
    blue: { bg: "bg-blue-100", text: "text-blue-600" },
    green: { bg: "bg-green-100", text: "text-green-600" },
    purple: { bg: "bg-purple-100", text: "text-purple-600" },
    gray: { bg: "bg-gray-100", text: "text-gray-600" },
    red: { bg: "bg-red-100", text: "text-red-600" },
    yellow: { bg: "bg-yellow-100", text: "text-yellow-600" },
  };

  return (
    <div className="flex items-start">
      <div
        className={`${colors[color]?.bg || "bg-gray-100"} ${
          colors[color]?.text || "text-gray-600"
        } p-2 rounded-full mr-3`}
      >
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <p className="font-medium capitalize">{title.toLowerCase()}</p>
        <p className="text-sm text-gray-500">{moment(time).fromNow()}</p>
      </div>
    </div>
  );
};

export default Dashboard;
