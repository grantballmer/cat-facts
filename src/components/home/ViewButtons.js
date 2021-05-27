import React from "react";
import "./viewButtons.scss";

import { ReactComponent as Grid } from "../../assets/icons/grid.svg";
import { ReactComponent as List } from "../../assets/icons/list.svg";

const ViewButtons = ({ view, setView }) => {
  return (
    <div className="view-buttons">
      <button
        className={`button btn-primary ${view === "grid" ? "active" : ""}`}
        onClick={() => setView("grid")}
        aria-label="Enable grid view"
      >
        Grid
        <Grid />
      </button>
      <button
        className={`button btn-primary ${view === "list" ? "active" : ""}`}
        onClick={() => setView("list")}
        aria-label="Enable list view"
      >
        List
        <List />
      </button>
    </div>
  );
};

export default ViewButtons;
