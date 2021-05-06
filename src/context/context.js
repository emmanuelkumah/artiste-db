import React from "react";

//create the context
const AppContext = React.createContext();

//create a context component
const AppProvider = ({ children }) => {
  return <AppContext.Provider value="Ama">{children}</AppContext.Provider>;
};

export { AppProvider, AppContext };
