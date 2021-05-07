import React, { useContext } from "react";
import { AppContext } from "../../context/context";
import Loading from "../Loading/Loading";

function ArtisteList() {
  const { loading, data } = useContext(AppContext);

  console.log("the fetched data is", data);

  if (loading) {
    return <Loading />;
  }
  //display message if data was not fetched
  if (data.length < 1) {
    return (
      <h2 className="section-title">Sorry, no cocktail matched your search </h2>
    );
  }
  return (
    <div>
      <h2>This is the artiste list</h2>
    </div>
  );
}

export default ArtisteList;
