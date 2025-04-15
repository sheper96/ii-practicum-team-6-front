import React from 'react';
import { useUser } from '../components/UserContext';

const Profile = () => {

  const { user } = useUser();

  if (!user) {
    return (
      <div className="flex justify-center items-center min-h-screen text-gray-700">
        <p>Loading user info...</p>
      </div>
    );

  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-b  px-4">
      <div className="w-full max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8">
        <div className="flex flex-col items-center text-center space-y-4">
          <img
            src={user.avatar || 'https://i.pravatar.cc/150?img=47'}
            alt="Profile Avatar"
            className="w-24 h24 rounded-full border-2 border-gray-300 shadow-md"
          />
          <h2 className="text-2xl font-semibold">{user.firstName} {user.lastName}</h2>
          <p className="text-gray-600">{user.email}</p>
          {user.bio && <p className="text-gray-500 text-sm">{user.bio}</p>}
          <button className="mt-4 px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};
export default Profile;
