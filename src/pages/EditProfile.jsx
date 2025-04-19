import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const EditProfile = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    about: '',
    skills: '',
    firstName: '',
    lastName: '',
    email: '',
    country: 'United States',
    streetAddress: '',
    city: '',
    region: '',
    postalCode: '',
    photo: null, // for the profile photo
    coverPhoto: null, // for the cover photo
  });




  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e, field) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      [field]: file,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);


    navigate('/my-profile');
  };

  return (
    <div className="max-w-4xl mx-auto px-6">
      <form onSubmit={handleSubmit}>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold text-gray-900">Profile</h2>
            <p className="mt-1 text-sm text-gray-600">Complete your profile to get matched with the right projects.</p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label htmlFor="username" className="block text-sm font-medium text-gray-900">Username</label>
                <div className="mt-2">
                  <div className="flex items-center rounded-md bg-white pl-3 outline-1 outline-gray-300 focus-within:outline-2 focus-within:outline-indigo-600">
                    <div className="shrink-0 text-base text-gray-500 select-none sm:text-sm">workcation.com/</div>
                    <input
                      type="text"
                      name="username"
                      id="username"
                      className="block w-full py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm"
                      placeholder="janesmith"
                      value={formData.username}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              {/* First and Last Name Fields */}
              <div className="sm:col-span-3">
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-900">First name</label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-900">Last name</label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Email and Country Fields */}
              <div className="sm:col-span-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-900">Email address</label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="country" className="block text-sm font-medium text-gray-900">Country</label>
                <div className="mt-2">
                  <select
                    id="country"
                    name="country"
                    className="w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                    value={formData.country}
                    onChange={handleChange}
                  >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* About Section */}
          <div className="col-span-full">
            <label htmlFor="about" className="block text-sm font-medium text-gray-900">About</label>
            <div className="mt-2">
              <textarea
                name="about"
                id="about"
                rows="3"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                value={formData.about}
                onChange={handleChange}
              />
            </div>
            <p className="mt-3 text-sm text-gray-600">Write a few sentences about yourself.</p>
          </div>

          {/* Skills Section */}
          <div className="col-span-full">
            <label htmlFor="skills" className="block text-sm font-medium text-gray-900">Skills</label>
            <div className="mt-2">
              <textarea
                name="skills"
                id="skills"
                rows="3"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                value={formData.skills}
                onChange={handleChange}
              />
            </div>
            <p className="mt-3 text-sm text-gray-600">Impress your teammates with your skills.</p>
          </div>

          {/* Profile Photo */}
          <div className="col-span-full">
            <label htmlFor="photo" className="block text-sm font-medium text-gray-900">Profile Photo</label>
            <div className="mt-2 flex items-center gap-x-3">
              <input
                type="file"
                id="photo"
                name="photo"
                accept="image/*"
                onChange={(e) => handleFileChange(e, 'photo')}
              />
              {formData.photo && <span>{formData.photo.name}</span>}
            </div>
          </div>

          {/* Cover Photo */}
          <div className="col-span-full">
            <label htmlFor="coverPhoto" className="block text-sm font-medium text-gray-900">Cover Photo</label>
            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
              <div className="text-center">
                <input
                  type="file"
                  id="coverPhoto"
                  name="coverPhoto"
                  accept="image/*"
                  onChange={(e) => handleFileChange(e, 'coverPhoto')}
                />
                {formData.coverPhoto && <span>{formData.coverPhoto.name}</span>}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-end gap-x-6">
          <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white">Save</button>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
