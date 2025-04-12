import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getAllData } from './util/index';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import Register from './pages/Register';
import BrowseProjects from './pages/BrowseProjects';
import CodeCrewLayout from './layouts/CodeCrewLayout';
import ForgotPassword from './pages/ForgotPassword';


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
    <CodeCrewLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/projects" element={<BrowseProjects />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </CodeCrewLayout>
  );
};

export default App;



