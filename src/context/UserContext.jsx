import React, { createContext, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import API_AUTH_URL from '../config';

const UserContext = createContext();

export const UserProvider = ({ children }) => {

  // get user from local storage
  const [user, setUser] = useState(() => {
    try {
      const userFromLocalStorage = JSON.parse(localStorage.getItem('user'));
      return userFromLocalStorage || null;
    } catch (err) {
      console.error('Failed to parse user from localStorage:', err);
      localStorage.removeItem('user');
      return null;
    }

  });

  const navigate = useNavigate();

  useEffect(() => {
    const checkSession = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/auth/me`, {
          credentials: 'include',
        });

        if (response.ok) {
          console.log('Active session');
          const body = await response.json();
          // console.log('body:', body);
          const user = body.data.user;
          // console.log('User data:', user);
          setUser(user);
          localStorage.setItem('user', JSON.stringify(user));
        } else {
          console.log('No active session');
          setUser(null);
          localStorage.removeItem('user');
          navigate('/signin');
        }
      } catch (err) {
        setUser(null);
        localStorage.removeItem('user');
      }
    };

    checkSession();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }} >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
