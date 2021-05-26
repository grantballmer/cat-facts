import React, { useEffect, useState } from "react";
import "./cardContainer.scss";
import axios from "axios";
// import { DndContext } from "@dnd-kit/core";

// import { Droppable } from "./Droppable";
// import { Draggable } from "./Draggable";
import Card from "./Card";
import Loader from "../loader/Loader";

const CardContainer = ({ view }) => {
  const [catFacts, setCatFacts] = useState(null);
  const [error, setError] = useState(null);
  // const [isDropped, setIsDropped] = useState(false);
  // const containers = ["A", "B", "C"];
  // const [parent, setParent] = useState(null);
  // const draggableMarkup = <Draggable id="draggable">Drag me</Draggable>;

  useEffect(() => {
    // const url = "https://cat-fact.herokuapp.com/facts";
    const url =
      "https://api.github.com/repos/grantballmer/cat-facts/contents/package-lock.json?ref=master";

    async function getData() {
      try {
        const results = await axios.get(url);
        console.log(results);

        // setCatFacts([...results.data]);
      } catch {
        setError(
          "There was an issue returning the results. Try reloading the page."
        );
      }
    }

    getData();
  }, []);

  // function handleDragEnd(event) {
  //   const { over } = event;

  //   // If the item is dropped over a container, set it as the parent
  //   // otherwise reset the parent to `null`
  //   setParent(over ? over.id : null);
  // }
  return (
    <div
      className={`card-container ${
        view === "grid" ? "card-container__grid" : "card-container__list"
      }`}
    >
      {/* If catFacts has been set, display cards, else show loader */}
      {catFacts ? (
        catFacts.map((element, index) => {
          return <Card data={{ details: element, index }} key={element._id} />;
        })
      ) : error ? (
        <p>{error}</p>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default CardContainer;

{
  /* <DndContext onDragEnd={handleDragEnd}>
{parent === null ? draggableMarkup : null}

{catFacts.map((element, index) => {
  return (
    <Droppable>
      <Card data={{ details: element, index }} key={element._id} />
    </Droppable>
  );
})}
{!isDropped ? draggableMarkup : null}
</DndContext> */
}
