import React from 'react';
import Select from 'react-select';

const SubmitProject = () => {

  const skillOptions = [
    'React',
    'JavaScript',
    'Python',
    'Node.js',
    'HTML/CSS',
    'Data Science',
    'UI/UX',
    'D3.js',
    'IoT',
    'ML',
    'Embedded',
    'Blockchain',
    'Security',
    'Web3',
    'CTD',
    'Web Dev',
    'Mobile Dev',
    'DevOps',
    'Cloud',
    'Database'
  ];


  return (
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Submit Project</h1>
          <p className="text-gray-600 mt-2">Share your project idea and find teammates to
            collaborate with</p>
        </div>


        <form className="bg-white shadow-sm rounded-lg p-6 border border-gray-200">
          <div className="mb-6">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
              Project Title <span className="text-red-500">*</span>
            </label>
            <input
                type="text"
                id="title"
                name="title"
                className={`w-full px-3 py-2 border  'border-gray-300' rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                placeholder="Enter a clear, descriptive title"
            />
            <p className="mt-1 text-sm text-red-500">Error text </p>
          </div>

          <div className="mb-6">
            <label htmlFor="description"
                   className="block text-sm font-medium text-gray-700 mb-1">
              Project Description <span className="text-red-500">*</span>
            </label>
            <textarea
                id="description"
                name="description"
                rows="6"
                className={`w-full px-3 py-2 border  'border-gray-300' rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                placeholder="Describe your project idea in detail. What problem does it solve? What technologies will you use? What are your goals?"
            ></textarea>
            <p className="mt-1 text-sm text-red-500">Error text </p>

            <p className="mt-1 text-sm text-gray-500">
              1000 characters (minimum 50)
            </p>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Required Skills <span className="text-red-500">*</span>
            </label>
            <Select
                isMulti
                name="skills"
                options={skillOptions.map(skill => ({value: skill, label: skill}))}
                classNamePrefix="select"
                placeholder="Select required skills"

                styles={{
                  control: (baseStyles, state) => ({
                    ...baseStyles,
                    borderColor: state.isFocused ? '#3b82f6' : '#d1d5db',
                    boxShadow: state.isFocused ? '0 0 0 1px #3b82f6' : 'none', '&:hover': {
                      borderColor: state.isFocused ? '#3b82f6' : '#d1d5db'
                    }
                  })
                }}
            />
            <p className="mt-1 text-sm text-red-500">Error text </p>
          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">

            <div>
              <label htmlFor="teamSize"
                     className="block text-sm font-medium text-gray-700 mb-1">
                Preferred Team Size
              </label>
              <select
                  id="teamSize"
                  name="teamSize"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {[2, 3, 4, 5, 6, 7, 8, 9, 10].map((size) => (
                    <option key={size} value={size}>{size} members</option>
                ))}
              </select>
            </div>


            <div>
              <label htmlFor="deadline"
                     className="block text-sm font-medium text-gray-700 mb-1">
                Deadline (optional)
              </label>
              <input
                  type="date"
                  id="deadline"
                  name="deadline"
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>


          <div
              className="flex flex-col sm:flex-row sm:justify-between gap-4 pt-6 border-t border-gray-200">
            <button
                type="button"
                className="px-6 py-2 bg-gray-100 text-gray-800 rounded-md hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              Preview Project
            </button>
            <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Submit Project
            </button>
          </div>
        </form>
      </div>
  );
};

export default SubmitProject;
