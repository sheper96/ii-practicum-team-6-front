import React from 'react';
import { Link } from 'react-router-dom';


const SignIn = () => {
  return (
    <div className="flex justify-center items-center min-h-screen  px-4">
      <div className="w-full max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8">
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <h5 className="text-xl font-medium text-gray-900">Sign in</h5>

          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="name@company.com"
              required
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
          </div>


          <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
              Your Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="......"
              required
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
          </div>

          <div className="flex items-start justify-between">
            <div className="flex items-center">
              <input
                id="remember"
                type="checkbox"
                className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300"
              />
              <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900">
                Remember me
              </label>

            </div>
            <a href="#" className="text-sm text-blue-700 hover:underline">
              Lost Password
            </a>
          </div>

          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Login to your account
          </button>
          <div className="text-sm font-medium text-gray-500">
            Not Registered?{' '}
            <Link to="/register" className="text-blue-700 hover:underline">
              Create Account
              </Link>

          </div>
        </form>
      </div>
    </div>

  );
};

export default SignIn;
