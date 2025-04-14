import React from 'react';

const Profile = () => {
  const user = {
    firstname: "John",
    lastname: "Doe",
    email: "john.doe@example.com",
    avatar: "https://i.pravatar.cc/150?img=47",
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-b  px-4">
      <div className="w-full max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8">
        <div className="flex flex-col items-center text-center space-y-4">
          <img
            src={user.avatar}
            alt="Profile Avatar"
            className="w-24 h24 rounded-full border-2 border-gray-300 shadow-md"
          />
          <h2 className="text-2xl font-semibold">{user.firstname} {user.lastname}</h2>
          <p className="text-gray-600">{user.email}</p>
          <button className="mt-4 px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};
export default Profile;
