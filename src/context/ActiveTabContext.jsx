import React, { createContext, useContext, useState } from "react";

const ActiveTabContext = createContext(null);

export const ActiveTabProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <ActiveTabContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </ActiveTabContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useActiveTab = () => {
  const context = useContext(ActiveTabContext);
  if (!context) {
    throw new Error("useActiveTab must be used within an ActiveTabProvider");
  }
  return context;
};
