import React from "react";
import NotesSection from "../../../components/_root/notes/NotesSection";
import { Link } from "react-router-dom";

const MyNotes = () => {
  return (
    <div className="container mx-auto px-4" id="el-i2t3zxc6">
      {/* Notes Header */}
      <div
        className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8"
        id="el-v90szbkx"
      >
        <div id="el-2aywqo1i">
          <h1
            className="text-2xl md:text-3xl font-bold text-gray-800 mb-2"
            id="el-e2u0sbeu"
          >
            My Notes
          </h1>
          <p className="text-gray-600" id="el-xizs0mqm">
            Manage and organize all your notes in one place
          </p>
        </div>
        <div className="mt-4 md:mt-0" id="el-ywcwcdqm">
          <Link
            to="/app/notes/new"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-sm flex items-center transition duration-200 animate__animated animate__fadeIn animate__animated--visible"
            id="el-ej6a0zao"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
              id="el-y1hmth4r"
            >
              <path
                fillRule="evenodd"
                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                clipRule="evenodd"
                id="el-k98lyc0u"
              ></path>
            </svg>
            New Note
          </Link>
        </div>
      </div>

      {/* Notes Section  */}
      <NotesSection />
      {/* Notes Categories/Tags */}
      <div
        className="bg-white rounded-xl shadow-sm p-6 mb-8 animate__animated animate__fadeIn animate__animated--visible"
        style={{ animationDelay: "0.6s" }}
        id="el-degtertg"
      >
        <h2 className="text-xl font-bold text-gray-800 mb-4" id="el-qfczjb89">
          Note Categories
        </h2>
        <div className="flex flex-wrap gap-3" id="el-8s94g432">
          <div
            className="bg-blue-100 text-blue-700 px-3 py-1.5 rounded-lg text-sm font-medium flex items-center"
            id="el-u1g28r2o"
          >
            <span id="el-9z7nt1lb">Research</span>
            <span
              className="ml-2 bg-blue-200 text-blue-800 px-2 py-0.5 rounded-full text-xs"
              id="el-zfokzep5"
            >
              12
            </span>
          </div>
          <div
            className="bg-green-100 text-green-700 px-3 py-1.5 rounded-lg text-sm font-medium flex items-center"
            id="el-77j22m4j"
          >
            <span id="el-7xz002cj">Meetings</span>
            <span
              className="ml-2 bg-green-200 text-green-800 px-2 py-0.5 rounded-full text-xs"
              id="el-5e4bdwau"
            >
              8
            </span>
          </div>
          <div
            className="bg-purple-100 text-purple-700 px-3 py-1.5 rounded-lg text-sm font-medium flex items-center"
            id="el-5l3ismvc"
          >
            <span id="el-1v9qjh7n">Design</span>
            <span
              className="ml-2 bg-purple-200 text-purple-800 px-2 py-0.5 rounded-full text-xs"
              id="el-4v44z69u"
            >
              5
            </span>
          </div>
          <div
            className="bg-yellow-100 text-yellow-700 px-3 py-1.5 rounded-lg text-sm font-medium flex items-center"
            id="el-tptdkssq"
          >
            <span id="el-jm901hgf">Project</span>
            <span
              className="ml-2 bg-yellow-200 text-yellow-800 px-2 py-0.5 rounded-full text-xs"
              id="el-jj505uld"
            >
              9
            </span>
          </div>
          <div
            className="bg-red-100 text-red-700 px-3 py-1.5 rounded-lg text-sm font-medium flex items-center"
            id="el-cj1wdvyf"
          >
            <span id="el-cvmg752v">HR</span>
            <span
              className="ml-2 bg-red-200 text-red-800 px-2 py-0.5 rounded-full text-xs"
              id="el-prkp7d9k"
            >
              3
            </span>
          </div>
          <div
            className="bg-indigo-100 text-indigo-700 px-3 py-1.5 rounded-lg text-sm font-medium flex items-center"
            id="el-lb12hgz6"
          >
            <span id="el-lksazuer">Product</span>
            <span
              className="ml-2 bg-indigo-200 text-indigo-800 px-2 py-0.5 rounded-full text-xs"
              id="el-4j5sj7e4"
            >
              7
            </span>
          </div>
          <div
            className="bg-gray-100 text-gray-700 px-3 py-1.5 rounded-lg text-sm font-medium flex items-center"
            id="el-d4e231tu"
          >
            <span id="el-7q4oeqms">Personal</span>
            <span
              className="ml-2 bg-gray-200 text-gray-800 px-2 py-0.5 rounded-full text-xs"
              id="el-gfu6omqc"
            >
              4
            </span>
          </div>
          <button
            className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1.5 rounded-lg text-sm font-medium flex items-center transition"
            id="el-94hiwl6j"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              id="el-ql9v6jlx"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                id="el-5eippfx6"
              ></path>
            </svg>
            Add Category
          </button>
        </div>
      </div>

      {/* Recently Shared with Me */}

      {/* Bulk Actions Section */}
      <div
        className="bg-white rounded-xl shadow-sm p-6 mb-8 animate__animated animate__fadeIn animate__animated--visible"
        style={{ animationDelay: "0.9s" }}
        id="el-r6jb92kh"
      >
        <h2 className="text-xl font-bold text-gray-800 mb-4" id="el-f7vk0j0q">
          Bulk Actions
        </h2>
        <div className="flex flex-wrap gap-4" id="el-q3d2b5iy">
          <button
            className="flex items-center bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg transition"
            id="el-0qvzgt4f"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              id="el-umrc7p04"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                id="el-1gz4lqx5"
              ></path>
            </svg>
            Export Notes
          </button>
          <button
            className="flex items-center bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg transition"
            id="el-81fygy08"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              id="el-uhnqv41z"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                id="el-4s7ww3nu"
              ></path>
            </svg>
            Duplicate
          </button>
          <button
            className="flex items-center bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg transition"
            id="el-3llqf88n"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              id="el-k88309hz"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                id="el-l03t5eoy"
              ></path>
            </svg>
            Archive
          </button>
          <button
            className="flex items-center bg-red-50 hover:bg-red-100 text-red-600 px-4 py-2 rounded-lg transition"
            id="el-2wiq0wh9"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              id="el-udpirxa6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                id="el-vl2f48wf"
              ></path>
            </svg>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyNotes;

//notescard
// app constant
