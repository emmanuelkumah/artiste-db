import React, { useContext } from "react";
import { AppContext } from "../../context/context";
import Loading from "../Loading/Loading";
import SingleArtiste from "./SingleArtiste";
import { GiMicrophone } from "react-icons/gi";

function ArtisteList() {
  const { loading, data } = useContext(AppContext);

  console.log("the fetched data is", data);

  if (loading) {
    return <Loading />;
  }
  //display message if data was not fetched
  if (data.length < 1) {
    return (
      <h2 className="section-title">Sorry, no artiste matched your search </h2>
    );
  }
  return (
    <section>
      <h1 className="section-title">
        <span>
          <GiMicrophone />
        </span>
        Your Artist Of the Day
      </h1>
      <div>
        {data.map((item) => {
          return <SingleArtiste key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
}

export default ArtisteList;
