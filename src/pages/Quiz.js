import React, { useEffect, useState, useRef } from "react";
import "./quiz.scss";

import Reward from "react-rewards";

const Quiz = () => {
  const questions = [
    {
      questionText: "Which of the following has a recording of a cat meowing?",
      answerOptions: [
        { answerText: "McDonald's", isCorrect: false },
        { answerText: "Voyager II", isCorrect: false },
        { answerText: "Wikipedia", isCorrect: true },
        { answerText: "The New York Knicks", isCorrect: false },
      ],
    },
    {
      questionText:
        "When cats grimace, they are usually ___________. They have an extra organ that, with some breathing control, allows the cats to ___________ ",
      answerOptions: [
        { answerText: "curious, attack anything near by.", isCorrect: false },
        { answerText: "happy, take a long nap", isCorrect: false },
        { answerText: "angry, fly through the air", isCorrect: false },
        { answerText: "taste-scenting, taste-sense the air", isCorrect: true },
      ],
    },
    {
      questionText:
        "Cats make more than ___________ different sounds whereas dogs make around 10.",
      answerOptions: [
        { answerText: "32", isCorrect: false },
        { answerText: "20", isCorrect: false },
        { answerText: "100", isCorrect: true },
        { answerText: "10,000", isCorrect: false },
      ],
    },
    {
      questionText:
        "Most cats are lactose intolerant, and milk can cause painful stomach cramps and diarrhea. It's best to forego the milk and just give your cat the standard: clean, cool ___________.",
      answerOptions: [
        { answerText: "Red Bull", isCorrect: false },
        { answerText: "drinking water", isCorrect: true },
        { answerText: "beer", isCorrect: false },
        { answerText: "Gatorade", isCorrect: false },
      ],
    },
    {
      questionText:
        "Owning a cat can reduce the risk of ___________ by a third.",
      answerOptions: [
        { answerText: "stroke and heart attack", isCorrect: true },
        { answerText: "dying alone", isCorrect: false },
        { answerText: "being attacked by a bear", isCorrect: false },
        { answerText: "gaining weight", isCorrect: false },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [answerChosen, setAnswerChosen] = useState(false);
  const correctAnswer = useRef(null);
  const rewardRef = useRef();

  const handleClick = (e, isCorrect) => {
    // Check if an answer has already been clicked, to prevent multiple selections
    if (!answerChosen) {
      if (isCorrect) {
        e.target.classList.add("correct");
        setScore(score + 1);
      } else {
        correctAnswer.current.classList.add("correct");
        e.target.classList.add("incorrect");
      }

      // Set answerChosen to true to prevent multiple selections
      setAnswerChosen(true);

      // Pause between answering and next question being displayed
      setTimeout(function () {
        const nextQuestion = currentQuestion + 1;

        if (nextQuestion < questions.length) {
          setCurrentQuestion(nextQuestion);
          setAnswerChosen(false);
        } else {
          setShowScore(true);
          console.log(score);
          if (score > 3) {
            rewardRef.current.rewardMe();
          }
        }
      }, 1200);
    }
  };

  const resetPage = () => {
    setCurrentQuestion(0);
    setShowScore(false);
    setScore(0);
    setAnswerChosen(false);
  };

  return (
    <section className="quiz-container max-width">
      {showScore ? (
        <div className="score-section">
          {score > 3 ? (
            <>
              <h1>Congratulations!!</h1>
              <Reward
                ref={rewardRef}
                type="confetti"
                config={{
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
                Sorry, you only answered {score * 20}% of the questions
                correctly.
              </p>
              <button className="button btn-primary" onClick={resetPage}>
                Try again
              </button>
            </>
          )}
        </div>
      ) : (
        <>
          <div className="questions">
            <h2>Question {currentQuestion + 1}</h2>
            <p>{questions[currentQuestion].questionText}</p>
          </div>
          {questions[currentQuestion].answerOptions.map(
            (answerOption, index) => (
              <button
                onClick={(e) => handleClick(e, answerOption.isCorrect)}
                className="btn-answer"
                key={answerOption.answerText + index}
                ref={answerOption.isCorrect ? correctAnswer : null}
                ariaLabel={`answer number ${index}, ${answerOption.answerText}`}
              >
                <span className="btn-answer__number">{index + 1}) </span>
                {answerOption.answerText}
              </button>
            )
          )}
        </>
      )}
    </section>
  );
};

export default Quiz;
