import React from "react";
import "./questions.scss";

const Questions = ({
  questions,
  currentQuestion,
  handleClick,
  correctAnswer,
  questionRef,
}) => {
  return (
    <>
      <div className="questions">
        <h2 tabIndex="0" ref={questionRef}>
          Question {currentQuestion + 1}
        </h2>
        <p tabIndex="0">{questions[currentQuestion].questionText}</p>
      </div>
      {questions[currentQuestion].answerOptions.map((answerOption, index) => (
        <button
          onClick={(e) => handleClick(e, answerOption.isCorrect)}
          className="btn-answer"
          key={answerOption.answerText + index}
          ref={answerOption.isCorrect ? correctAnswer : null}
          aria-label={`answer number ${index + 1}, ${answerOption.answerText}`}
        >
          <span className="btn-answer__number">{index + 1}) </span>
          {answerOption.answerText}
        </button>
      ))}
    </>
  );
};

export default Questions;
