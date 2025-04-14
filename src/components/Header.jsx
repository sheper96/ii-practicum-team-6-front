import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../image/Code.png';
import { useUser } from '../components/UserContext';
import { useNavigate } from 'react-router-dom';




const Header = () => {
  const { user, setUser } = useUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    //clear user state
    setUser(null);
    navigate('/signin');
  };


  return (
    <header className="w-full px-6 py-4 flex justify-between items-center border-b border-gray-300 bg-white">

      {/* Logo */}
      <div className="flex items-center space-x-2">
        <Link to="/">
          <img src={logo} alt="CodeCrew Logo" className="w-8 h-8" />
        </Link>
        <Link to="/" className="text-2xl font-bold">CodeCrew</Link>
      </div>

      {/* Nav */}
      <nav className="flex items-center gap-4">
        {!user ? (
          <>
 <Link to="/signin" className="px-4 py-2 border rounded-md text-gray-700 hover:bg-gray-100">
          Sign in
        </Link>
        <Link to="/register" className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800">
          Register
        </Link>
        </>
        ):(
          <div className="relative">
            <button className="flex items-center space-x-2">
              <img
              src={user.avatar || "default-avatar.png"}
              alt="User Avatar"
              className="w-8 h-8 rounded-full"
              />
              <span className="ml-2">{user.username}</span>
            </button>
            <div className="absolute right-0 mt-2 w-48 bg-white shadow rounded-md">
              <Link to="/profile" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">My Profile</Link>
              <Link to="/projects" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">My Projects</Link>
              <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">
                Logout
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
