import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getAllData } from './util/index';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import Register from './pages/Register';
import BrowseProjects from './pages/BrowseProjects';
import ProjectDetails from './pages/ProjectDetails';
import CodeCrewLayout from './layouts/CodeCrewLayout';
import ForgotPassword from './pages/ForgotPassword';
import EditProfile from './pages/EditProfile';
import { UserProvider } from './components/UserContext';
import Profile from './pages/Profile';


const API_URL = 'http://localhost:3000/api/auth/';

const App = () => {
const [message, setMessage] = useState('');

  useEffect(() => {
(async () => {
  try{
    const myData = await getAllData(API_URL);
    setMessage(myData.data || 'No data avaialable');
  } catch (err) {
    console.error('Error fetching data:', err.message);
    setMessage('Failed to load data.')
  }
})();


    return () => {
      console.log('unmounting');
    };

  }, []);

  return (
    <UserProvider>
      <CodeCrewLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/projects" element={<BrowseProjects />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/browse-projects" element={<BrowseProjects />} />
          <Route path="/my-profile" element={<Profile />} />
        </Routes>
      </CodeCrewLayout>
    </UserProvider>
  );
};

export default App;



