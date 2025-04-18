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
import Profile from './pages/Profile';
import { UserProvider } from './components/UserContext';
import EditProfile from './pages/EditProfile';
import UserProfile from './pages/UserProfile';


const URL = 'http://localhost:8000/api/v1/';

const App = () => {

  const [message, setMessage] = useState('');

  useEffect(() => {

    (async () => {
      const myData = await getAllData(URL);
      setMessage(myData.data);
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
          <Route path="/profile" element={<Profile />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/browse-projects" element={<BrowseProjects />} />
          <Route path="/my-profile" element={<UserProfile/>} />
        </Routes>
      </CodeCrewLayout>
    </UserProvider>
  );
};

export default App;



