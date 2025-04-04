import React, { useState, useEffect } from 'react';
import { getAllData } from './util/index';
import Header from './components/Header';





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
    <div>
      <Header />
      <main className="p-6">
        <h1>CodeCrew</h1>
      </main>
    </div>
  );
};

export default App;



