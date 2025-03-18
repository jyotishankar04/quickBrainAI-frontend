import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowLeft,
  faCamera,
  faChevronDown,
  faChevronRight,
  faTimes,
  faCheckCircle,
} from '@fortawesome/free-solid-svg-icons';

const SettingsPage = () => {
  
  const [profile, setProfile] = useState({
    name: 'Alexander Mitchell',
    username: 'alex.mitchell',
    gender: 'Male',
    location: 'San Francisco, CA',
    bio: 'Product Designer & Developer with 8+ years of experience in creating user-centric digital solutions.',
  });

  
  const [password, setPassword] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [showSuccessToast, setShowSuccessToast] = useState(false);

  
  const handleInputChange = (field, value) => {
    setProfile((prev) => ({ ...prev, [field]: value }));
  };

  const handlePasswordChange = (field, value) => {
    setPassword((prev) => ({ ...prev, [field]: value }));
  };

  
  const handleSaveProfile = () => {
    setShowSuccessToast(true);
    setTimeout(() => setShowSuccessToast(false), 3000);
  };

  
  const handleUpdatePassword = () => {
    if (password.newPassword === password.confirmPassword) {
      setShowPasswordModal(false);
      setShowSuccessToast(true);
      setTimeout(() => setShowSuccessToast(false), 3000);
      setPassword({
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
      });
    } else {
      alert('New password and confirm password do not match.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        
        <div className="flex justify-between items-center mb-8">
          <button className="text-gray-600 rounded-button whitespace-nowrap cursor-pointer">
            <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
            Back
          </button>
          <h1 className="text-2xl font-semibold">Settings</h1>
          <button
            onClick={handleSaveProfile}
            className="bg-blue-600 text-white px-4 py-2 rounded-button whitespace-nowrap cursor-pointer hover:bg-blue-700"
          >
            Save Changes
          </button>
        </div>

        
        <div className="flex flex-col items-center mb-12">
          <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-200 mb-4">
            <img
              src="https://public.readdy.ai/ai/img_res/7e3f7a161b3217811fcdf9a2cf2bcc55.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <button className="text-blue-600 rounded-button whitespace-nowrap cursor-pointer">
            <FontAwesomeIcon icon={faCamera} className="mr-2" />
            Change Photo
          </button>
        </div>

        
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h2 className="text-xl font-semibold mb-6">Personal Information</h2>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
              <input
                type="text"
                value={profile.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Username</label>
              <input
                type="text"
                value={profile.username}
                onChange={(e) => handleInputChange('username', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
              <select
                value={profile.gender}
                onChange={(e) => handleInputChange('gender', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
              <input
                type="text"
                value={profile.location}
                onChange={(e) => handleInputChange('location', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
              <textarea
                value={profile.bio}
                onChange={(e) => handleInputChange('bio', e.target.value)}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h2 className="text-xl font-semibold mb-6">Security</h2>
          <button
            onClick={() => setShowPasswordModal(true)}
            className="w-full flex justify-between items-center py-3 text-left cursor-pointer hover:bg-gray-50 rounded-button whitespace-nowrap"
          >
            <span>Change Password</span>
            <FontAwesomeIcon icon={faChevronRight} className="text-gray-400" />
          </button>
        </div>

        
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-6">Help & Support</h2>
          <div className="space-y-4">
            <button className="w-full flex justify-between items-center py-3 text-left cursor-pointer hover:bg-gray-50 rounded-button whitespace-nowrap">
              <span>FAQ</span>
              <FontAwesomeIcon icon={faChevronRight} className="text-gray-400" />
            </button>
            <button className="w-full flex justify-between items-center py-3 text-left cursor-pointer hover:bg-gray-50 rounded-button whitespace-nowrap">
              <span>Contact Support</span>
              <FontAwesomeIcon icon={faChevronRight} className="text-gray-400" />
            </button>
            <button className="w-full flex justify-between items-center py-3 text-left cursor-pointer hover:bg-gray-50 rounded-button whitespace-nowrap">
              <span>Help Center</span>
              <FontAwesomeIcon icon={faChevronRight} className="text-gray-400" />
            </button>
          </div>
        </div>
      </div>

      
      {showPasswordModal && (
        <div className="fixed inset-0 bg-gray-500/50  p-8 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold">Change Password</h3>
              <button
                onClick={() => setShowPasswordModal(false)}
                className="text-gray-400 hover:text-gray-600 cursor-pointer"
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Current Password</label>
                <input
                  type="password"
                  value={password.currentPassword}
                  onChange={(e) => handlePasswordChange('currentPassword', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
                <input
                  type="password"
                  value={password.newPassword}
                  onChange={(e) => handlePasswordChange('newPassword', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Confirm New Password</label>
                <input
                  type="password"
                  value={password.confirmPassword}
                  onChange={(e) => handlePasswordChange('confirmPassword', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            <div className="mt-6 flex justify-end space-x-4">
              <button
                onClick={() => setShowPasswordModal(false)}
                className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 rounded-button whitespace-nowrap cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={handleUpdatePassword}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 rounded-button whitespace-nowrap cursor-pointer"
              >
                Update Password
              </button>
            </div>
          </div>
        </div>
      )}

      
      {showSuccessToast && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg">
          <div className="flex items-center">
            <FontAwesomeIcon icon={faCheckCircle} className="mr-2" />
            <span>Changes saved successfully!</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default SettingsPage;