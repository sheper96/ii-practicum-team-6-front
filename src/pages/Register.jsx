import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import codeCrewAPI from '../config';
import { HiEye, HiEyeOff } from 'react-icons/hi';


const Register = () => {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const { setUser } = useUser();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Invalid email address");
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters long");
      return;
    }
    if (password.length > 15) {
      setError("Password must be less than or equal to 15 characters long");
      return;
    }

    try {
      const response = await codeCrewAPI.register({
        username,
        email,
        password,
        confirmPassword,
      });

      const { data } = response;
      const user = data.data.user;


      setUser(user);
      localStorage.setItem('user', JSON.stringify(user));

      navigate('/');
    } catch (err) {
      //setError(err.message);
      console.log(err.response?.data); // Log full error
      setError(err.response?.data?.message || "Registration failed");
    }
  };



  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-b  px-4">
      <div className="w-full max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <h5 className="text-2xl font-medium text-gray-900 text-center">Create an account</h5>


          <div>
            <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900">
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Your username"
              required
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />

          </div>

          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder=""
              required
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
          </div>

          <div className="relative">
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
              Password
            </label>
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="......."
              required
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
            <div
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 cursor-pointer"
              style={{ top: '50%' }}
            >
              {showPassword ? <HiEyeOff className="text-gray-500" /> : <HiEye className="text-gray-500" />}
            </div>
          </div>



          <div className="relative">
            <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-gray-900">
              Confirm Password
            </label>
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              name="confirmPassword"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="......."
              required
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />

            <div
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute top-3 right-3 cursor-pointer"
              style={{ top: '50%' }}
            >
              {showConfirmPassword ? <HiEyeOff className="text-gray-500" /> : <HiEye className="text-gray-500" />}
            </div>
          </div>

          {error && (
            <div className="text-red-500 text-sm text-center">{error}</div>
          )}


          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Register
          </button>

          <div className="text-sm fonr-medium text-gray-500">
            Already have an account?{' '}
            <Link to="/signin" className="text-blue-700 hover:underline">
              Sign in
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
