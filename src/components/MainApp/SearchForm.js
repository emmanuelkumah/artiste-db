import React, { useContext } from "react";
import { AppContext } from "../../context/context";

function SearchForm() {
  const result = useContext(AppContext);
  console.log(result);
  return (
    <div>
      <h2>this is the search form {result}</h2>
    </div>
  );
}

export default SearchForm;