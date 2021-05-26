import React, { useEffect, useState } from "react";
import "./home.scss";
import { Link } from "react-router-dom";
import axios from "axios";

import ViewButtons from "../components/home/ViewButtons";
import CardContainer from "../components/cards/CardContainer";
import { ReactComponent as QuestionBubble } from "../assets/icons/question-bubble.svg";

const Home = () => {
  const [view, setView] = useState("grid");
  const [catFacts, setCatFacts] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // const url = "https://cat-fact.herokuapp.com/facts";
    const url =
      "https://api.github.com/repos/grantballmer/cat-facts/contents/cat-facts.json";

    async function getData() {
      try {
        const results = await axios.get(url);
        const decodedString = atob(results.data.content);
        const resultsArr = JSON.parse(decodedString);

        setCatFacts([...resultsArr]);

        // setCatFacts([...results.data]);
      } catch {
        setError(
          "There was an issue returning the results. Try reloading the page."
        );
      }
    }

    getData();
  }, []);

  return (
    <section className="max-width">
      {error ? (
        <p>{error}</p>
      ) : (
        <>
          <div className="intro-text">
            <h1>Cat Facts</h1>
            <p>Below is a list of 5 facts about cats</p>
            <p>
              Feel free to drag and reorder the items, as well as switch between
              the grid and list view using the buttons below
            </p>
          </div>

          <CardContainer view={view} catFacts={catFacts} />

          <ViewButtons view={view} setView={setView} />
        </>
      )}

      <Link to="/quiz" className="button btn-primary btn-quiz-link">
        Take Quiz
        <QuestionBubble />
      </Link>
    </section>
  );
};

export default Home;
