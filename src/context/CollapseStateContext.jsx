// context/CollapseStateContext.js
import React, { createContext, useContext, useState } from "react";

// Create a context
const CollapseStateContext = createContext();

// Create a provider component
export const CollapseStateProvider = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <CollapseStateContext.Provider value={{ isCollapsed, setIsCollapsed }}>
      {children}
    </CollapseStateContext.Provider>
  );
};

// Custom hook to use the context
const useCollapseState = () => {
  const context = useContext(CollapseStateContext);
  if (!context) {
    throw new Error(
      "useCollapseState must be used within a CollapseStateProvider"
    );
  }
  return context;
};

// eslint-disable-next-line react-refresh/only-export-components
export default useCollapseState;
