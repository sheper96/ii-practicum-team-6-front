import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { getAllData } from './util/index';
import Header from './components/Header';
import Hero from './components/Hero';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import Register from './pages/Register';
import BrowseProjects from './pages/BrowseProjects';
import Layout from './components/Layout';


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
    <>
      {/* <Router> */}
      <Header />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/projects" element={<BrowseProjects />} />
        </Routes>
      </Layout>
    </>
  );
};


export default App;



