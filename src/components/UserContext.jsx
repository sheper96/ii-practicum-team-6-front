import React, {createContext, useState, useContext} from "react";
import { useNavigate } from "react-router-dom";

const UserContext = createContext();

export const UserProvider = ({ children}) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  return (
    <UserContext.Provider value={{ user, setUser}} >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
