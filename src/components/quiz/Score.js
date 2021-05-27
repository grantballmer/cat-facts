import React from "react";
import "./score.scss";
import Reward from "react-rewards";

const Score = ({ score, resetPage, rewardRef }) => {
  return (
    <div className="score">
      {score > 3 ? (
        <>
          <h1>Congratulations!!</h1>
          <Reward
            ref={rewardRef}
            type="confetti"
            config={{
              lifetime: 100,
              elementCount: 100,
              spread: 120,
              elementSize: 10,
            }}
          >
            You answered {score * 20}% of the questions correctly.
          </Reward>
        </>
      ) : (
        <>
          <p>
            Sorry, you only answered {score * 20}% of the questions correctly.
          </p>
          <button className="button btn-primary" onClick={resetPage}>
            Try again
          </button>
        </>
      )}
    </div>
  );
};

export default Score;
