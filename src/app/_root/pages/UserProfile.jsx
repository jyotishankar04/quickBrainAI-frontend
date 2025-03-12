import { React, useState } from "react";
import {
  UserSkillData,
  Connections,
  RecentActivities,
} from "../../../constants/app.constants";

const UserProfilePage = () => {
  const [showAll, setShowAll] = useState(false); // assigning false value to showAll
  return (
    <div className="max-w-5xl mx-auto w-screen">
      {/* Profile Header */}
      <div className="mb-10">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-2">My Profile</h2>
            <p className="text-gray-500">
              Share your profile with others and connect with like-minded
              individuals
            </p>
          </div>
          <div className="flex gap-3">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors shadow-sm">
              Edit Profile
            </button>
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-md transition-colors shadow-sm">
              Share Profile
            </button>
          </div>
        </div>
      </div>

      {/* Profile Container */}
      <div className="bg-white rounded-lg overflow-hidden shadow-md">
        {/* Profile Banner */}
        <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-500 relative">
          <button className="absolute bottom-4 right-4 bg-white bg-opacity-80 hover:bg-opacity-100 p-2 rounded-full transition-colors shadow-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </button>
        </div>

        {/* Profile Content */}
        <div className="px-6 py-8">
          {/* Profile Header with Avatar */}
          <div className="flex flex-col md:flex-row items-start md:items-end gap-6 -mt-20 mb-8">
            <div className="w-32 h-32 bg-gray-200 rounded-full border-4 border-white flex items-center justify-center relative overflow-hidden shadow-md">
              <span className="text-4xl text-gray-600">JD</span>
              <button
                type="button"
                className="absolute bottom-0 right-0 bg-blue-500 hover:bg-blue-600 p-2 rounded-full transition-colors text-white shadow-sm"
              >
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
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  />
                </svg>
              </button>
            </div>

            <div className="flex-1">
              <h1 className="text-3xl font-bold">Jhon Doe </h1>
              <p className="text-gray-500">@johndoe</p>
            </div>
          </div>

          {/* Profile Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="md:col-span-2 space-y-8">
              {/* Bio Section */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Bio</h3>
                <p className="text-gray-600">
                  Product designer and developer with over 5 years of experience
                  creating user-centered digital experiences. Passionate about
                  solving complex problems through intuitive interfaces and
                  clean code. Currently working on improving accessibility in
                  web applications.
                </p>
              </div>
              {/* Skills Section */}
              <div className="flex flex-col">
                <h3 className="text-xl font-semibold mb-4">Skills</h3>

                <div className="flex flex-wrap gap-2">
                  {UserSkillData.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      {skill.title}
                    </span>
                  ))}
                </div>
              </div>
              {/* Recent Activity */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Recent Activity</h3>
                <div className="space-y-4">
                  {RecentActivities.map((activity, index) => {
                    return (
                      <div key={index} className="bg-gray-100 p-4 rounded-lg">
                        <div className="flex items-center mb-2">
                          {
                            <activity.icon
                              className={`${activity.iconcolor}  rounded-full mr-2 w-10 h-10 p-2`}
                            />
                          }

                          <div>
                            <p className="font-medium">{activity.title}</p>
                            <p className="text-sm text-gray-500">
                              {activity.duration}
                            </p>
                          </div>
                        </div>
                        <p className="text-gray-600">{activity.description}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {/* Contact Information */}
              <div className="bg-gray-100 p-5 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">
                  Contact Information
                </h3>
                {/* starts here */}
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-3 text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="text-gray-700">john.doe@example.com</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-3 text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-gray-700">johndoe.design</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-3 text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span className="text-gray-700">San Francisco, CA</span>
                  </li>
                </ul>

                {/* Ends here */}
              </div>

              {/* Connected Accounts */}
              <div className="bg-gray-100 p-5 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">
                  Connected Accounts
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-3 text-blue-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                      />
                    </svg>
                    <span className="text-gray-700">@johndoe</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-3 text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                    <span className="text-gray-700">github.com/johndoe</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-3 text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="text-gray-700">dribbble.com/johndoe</span>
                  </li>
                </ul>
              </div>

              {/* Connections */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold">Connections</h3>
                  <button
                    className="text-blue-500 hover:text-blue-600 transition"
                    onClick={() => setShowAll(!showAll)}
                  >
                    {showAll ? "View Less" : "View All"}
                  </button>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {(showAll ? Connections : Connections.slice(0, 3)).map(
                    (obj, index) => {
                      const nameParts = obj.name.split(" ");
                      const avatarText =
                        (nameParts[0]?.charAt(0) || "") +
                        (nameParts[
                          nameParts.length - 1 > 1 && nameParts.length - 1
                        ]?.charAt(0) ||
                          nameParts[0].charAt(1) ||
                          "");

                      return (
                        <div key={index} className="flex flex-col items-center">
                          <div className="w-16 h-16 bg-gray-200 rounded-full mb-2 flex items-center justify-center shadow-sm">
                            <span className="text-gray-600 uppercase">
                              {avatarText}
                            </span>
                          </div>
                          <span className="text-sm text-center text-gray-700">
                            {obj.name}
                          </span>
                        </div>
                      );
                    }
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;
