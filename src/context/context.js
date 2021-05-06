import React, { useState, useEffect } from "react";
import axios from "axios";

//create the context
const AppContext = React.createContext();
//api url
const url = "https://www.theaudiodb.com/api/v1/json/1/search.php?s=";
//create a context component
const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("coldpay");
  const [artistes, setArtistes] = useState([]);

  //fetch Data from DB
  const fetchData = async () => {
    setLoading(true);
    const result = await axios(`${url}${searchTerm}`);
    console.log(result.data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  //
  return (
    <AppContext.Provider
      value={{ loading, searchTerm, artistes, setSearchTerm }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
