import React from "react";
import "./cardContainer.scss";

import Card from "./Card";
import Loader from "../loader/Loader";

const CardContainer = ({ view, catFacts, setCatFacts }) => {
  return (
    <div
      className={`card-container ${
        view === "grid" ? "card-container__grid" : "card-container__list"
      }`}
    >
      {catFacts ? (
        catFacts.map((element, index) => {
          return <Card data={{ details: element, index }} key={element._id} />;
        })
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default CardContainer;
