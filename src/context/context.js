import React, { useState, useEffect } from "react";
import axios from "axios";

//create the context
const AppContext = React.createContext();
//api url

//create a context component
const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("coldpay");
  const [url, setUrl] = useState(
    "https://www.theaudiodb.com/api/v1/json/1/search.php?s=coldplay"
  );
  const [data, setData] = useState([]);

  //fetch Data from DB
  const fetchData = async () => {
    setLoading(true);
    const result = await axios(url);
    const { artists } = result.data;
    // console.log("the required data is", artists);

    // setData(result.data.artists);
    // setLoading(false);
    if (artists) {
      setLoading(false);
      const requiredData = artists.map((artist) => {
        //extract the required data
        const {
          idArtist,
          strArtist,
          strLabel,
          intBornYear,
          strStyle,
          strArtistWideThumb,
          strArtistFanart,
          strArtistLogo,
        } = artist;
        //rename the extracted values
        return {
          id: idArtist,
          name: strArtist,
          label: strLabel,
          year: intBornYear,
          image: strArtistWideThumb,
          image2: strArtistFanart,
          logo: strArtistLogo,
          style: strStyle,
        };
      });
      setLoading(false);
      //update the data
      setData(requiredData);
    } else {
    }
  };
  //fetch data when url value changes
  useEffect(() => {
    fetchData();
  }, [url]);
  //
  return (
    <AppContext.Provider
      value={{ loading, query, setQuery, url, setUrl, data }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
