import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faCamera,
  faSave,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import {
  useUpdateUserMutation,
  useUserQuery,
} from "../../../lib/query/react-query";
import { extractUsername } from "../../../util/usernameExtract";
import toast from "react-hot-toast";

const SettingsPage = () => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({});
  const [profileImage, setProfileImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const {
    data: user,
    isPending: isUserLoading,
    isSuccess: isUserSuccess,
  } = useUserQuery();
  // Initialize form data when user data is loaded
  const {
    mutateAsync: updateUser,
    isPending: isUpdateLoading,
    isSuccess: isUpdateSuccess,
    isError: isUpdateError,
    error: updateError,
  } = useUpdateUserMutation();
  useEffect(() => {
    if (isUpdateSuccess) {
      toast.success("Profile updated successfully");
      setIsEditing(false);
    }
  }, [isUpdateSuccess]);
  useEffect(() => {
    if (isUpdateError) {
      toast.error(updateError.message);
    }
  }, [isUpdateError, updateError]);
  useEffect(() => {
    if (isUserSuccess && user) {
      setFormData({
        name: user.data.name || "",
        username: user.data.username || "",
        dob: user.data.dob || "",
        gender: user.data.gender || "",
        location: user.data.location || "",
        bio: user.data.bio || "",
        customUrl: user.data.customUrl || "",
        twitterUrl: user.data.twitterUrl || "",
        instagramUrl: user.data.instagramUrl || "",
        linkedinUrl: user.data.linkedinUrl || "",
        githubUrl: user.data.githubUrl || "",
      });
      setPreviewImage(
        user.data.avatarUrl ||
          "https://public.readdy.ai/ai/img_res/7e3f7a161b3217811fcdf9a2cf2bcc55.jpg"
      );
    }
  }, [isUserSuccess, user]);

  // Handle image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle input changes
  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    console.log(formData);
    e.preventDefault();
    try {
      const updatedData = { ...formData };

      // Handle social URLs
      updatedData.customUrl = updatedData.customUrl
        ? `https://${updatedData.customUrl}`
        : "";
      updatedData.twitterUrl = updatedData.twitterUrl
        ? `https://x.com/${updatedData.twitterUrl}`
        : "";
      updatedData.instagramUrl = updatedData.instagramUrl
        ? `https://instagram.com/${updatedData.instagramUrl}`
        : "";
      updatedData.linkedinUrl = updatedData.linkedinUrl
        ? `https://linkedin.com/in/${updatedData.linkedinUrl}`
        : "";
      updatedData.githubUrl = updatedData.githubUrl
        ? `https://github.com/${updatedData.githubUrl}`
        : "";

      // Create FormData if image is being uploaded
      const formDataToSend = new FormData();

      // update the date to correct format
      updatedData.dob = updatedData.dob
        ? new Date(updatedData.dob).toISOString()
        : "";

      for (const key in updatedData) {
        updatedData[key] && formDataToSend.append(key, updatedData[key]);
      }
      if (profileImage) {
        formDataToSend.append("image", profileImage);
      }

      await updateUser(formDataToSend);
      toast.success("Profile updated successfully!");
      setIsEditing(false);
    } catch (error) {
      toast.error(error.message || "Failed to update profile");
    }
  };

  // Toggle edit mode
  const toggleEditMode = () => {
    setIsEditing(!isEditing);
  };

  if (isUserLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <button
            onClick={() => navigate(-1)}
            className="text-gray-600 rounded-button whitespace-nowrap cursor-pointer"
          >
            <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
            Back
          </button>
          <h1 className="text-2xl font-semibold">Settings</h1>
          <div></div>
        </div>

        {isUserSuccess && user && (
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col items-center mb-12">
              <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-200 mb-4 relative">
                <img
                  src={previewImage}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
                {isEditing && (
                  <>
                    <label
                      htmlFor="profile-image"
                      className="absolute bottom-0 right-0 bg-blue-500 text-white p-2 rounded-full cursor-pointer hover:bg-blue-600"
                    >
                      <FontAwesomeIcon icon={faCamera} />
                      <input
                        disabled={isUpdateLoading}
                        id="profile-image"
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleImageChange}
                      />
                    </label>
                  </>
                )}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">Personal Information</h2>
                <button
                  type="button"
                  onClick={isEditing ? handleSubmit : toggleEditMode}
                  className="text-blue-600 rounded-button whitespace-nowrap cursor-pointer"
                >
                  <FontAwesomeIcon
                    icon={isEditing ? faSave : faEdit}
                    className="mr-2"
                  />
                  {isEditing ? (
                    isUpdateLoading ? (
                      <span>
                        {" "}
                        <span className="loading loading-spinner"></span>{" "}
                        Saving...
                      </span>
                    ) : (
                      "Save Changes"
                    )
                  ) : (
                    "Edit Profile"
                  )}
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    disabled={isUpdateLoading}
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    readOnly={!isEditing}
                    className={`w-full px-4 py-2 border ${
                      isEditing
                        ? "border-gray-300"
                        : "border-transparent bg-gray-50"
                    } rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Username
                  </label>
                  <input
                    disabled={isUpdateLoading}
                    type="text"
                    value={formData.username}
                    onChange={(e) =>
                      handleInputChange("username", e.target.value)
                    }
                    readOnly={!isEditing}
                    className={`w-full px-4 py-2 border ${
                      isEditing
                        ? "border-gray-300"
                        : "border-transparent bg-gray-50"
                    } rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Date of Birth
                    </label>
                    <input
                      disabled={isUpdateLoading}
                      type="date"
                      value={formData.dob && formData.dob.split("T")[0]}
                      onChange={(e) => handleInputChange("dob", e.target.value)}
                      readOnly={!isEditing}
                      className={`w-full input  px-4 py-2 border  ${
                        isEditing
                          ? "border-gray-300"
                          : "border-transparent bg-gray-50"
                      } rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Gender
                    </label>
                    <select
                      value={formData.gender}
                      onChange={(e) =>
                        handleInputChange("gender", e.target.value)
                      }
                      disabled={!isEditing || isUpdateLoading}
                      className={`w-full px-4 py-2 border ${
                        isEditing
                          ? "border-gray-300"
                          : "border-transparent bg-gray-50"
                      } rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                    >
                      <option value="" disabled>
                        Select Gender
                      </option>
                      <option value="MALE">Male</option>
                      <option value="FEMALE">Female</option>
                      <option value="OTHER">Other</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Location
                  </label>
                  <input
                    disabled={isUpdateLoading}
                    type="text"
                    value={formData.location}
                    onChange={(e) =>
                      handleInputChange("location", e.target.value)
                    }
                    readOnly={!isEditing}
                    className={`w-full px-4 py-2 border ${
                      isEditing
                        ? "border-gray-300"
                        : "border-transparent bg-gray-50"
                    } rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Bio
                  </label>
                  <textarea
                    disabled={isUpdateLoading}
                    value={formData.bio}
                    onChange={(e) => handleInputChange("bio", e.target.value)}
                    readOnly={!isEditing}
                    rows={4}
                    className={`w-full px-4 py-2 border ${
                      isEditing
                        ? "border-gray-300"
                        : "border-transparent bg-gray-50"
                    } rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Website
                  </label>
                  <div className="flex rounded-md shadow-sm">
                    <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                      https://
                    </span>
                    <input
                      disabled={isUpdateLoading}
                      type="text"
                      value={extractUsername(formData.customUrl)}
                      onChange={(e) =>
                        handleInputChange("customUrl", e.target.value)
                      }
                      readOnly={!isEditing}
                      className={`flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-r-md border ${
                        isEditing
                          ? "border-gray-300"
                          : "border-transparent bg-gray-50"
                      } focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                      placeholder="yourwebsite.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Twitter Username
                  </label>
                  <div className="flex rounded-md shadow-sm">
                    <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                      https://x.com/
                    </span>
                    <input
                      disabled={isUpdateLoading}
                      type="text"
                      value={extractUsername(formData.twitterUrl)}
                      onChange={(e) =>
                        handleInputChange("twitterUrl", e.target.value)
                      }
                      readOnly={!isEditing}
                      className={`flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-r-md border ${
                        isEditing
                          ? "border-gray-300"
                          : "border-transparent bg-gray-50"
                      } focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                      placeholder="yourusername"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Instagram Username
                  </label>
                  <div className="flex rounded-md shadow-sm">
                    <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                      https://instagram.com/
                    </span>
                    <input
                      disabled={isUpdateLoading}
                      type="text"
                      value={extractUsername(formData.instagramUrl)}
                      onChange={(e) =>
                        handleInputChange("instagramUrl", e.target.value)
                      }
                      readOnly={!isEditing}
                      className={`flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-r-md border ${
                        isEditing
                          ? "border-gray-300"
                          : "border-transparent bg-gray-50"
                      } focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                      placeholder="yourusername"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Linkedin Username
                  </label>
                  <div className="flex rounded-md shadow-sm">
                    <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                      https://linkedin.com/in/
                    </span>
                    <input
                      disabled={isUpdateLoading}
                      type="text"
                      value={extractUsername(formData.linkedinUrl)}
                      onChange={(e) =>
                        handleInputChange("linkedinUrl", e.target.value)
                      }
                      readOnly={!isEditing}
                      className={`flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-r-md border ${
                        isEditing
                          ? "border-gray-300"
                          : "border-transparent bg-gray-50"
                      } focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                      placeholder="yourusername"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    GitHub Username
                  </label>
                  <div className="flex rounded-md shadow-sm">
                    <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                      https://github.com/
                    </span>
                    <input
                      disabled={isUpdateLoading}
                      type="text"
                      value={extractUsername(formData.githubUrl)}
                      onChange={(e) =>
                        handleInputChange("githubUrl", e.target.value)
                      }
                      readOnly={!isEditing}
                      className={`flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-r-md border ${
                        isEditing
                          ? "border-gray-300"
                          : "border-transparent bg-gray-50"
                      } focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                      placeholder="yourusername"
                    />
                  </div>
                </div>
              </div>
            </div>

            {isEditing && (
              <div className="flex justify-end gap-4 mb-8">
                <button
                  type="button"
                  onClick={toggleEditMode}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  {isUpdateLoading ? (
                    <div className="flex items-center gap-2">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      <span>Updating...</span>
                    </div>
                  ) : (
                    "Update"
                  )}
                </button>
              </div>
            )}
          </form>
        )}
      </div>
      <div className="max-w-4xl m-auto px-4">
        <div className=" mx-auto px-4 py-8  bg-white  rounded-lg shadow-sm p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Add skills
          </h2>
          <div className="mt-4">
            <h1>Available soon</h1>
          </div>
        </div>
      </div>

      <div className="max-w-4xl m-auto px-4">
        <div className=" mx-auto px-4 py-8  bg-white  rounded-lg shadow-sm p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Reset Password
          </h2>
          <div className="mt-4">
            <h1>Available soon</h1>
          </div>
        </div>
      </div>

      <div className="max-w-4xl m-auto px-4">
        <div className=" mx-auto px-4 py-8  bg-white  rounded-lg shadow-sm p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Delete Account
          </h2>
          <div className="mt-4">
            <h1>Available soon</h1>
          </div>
        </div>
      </div>

      <div className="max-w-4xl m-auto px-4">
        <div className=" mx-auto px-4 py-8  bg-white  rounded-lg shadow-sm p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Help and Support
          </h2>
          <div className="mt-4">
            <h1>Available soon</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
