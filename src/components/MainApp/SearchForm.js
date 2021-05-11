import React, { useContext } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { AppContext } from "../../context/context";

function SearchForm() {
  const { query, setQuery, setUrl } = useContext(AppContext);

  //handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    setUrl(`https://www.theaudiodb.com/api/v1/json/1/search.php?s=${query}`);
    //empty the input value
    setQuery("");
  };

  return (
    <section className="search">
      <form className="search-form">
        <div className="search-form-control">
          <label htmlFor="name">Unveil Your Favourite Artiste</label>
          <input
            autoFocus
            type="text"
            id="name"
            placeholder="Enter name of the artiste or band"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          <button className="search-btn" onClick={handleSubmit}>
            <BiSearchAlt2 className="search-btn-icon" /> <span>Search</span>
          </button>
        </div>
      </form>
    </section>
  );
}

export default SearchForm;
