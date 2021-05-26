import React, { useState } from "react";
import "./quiz.scss";

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
        { answerText: "Gatorade", isCorrect: true },
      ],
    },
    {
      questionText:
        "Owning a cat can reduce the risk of ___________ by a third.",
      answerOptions: [
        { answerText: "stroke and heart attack", isCorrect: true },
        { answerText: "dying alone", isCorrect: false },
        { answerText: "being attacked by a bear", isCorrect: false },
        { answerText: "gaining weight", isCorrect: true },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    console.log(questions[currentQuestion]);

    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
    <section className="quiz-container max-width">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <>
          <div className="questions">
            <p>Question {currentQuestion + 1}</p>
            {questions[currentQuestion].questionText}
          </div>
          {questions[currentQuestion].answerOptions.map(
            (answerOption, index) => (
              <button
                onClick={() => handleClick(answerOption.isCorrect)}
                className="answer-button"
                key={answerOption.answerText + index}
              >
                <span className="answer-button__number">{index + 1}) </span>
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
