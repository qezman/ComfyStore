import React, { createContext, useContext, useState } from "react";

const ToggleBackgroundContext = createContext();

// Custom hook to use the context
export const useToggleBackground = () => useContext(ToggleBackgroundContext);

export const ToggleBackgroundProvider = ({ children }) => {
  const [toggleBackground, setToggleBackground] = useState(false);

  const handleToggleBackground = () => {
    setToggleBackground((prev) => !prev);
  };

  return (
    <ToggleBackgroundContext.Provider
      value={{ toggleBackground, handleToggleBackground }}
    >
      {children}
    </ToggleBackgroundContext.Provider>
  );
};
