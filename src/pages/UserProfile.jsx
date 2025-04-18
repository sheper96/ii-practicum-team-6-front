import React from "react";
import { useUser } from '../components/UserContext';


const UserProfile = () => {
  const { user } = useUser();

  if (!user) return null;

  const {
    username,
    firstName,
    lastName,
    email,
    country,
    bio,
    skills = [],
    photo,
    coverPhoto,
  } = user;

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">

          <div className="md:col-span-1">
            <div className="bg-blue-100 shadow rounded-lg p-6 mb-6">

              <div className="flex flex-col items-center">
                <img
                  src={photo || 'https://randomuser.me/api/portraits/men/94.jpg'}  // Default if no photo is provided
                  className="w-32 h-32 bg-gray-300 rounded-full mb-4"
                  alt="Profile"
                />
                <h1 className="text-xl font-bold">{firstName} {lastName}</h1>
                <p className="text-gray-700">@{username}</p>
              </div>


              <div className="mt-6">
                <p className="font-semibold">Email</p>
                <p className="text-gray-700">{email}</p>
              </div>

              <div className="mt-4">
                <p className="font-semibold">Country</p>
                <p className="text-gray-700">{country}</p>
              </div>
            </div>
          </div>


          <div className="md:col-span-2">
            <div className="bg-blue-100 shadow rounded-lg p-6 mb-6">
              <h2 className="text-xl font-bold mb-4">About Me</h2>
              <p className="text-gray-700 whitespace-pre-wrap">{bio}</p>


              <h3 className="text-xl font-bold mt-6">Skills</h3>
              <ul className="list-disc pl-6">
                {skills.map((skill, index) => (
                  <li key={index} className="text-gray-700">{skill}</li>
                ))}
              </ul>
            </div>


            {coverPhoto && (
              <div className="mt-6">
                <h3 className="text-xl font-bold">Cover Photo</h3>
                <img
                  src={URL.createObjectURL(coverPhoto)}  // Display the cover photo if available
                  alt="Cover"
                  className="w-full h-48 object-cover rounded-lg mt-4"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
