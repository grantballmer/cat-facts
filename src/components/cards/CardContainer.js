import React from "react";
import "./cardContainer.scss";
import { Draggable } from "react-drag-reorder";

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
        <Draggable>
          {catFacts.map((element, index) => {
            return (
              <Card data={{ details: element, index }} key={element._id} />
            );
          })}
        </Draggable>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default CardContainer;
