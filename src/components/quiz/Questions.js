import React from "react";
import "./questions.scss";

const Questions = ({
  questions,
  currentQuestion,
  handleClick,
  correctAnswer,
}) => {
  return (
    <>
      <div className="questions">
        <h2>Question {currentQuestion + 1}</h2>
        <p>{questions[currentQuestion].questionText}</p>
      </div>
      {questions[currentQuestion].answerOptions.map((answerOption, index) => (
        <button
          onClick={(e) => handleClick(e, answerOption.isCorrect)}
          className="btn-answer"
          key={answerOption.answerText + index}
          ref={answerOption.isCorrect ? correctAnswer : null}
          aria-label={`answer number ${index}, ${answerOption.answerText}`}
        >
          <span className="btn-answer__number">{index + 1}) </span>
          {answerOption.answerText}
        </button>
      ))}
    </>
  );
};

export default Questions;
