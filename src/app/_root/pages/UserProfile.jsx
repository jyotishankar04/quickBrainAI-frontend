import { React, useEffect } from "react";
import {
  UserSkillData,
  Connections,
  RecentActivities,
} from "../../../constants/app.constants";
import { useUserQuery } from "../../../lib/query/react-query";
import toast from "react-hot-toast";
import { FaRegEnvelope } from "react-icons/fa6";
import { ImEarth } from "react-icons/im";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsGithub, BsInstagram, BsLinkedin, BsTwitterX } from "react-icons/bs";
import { extractUsername } from "../../../util/usernameExtract";
import { Link } from "react-router-dom";
import { isMobile } from "react-device-detect";
import { BiPencil } from "react-icons/bi";

const UserProfilePage = () => {
  const {
    data: userData,
    isLoading: isLoadingUser,
    isError: isUserError,
    error: userError,
    isSuccess: isUserSuccess,
  } = useUserQuery();
  //handle error
  useEffect(() => {
    if (isUserError) {
      toast.error(userError.message);
    }
  }, [isUserError, userError]);
  if (isLoadingUser) {
    return <div>Loading...</div>;
  }
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    toast.custom((t) => (
      <div
        className={`${
          t.visible ? "animate-enter" : "animate-leave"
        } max-w-md w-full bg-blue-500 shadow-lg rounded-lg text-white pointer-events-auto flex `}
      >
        <div className="flex-1 w-0 p-4">
          <div className="flex items-center">
            <div className="flex-shrink-0 pt-0.5">
              {text.includes("instagram") && (
                <BsInstagram className="w-6 h-6 text-white" />
              )}
              {text.includes("github") && (
                <BsGithub className="w-6 h-6 text-white" />
              )}
              {text.includes("x.com") && (
                <BsTwitterX className="w-6 h-6 text-white" />
              )}
              {text.includes("linkedin") && (
                <BsLinkedin className="w-6 h-6 text-white" />
              )}
              {text.includes("https://") &&
                !text.includes("x.com") &&
                !text.includes("linkedin") &&
                !text.includes("github") &&
                !text.includes("instagram") && (
                  <ImEarth className="w-6 h-6 text-white" />
                )}
            </div>
            <div className="ml-3 flex-1">
              <p className="text-md font-medium text-white">
                URL Copied Successfully
              </p>
              <p className="mt-1 text-sm ">{text}</p>
            </div>
          </div>
        </div>
      </div>
    ));
  };
  return (
    isUserSuccess &&
    userData && (
      <div className="max-w-5xl mx-auto w-screen">
        {/* Profile Header */}
        <div className="md:mb-10 md:flex md:items-center md:justify-between">
          <div>
            <h2
              className={`text-xl md:text-2xl ${
                isMobile ? "text-center" : ""
              } font-bold mb-2 `}
            >
              My Profile
            </h2>
            <p className="text-gray-500 hidden">
              Share your profile with others and connect with like-minded
              individuals
            </p>
          </div>
          <div className={`flex gap-3 md:mt-0  ${isMobile ? "" : ""}`}>
            <Link
              to="/app/settings"
              className={`bg-blue-500 hover:bg-blue-600 flex justify-center items-center gap-2 text-white px-4 py-2 rounded-md transition-colors shadow-sm ${
                isMobile ? "w-full mx-4 text-center" : ""
              }`}
            >
              <BiPencil /> Edit Profile
            </Link>
            <button
              disabled
              className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-md transition-colors shadow-sm disabled:opacity-40 hidden disabled:cursor-not-allowed"
            >
              Share Profile
            </button>
          </div>
        </div>

        {/* Profile Container */}
        {isUserSuccess && userData && (
          <div className="bg-white rounded-lg w-full shadow-md p-6 mb-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Left Column */}
            <div className="md:col-span-2 w-full">
              <div className=" flex  flex-col gap-4">
                <div className="w-42 h-42 bg-gray-200 rounded-full border-4 border-white flex items-center justify-center relative overflow-hidden shadow-md">
                  <img
                    src={userData.data.avatarUrl}
                    alt="User Avatar"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1 flex flex-col gap-2">
                  <h1 className="text-3xl font-bold">{userData.data.name}</h1>
                  <p className="text-gray-500">@{userData.data.username}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Left Column */}
                  <div className="md:col-span-2 space-y-8">
                    {/* Bio Section */}
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Bio</h3>
                      <p className="text-gray-600">
                        {userData.data.bio
                          ? userData.data.bio
                          : "No bio provided."}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              {/* Contact Information */}
              <div className="bg-gray-100 p-5 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">
                  Contact Information
                </h3>
                {/* starts here */}
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <FaRegEnvelope className="h-5 w-5 mr-3 text-gray-500" />
                    <span className="text-gray-700">{userData.data.email}</span>
                  </li>
                  <li className="flex items-center">
                    <FaMapMarkerAlt className="h-5 w-5 mr-3 text-gray-500" />
                    <span className="text-gray-700">
                      {userData.data.location || "N/A"}
                    </span>
                  </li>
                </ul>
              </div>
              {/* Ends here */}

              {/* Connected Accounts */}
              <div className="bg-gray-100 p-5 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Social Accounts</h3>
                <ul className="space-y-3">
                  {extractUsername(userData.data.linkedinUrl) && (
                    <li
                      data-tip="Click to copy"
                      className="flex tooltip items-center mt-4 w-full cursor-pointer"
                      onClick={() =>
                        copyToClipboard(userData.data.instagramUrl)
                      }
                    >
                      <BsInstagram className="h-5 w-5 text-gray-500 " />
                      <div className="flex-1  ml-3">
                        <span className="text-gray-700">
                          instagram.com/
                          {extractUsername(userData.data.instagramUrl)}
                        </span>
                      </div>
                    </li>
                  )}

                  {extractUsername(userData.data.instagramUrl) && (
                    <li
                      data-tip="Click to copy"
                      className="flex tooltip items-center mt-4 w-full cursor-pointer"
                      onClick={() => copyToClipboard(userData.data.githubUrl)}
                    >
                      <BsGithub className="h-5 w-5 text-gray-500 " />
                      <div className="flex-1  ml-3">
                        <span className="text-gray-700">
                          github.com/{extractUsername(userData.data.githubUrl)}
                        </span>
                      </div>
                    </li>
                  )}
                  {extractUsername(userData.data.githubUrl) && (
                    <li
                      data-tip="Click to copy"
                      className="flex tooltip items-center mt-4 w-full cursor-pointer"
                      onClick={() => copyToClipboard(userData.data.twitterUrl)}
                    >
                      <BsTwitterX className="h-5 w-5 text-gray-500 " />
                      <div className="flex-1  ml-3">
                        <span className="text-gray-700">
                          x.com/{extractUsername(userData.data.twitterUrl)}
                        </span>
                      </div>
                    </li>
                  )}
                  {extractUsername(userData.data.twitterUrl) && (
                    <li
                      data-tip="Click to copy"
                      className="flex tooltip items-center mt-4 w-full cursor-pointer"
                      onClick={() => copyToClipboard(userData.data.linkedinUrl)}
                    >
                      <BsLinkedin className="h-5 w-5 text-gray-500 " />
                      <div className="flex-1  ml-3">
                        <span className="text-gray-700">
                          linkedin.com/in/
                          {extractUsername(userData.data.linkedinUrl)}
                        </span>
                      </div>
                    </li>
                  )}

                  {extractUsername(userData.data.linkedinUrl) && (
                    <li
                      data-tip="Click to copy"
                      className="flex tooltip items-center mt-4 w-full cursor-pointer"
                      onClick={() => copyToClipboard(userData.data.customUrl)}
                    >
                      <ImEarth className="h-5 w-5 text-gray-500 " />
                      <div className="flex-1  ml-3">
                        <span className="text-gray-700">
                          {extractUsername(userData.data.customUrl)}
                        </span>
                      </div>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  );
};

export default UserProfilePage;

//  Skills Section
// <div className="flex flex-col">
//   <h3 className="text-xl font-semibold mb-4">Skills</h3>

//   <div className="flex flex-wrap gap-2">
//     {UserSkillData.map((skill, index) => (
//       <span
//         key={index}
//         className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
//       >
//         {skill.title}
//       </span>
//     ))}
//   </div>
// </div>
