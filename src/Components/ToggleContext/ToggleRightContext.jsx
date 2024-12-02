import { createContext, useState } from "react";

export const ToggleRightContext = createContext();

export const ToggleRightProvider = ({ children }) => {
  const [toggleRight, setToggleRight] = useState(true); // Using boolean instead of 1
  
  const toggleSetterRight = () => {
    setToggleRight(prevState => !prevState); // Using prevState for safer state updates
  };
  
  return (
    <ToggleRightContext.Provider value={{ toggleRight, toggleSetterRight }}>
      {children}
    </ToggleRightContext.Provider>
  );
};
