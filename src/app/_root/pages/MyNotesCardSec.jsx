import React from "react";
import { noteCardsData } from "../../../constants/app.constants";

const MyNotesCardSec = () => {
  return (
    <div
      className="  bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition duration-200 animate__animated animate__fadeInUp"
      id="el-axxcis7k"
    >
      {noteCardsData.map((obj, index) => (
        <div className="p-6" id="el-vscmwjky">
          <div
            key={index}
            className="flex justify-between items-start mb-4"
            id="el-hvne05la"
          >
            <div id="el-j3wzkfu7">
              <h3
                className="font-semibold text-lg text-gray-800 mb-1"
                id="el-8p7ddh29"
              >
                {obj.title}
              </h3>
              <p className="text-gray-500 text-sm" id="el-yb7n0324">
                {obj.updated}
              </p>
            </div>
            <div className="flex" id="el-4ux3vbfb">
              <button
                className="text-yellow-400 hover:text-yellow-500 mr-2"
                aria-label="Favorite"
                id="el-n72aq7w9"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  id="el-wd8cbp55"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    id="el-bcwn09ik"
                  ></path>
                </svg>
              </button>
              <div
                className="bg-blue-100 text-blue-600 text-xs font-medium px-2.5 py-0.5 rounded-full flex items-center"
                id="el-o5drto21"
              >
                {obj.badge}
              </div>
            </div>
          </div>
          <p
            className="text-gray-600 text-sm mb-4 line-clamp-2"
            id="el-1vwt25y3"
          >
            {obj.description}
          </p>
          <div className="flex justify-between items-center" id="el-ixzb3gek">
            <div
              className="flex items-center text-sm text-gray-500"
              id="el-l9x0s9tt"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                id="el-48u47ufd"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                  id="el-6y1hfpbu"
                ></path>
              </svg>
              <span id="el-4jq74xta">{obj.category}</span>
            </div>
            <div className="flex space-x-2" id="el-dv7z0lh1">
              <button
                className="text-gray-400 hover:text-blue-600 transition"
                aria-label="Edit"
                id="el-no3gbdnl"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  id="el-nld5fctr"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    id="el-c6brs8s8"
                  ></path>
                </svg>
              </button>
              <button
                className="text-gray-400 hover:text-blue-600 transition"
                aria-label="Share"
                id="el-06n2alks"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  id="el-ilh45n7f"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                    id="el-hqb717ns"
                  ></path>
                </svg>
              </button>
              <button
                className="text-gray-400 hover:text-red-600 transition"
                aria-label="Delete"
                id="el-lftfnxca"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  id="el-85vbqatp"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    id="el-2sd5n90z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default MyNotesCardSec;
