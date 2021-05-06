import React, { useContext } from "react";
import { AppContext } from "../../context/context";
import Loading from "../Loading/Loading";

function ArtisteList() {
  const { loading } = useContext(AppContext);

  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <h2>This is the artiste list</h2>
    </div>
  );
}

export default ArtisteList;
