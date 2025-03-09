import { noteCardsData } from "../../../constants/app.constants";
import NotesCard from "./NotesCard";

const NotesSection = () => {
  return (
    <>
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
        className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-8"
        id="el-fz3htmmi"
      >
        {noteCardsData.map((obj, index) => (
          <NotesCard
            key={index}
            title={obj.title}
            description={obj.description}
            date={obj.date}
            time={obj.time}
            color={obj.color}
            badge={obj.badge}
            iconColor={obj.iconColor}
            category={obj.category}
            updated={obj.updated}
            badgeColor={obj.badgeColor}
            starred={obj.starred}
            tags={obj.tags}
          />
        ))}
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
    </>
  );
};

export default NotesSection;
