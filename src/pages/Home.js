import React, { useEffect, useState } from "react";
import "./home.scss";
import { Link } from "react-router-dom";
import axios from "axios";

import Loader from "../components/home/Loader";
import Card from "../components/cards/Card";
import ViewButtons from "../components/home/ViewButtons";
import { ReactComponent as QuestionBubble } from "../assets/icons/question-bubble.svg";

const Home = () => {
  const [catFacts, setCatFacts] = useState(null);
  const [view, setView] = useState("grid");

  useEffect(() => {
    const url = "https://cat-fact.herokuapp.com/facts";

    async function getData() {
      const results = await axios.get(url);

      setCatFacts([...results.data]);
    }

    getData();
  }, []);

  return (
    <section
      className={`card-container max-width ${
        view === "grid" ? "card-container__grid" : "card-container__list"
      }`}
    >
      {/* If catFacts has been set, display cards, else show loader */}
      {catFacts ? (
        catFacts.map((element, index) => {
          return <Card data={{ details: element, index }} key={element._id} />;
        })
      ) : (
        <Loader />
      )}

      <ViewButtons view={view} setView={setView} />

      <Link to="/quiz" className="button btn-primary btn-quiz-link">
        Take Quiz
        <QuestionBubble />
      </Link>
    </section>
  );
};

export default Home;
