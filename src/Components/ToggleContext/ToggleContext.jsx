import { createContext, useState,useEffect } from "react";

export const ToggleContext = createContext();

export const ToggleProvider = ({ children }) => {
  const [toggle, setToggle] = useState(true); // Using boolean instead of 1
  const toggleSetter = () => {
    setToggle(prevState => !prevState); // Using prevState for safer state updates
  };
  
  return (
    <ToggleContext.Provider value={{ toggle, toggleSetter }}>
      {children}
    </ToggleContext.Provider>
  );
};


