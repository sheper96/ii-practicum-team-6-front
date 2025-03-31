import React, { useState, useEffect } from 'react';
import { getAllData } from './util/index';
import NavBar from './components/NavBar';



const URL = 'http://localhost:8000/api/v1/';

const App = () => {
  
  const [message, setMessage] = useState(''); 

  useEffect(() => {

    (async () => {
      const myData = await getAllData(URL)
      setMessage(myData.data);
    })();
      
    return () => {
      console.log('unmounting');
    }

  }, []);

  return (
    <>
    <NavBar />
      <h1>{message}</h1>
    </>
  );

}

export default App
