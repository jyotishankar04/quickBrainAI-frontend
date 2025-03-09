// context/ActiveTabContext.js
import React, { createContext, useContext, useState } from "react";

// Create a context
const ActiveTabContext = createContext();

// Create a provider component
export const ActiveTabProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <ActiveTabContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </ActiveTabContext.Provider>
  );
};

// Custom hook to use the context
const useActiveTab = () => {
  const context = useContext(ActiveTabContext);
  if (!context) {
    throw new Error("useActiveTab must be used within an ActiveTabProvider");
  }
  return context;
};

// eslint-disable-next-line react-refresh/only-export-components
export default useActiveTab;
