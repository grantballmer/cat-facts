import React, { useEffect, useState } from "react";
import "./home.scss";
import { Link } from "react-router-dom";

import ViewButtons from "../components/home/ViewButtons";
import CardContainer from "../components/cards/CardContainer";
import { ReactComponent as QuestionBubble } from "../assets/icons/question-bubble.svg";

const Home = () => {
  const [view, setView] = useState("grid");

  return (
    <section className="max-width">
      <div className="intro-text">
        <h1>Cat Facts</h1>
        <p>Below is a list of 5 facts about cats</p>
        <p>
          Feel free to drag and reorder the items, as well as switch between the
          grid and list view using the buttons below
        </p>
      </div>

      <CardContainer view={view} />

      <ViewButtons view={view} setView={setView} />

      <Link to="/quiz" className="button btn-primary btn-quiz-link">
        Take Quiz
        <QuestionBubble />
      </Link>
    </section>
  );
};

export default Home;
