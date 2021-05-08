import React, { useState, useEffect } from "react";
import axios from "axios";

//create the context
const AppContext = React.createContext();

//create a context component
const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [url, setUrl] = useState(
    "https://www.theaudiodb.com/api/v1/json/1/search.php?s=jay-z"
  );
  const [data, setData] = useState([]);

  //fetch Data from DB
  const fetchData = async () => {
    setLoading(true);
    //fetch data base on url
    const result = await axios(url);
    const { artists } = result.data;

    if (artists) {
      setLoading(false);
      const requiredData = artists.map((artist) => {
        //extract the required data from the object
        const {
          idArtist,
          strArtist,
          strLabel,
          intBornYear,
          intFormedYear,
          strStyle,
          strGenre,
          strCountry,
          strArtistThumb,
          strArtistWideThumb,
          strArtistFanart,
          strArtistLogo,
          strBiographyEN,
          strWebsite,
          strFacebook,
          strTwitter,
        } = artist;
        //rename the extracted values to a user-friendly one
        return {
          id: idArtist,
          name: strArtist,
          label: strLabel,
          born: intBornYear,
          formed: intFormedYear,
          country: strCountry,
          image: strArtistWideThumb,
          image2: strArtistFanart,
          image3: strArtistThumb,
          logo: strArtistLogo,
          style: strStyle,
          genre: strGenre,
          bio: strBiographyEN,
          Facebook: strFacebook,
          Twitter: strTwitter,
          Website: strWebsite,
        };
      });
      setLoading(false);
      //update the data state
      setData(requiredData);
    } else {
      setData([]);
      setLoading(false);
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
