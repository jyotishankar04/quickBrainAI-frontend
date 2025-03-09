import React from "react";
import NotesCard from "../../../components/_root/notes/NotesCard";
import { noteCardsData } from "../../../constants/app.constants";
import MyNotesCardSec from "./MyNotesCardSec";

const CreateNotePage = () => {
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
          <button
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
          </button>
        </div>
      </div>

      {/* Filters and View Options */}
      <div
        className="bg-white rounded-xl shadow-sm p-4 mb-6 animate__animated animate__fadeIn animate__animated--visible"
        id="el-lij35cu3"
      >
        <div
          className="flex flex-col md:flex-row justify-between"
          id="el-debgabgq"
        >
          <div
            className="flex flex-wrap items-center gap-3 mb-4 md:mb-0"
            id="el-2xvp4t6s"
          >
            <span className="text-gray-700 font-medium" id="el-4xwpqhs6">
              Filter By:
            </span>
            <button
              className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-blue-200 transition"
              id="el-dxkbf0np"
            >
              All Notes
            </button>
            <button
              className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-gray-200 transition"
              id="el-y64a8mhk"
            >
              Recent
            </button>
            <button
              className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-gray-200 transition"
              id="el-zmtd0gka"
            >
              PDF Files
            </button>
            <button
              className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-gray-200 transition"
              id="el-0dqpaowj"
            >
              Shared
            </button>
            <button
              className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-gray-200 transition"
              id="el-on65v71r"
            >
              Favorites
            </button>
          </div>
          <div className="flex items-center space-x-3" id="el-rx7wub4k">
            <span className="text-gray-700 font-medium" id="el-ukplvnet">
              View:
            </span>
            <button
              className="bg-blue-100 p-1.5 rounded text-blue-700 hover:bg-blue-200 transition"
              aria-label="Grid view"
              id="el-0rfbic85"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                id="el-u6trur5g"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                  id="el-byukw1rc"
                ></path>
              </svg>
            </button>
            <button
              className="bg-gray-100 p-1.5 rounded text-gray-700 hover:bg-gray-200 transition"
              aria-label="List view"
              id="el-oiuzxssh"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                id="el-117izim0"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 10h16M4 14h16M4 18h16"
                  id="el-6j2gpmot"
                ></path>
              </svg>
            </button>
            <select
              className="bg-gray-100 text-gray-700 rounded p-1.5 text-sm border-none focus:ring-2 focus:ring-blue-500"
              id="el-ylwkqylw"
            >
              <option id="el-5h4sr5f4">Last Modified</option>
              <option id="el-nkiv069x">Name (A-Z)</option>
              <option id="el-5q1hibta">Name (Z-A)</option>
              <option id="el-poj4npud">Created Date</option>
            </select>
          </div>
        </div>
      </div>

      {/* Notes Grid */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"
        id="el-fz3htmmi"
      >
        <MyNotesCardSec />
    
       
         
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mb-8" id="el-kbd1ro12">
        <p className="text-sm text-gray-600" id="el-uoiswsdd">
          Showing{" "}
          <span className="font-medium" id="el-fgzwlv20">
            6
          </span>{" "}
          of{" "}
          <span className="font-medium" id="el-h57l5l79">
            24
          </span>{" "}
          notes
        </p>
        <div className="flex space-x-2" id="el-hfywszyf">
          <button
            className="px-3 py-1 bg-white text-gray-500 border border-gray-300 rounded-md hover:bg-gray-50 transition"
            aria-label="Previous page"
            disabled
            id="el-3bw09cfc"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
              id="el-dyv3uvkz"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
                id="el-l54vr0rr"
              ></path>
            </svg>
          </button>
          <button
            className="px-3 py-1 bg-blue-600 text-white rounded-md font-medium"
            id="el-mg06d7ml"
          >
            1
          </button>
          <button
            className="px-3 py-1 bg-white text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 transition"
            id="el-w2h3iivg"
          >
            2
          </button>
          <button
            className="px-3 py-1 bg-white text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 transition"
            id="el-v9euz6qb"
          >
            3
          </button>
          <button
            className="px-3 py-1 bg-white text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 transition"
            id="el-k5sf1qse"
          >
            4
          </button>
          <button
            className="px-3 py-1 bg-white text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 transition"
            aria-label="Next page"
            id="el-mjoc8l3t"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
              id="el-vtlkbc6y"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
                id="el-dtp6iymb"
              ></path>
            </svg>
          </button>
        </div>
      </div>

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
      <div
        className="mb-8 animate__animated animate__fadeIn animate__animated--visible"
        style={{ animationDelay: "0.8s" }}
        id="el-zomst040"
      >
        <div
          className="flex justify-between items-center mb-6"
          id="el-zb79v76u"
        >
          <h2 className="text-xl font-bold text-gray-800" id="el-hhnm2y1y">
            Shared with Me
          </h2>
          <a
            href="#"
            className="text-blue-600 hover:text-blue-800 flex items-center text-sm font-medium"
            id="el-riwbodsn"
          >
            View All
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1"
              viewBox="0 0 20 20"
              fill="currentColor"
              id="el-hbp48api"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
                id="el-h4ii4kme"
              ></path>
            </svg>
          </a>
        </div>

        <div className="overflow-x-auto" id="el-8tyxfleu">
          <table
            className="min-w-full bg-white border border-gray-200 rounded-xl shadow-sm"
            id="el-ur4n8tri"
          >
            <thead id="el-68wcp3g1">
              <tr className="bg-gray-50" id="el-gt7jjwo7">
                <th
                  className="py-3 px-4 text-left text-sm font-medium text-gray-700 rounded-tl-xl"
                  id="el-umre8lg3"
                >
                  Note Name
                </th>
                <th
                  className="py-3 px-4 text-left text-sm font-medium text-gray-700"
                  id="el-4en7fm1o"
                >
                  Shared By
                </th>
                <th
                  className="py-3 px-4 text-left text-sm font-medium text-gray-700"
                  id="el-g11smt2a"
                >
                  Date Shared
                </th>
                <th
                  className="py-3 px-4 text-left text-sm font-medium text-gray-700"
                  id="el-bvf90u1c"
                >
                  Type
                </th>
                <th
                  className="py-3 px-4 text-right text-sm font-medium text-gray-700 rounded-tr-xl"
                  id="el-246z7hjl"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200" id="el-ux2438rm">
              <tr className="hover:bg-gray-50 transition" id="el-6kdapbn6">
                <td
                  className="py-3 px-4 text-sm text-gray-800"
                  id="el-rxqey78r"
                >
                  <div className="flex items-center" id="el-3z98sk8n">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-blue-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      id="el-triwop72"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        id="el-l0gsf35s"
                      ></path>
                    </svg>
                    <span id="el-7rn2ujgy">Q4 Marketing Strategy</span>
                  </div>
                </td>
                <td
                  className="py-3 px-4 text-sm text-gray-700"
                  id="el-g6ctt67e"
                >
                  <div className="flex items-center" id="el-e0un6pek">
                    <div
                      className="w-7 h-7 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold mr-2"
                      id="el-usfxee54"
                    >
                      JD
                    </div>
                    <span id="el-6tj60c4b">John Doe</span>
                  </div>
                </td>
                <td
                  className="py-3 px-4 text-sm text-gray-700"
                  id="el-o3w19q3d"
                >
                  Oct 15, 2023
                </td>
                <td className="py-3 px-4 text-sm" id="el-hv1wqx2h">
                  <span
                    className="bg-blue-100 text-blue-600 text-xs font-medium px-2.5 py-0.5 rounded-full"
                    id="el-esmubc4p"
                  >
                    PDF
                  </span>
                </td>
                <td className="py-3 px-4 text-right" id="el-1bymiynn">
                  <div className="flex justify-end space-x-2" id="el-ina0xewi">
                    <button
                      className="text-gray-400 hover:text-blue-600 transition"
                      aria-label="View"
                      id="el-6x0abv2k"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        id="el-m1j2cuf1"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          id="el-wd0tt105"
                        ></path>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          id="el-dbibc8du"
                        ></path>
                      </svg>
                    </button>
                    <button
                      className="text-gray-400 hover:text-green-600 transition"
                      aria-label="Save"
                      id="el-t7xhbuq5"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        id="el-9o21j4p3"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
                          id="el-x78gzmyv"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition" id="el-2qz47z7w">
                <td
                  className="py-3 px-4 text-sm text-gray-800"
                  id="el-kpjiv5km"
                >
                  <div className="flex items-center" id="el-ub4xtbgk">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      id="el-fw4f4ooq"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        id="el-qvrun4cb"
                      ></path>
                    </svg>
                    <span id="el-hh8f3wh4">Annual Budget Review</span>
                  </div>
                </td>
                <td
                  className="py-3 px-4 text-sm text-gray-700"
                  id="el-zowznbhf"
                >
                  <div className="flex items-center" id="el-rnyih3vg">
                    <div
                      className="w-7 h-7 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold mr-2"
                      id="el-uqxttmst"
                    >
                      SL
                    </div>
                    <span id="el-8pqotz7x">Sarah Lee</span>
                  </div>
                </td>
                <td
                  className="py-3 px-4 text-sm text-gray-700"
                  id="el-uicaq608"
                >
                  Oct 10, 2023
                </td>
                <td className="py-3 px-4 text-sm" id="el-v7cgo698">
                  <span
                    className="bg-green-100 text-green-600 text-xs font-medium px-2.5 py-0.5 rounded-full"
                    id="el-244jvtrv"
                  >
                    Note
                  </span>
                </td>
                <td className="py-3 px-4 text-right" id="el-lx8ppq4d">
                  <div className="flex justify-end space-x-2" id="el-j0egtpfb">
                    <button
                      className="text-gray-400 hover:text-blue-600 transition"
                      aria-label="View"
                      id="el-hlf7kg77"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        id="el-fceu70bq"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          id="el-gvrsvnkd"
                        ></path>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          id="el-5nwealaz"
                        ></path>
                      </svg>
                    </button>
                    <button
                      className="text-gray-400 hover:text-green-600 transition"
                      aria-label="Save"
                      id="el-1dvhkmv2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        id="el-woo2q7dz"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
                          id="el-az0bqe8l"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition" id="el-xwg38afv">
                <td
                  className="py-3 px-4 text-sm text-gray-800"
                  id="el-me5qm062"
                >
                  <div className="flex items-center" id="el-983u34k3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-blue-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      id="el-z2du3e5c"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        id="el-bsgqmwjn"
                      ></path>
                    </svg>
                    <span id="el-orb6oaof">New Feature Specs</span>
                  </div>
                </td>
                <td
                  className="py-3 px-4 text-sm text-gray-700"
                  id="el-qypgzdy2"
                >
                  <div className="flex items-center" id="el-m9t350o5">
                    <div
                      className="w-7 h-7 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold mr-2"
                      id="el-ggrqxp7q"
                    >
                      RJ
                    </div>
                    <span id="el-eh0tay7z">Robert Johnson</span>
                  </div>
                </td>
                <td
                  className="py-3 px-4 text-sm text-gray-700"
                  id="el-ogwz0ang"
                >
                  Oct 5, 2023
                </td>
                <td className="py-3 px-4 text-sm" id="el-79mxmzof">
                  <span
                    className="bg-blue-100 text-blue-600 text-xs font-medium px-2.5 py-0.5 rounded-full"
                    id="el-sjoeurgq"
                  >
                    PDF
                  </span>
                </td>
                <td className="py-3 px-4 text-right" id="el-mo3m6pee">
                  <div className="flex justify-end space-x-2" id="el-ycbdvt4p">
                    <button
                      className="text-gray-400 hover:text-blue-600 transition"
                      aria-label="View"
                      id="el-x8fvezp8"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        id="el-pbdpq51t"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          id="el-sh5kt8qh"
                        ></path>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          id="el-f169nyqp"
                        ></path>
                      </svg>
                    </button>
                    <button
                      className="text-gray-400 hover:text-green-600 transition"
                      aria-label="Save"
                      id="el-wkas8ltn"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        id="el-rwrwytsd"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
                          id="el-hdieebs0"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

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

export default CreateNotePage;

//notescard
// app constant
