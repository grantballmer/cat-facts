import React, { useState, useCallback } from "react";
import "./cardContainer.scss";
import Reorder, {
  reorder,
  reorderImmutable,
  reorderFromTo,
  reorderFromToImmutable,
} from "react-reorder";

import Card from "./Card";
import Loader from "../loader/Loader";

const CardContainer = ({ view, catFacts, setCatFacts }) => {
  const OnReorder = useCallback(
    (event, previousIndex, nextIndex, fromId, toId) => {
      console.log("onReorder:", event, previousIndex, nextIndex);
      // if (CONDITIONAL_STATEMENT)
      setCatFacts([...catFacts.move(previousIndex, nextIndex)]);
    },
    [catFacts] // Tells React to memoize regardless of arguments
  );
  return (
    <div
      className={`card-container ${
        view === "grid" ? "card-container__grid" : "card-container__list"
      }`}
    >
      {/* check if catFacts has been set, display cards, else show loader */}
      {catFacts ? (
        <Reorder
          reorderId="research"
          className={"reorder"}
          //   lock="horizontal"
          holdTime={1000}
          component="span"
          mouseHoldTime={100}
          onReorder={OnReorder}
          autoScroll={true}
          disabled={false}
          disableContextMenus={true}
        >
          {catFacts.map((element, index) => {
            return (
              <Card data={{ details: element, index }} key={element._id} />
            );
          })}
        </Reorder>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default CardContainer;

// {catFacts ? (
//   <DndContext onDragEnd={handleDragEnd}>
//     {parent === null ? draggableMarkup : null}

//     {catFacts.map((element, index) => {
//       return (
//         <Droppable>
//           {/* <Card data={{ details: element, index }} key={element._id} /> */}
//           {parent === id ? draggableMarkup : "Drop here"}
//         </Droppable>
//       );
//     })}
//     {!isDropped ? draggableMarkup : null}
//   </DndContext>
// ) : (
//   <Loader />
// )}

// {
//   /* <DndContext onDragEnd={handleDragEnd}>
// {parent === null ? draggableMarkup : null}

// {catFacts.map((element, index) => {
//   return (
//     <Droppable>
//       <Card data={{ details: element, index }} key={element._id} />
//     </Droppable>
//   );
// })}
// {!isDropped ? draggableMarkup : null}
// </DndContext> */
// }

// {/* check if catFacts has been set, display cards, else show loader */}
// {catFacts ? (
//   catFacts.map((element, index) => {
//     return <Card data={{ details: element, index }} key={element._id} />;
//   })
