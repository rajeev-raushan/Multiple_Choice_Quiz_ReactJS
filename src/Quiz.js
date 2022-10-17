import React, { useState } from "react";
import "./Quiz.css";
import questions from "./data";

const Quiz = () => {
  // Properties
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [currSelection, setcurrSelection] = useState(null);

  // Helper Functions

  const clearColor = ()=>{
    for (const li of document.getElementsByTagName("li")) {
      li.classList.remove("li-selected");
    }
  }

  /* A possible answer was clicked */
  const optionClicked = (e, id) => {
    clearColor();
    e.target.classList.add("li-selected");
    setcurrSelection(id);
  };

  /* Resets the game back to default */
  const restartGame = () => {
    clearColor();
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  const submit = () => {
    clearColor();
    if (currSelection === questions[currentQuestion].solution) {
      setScore(score + 1);
    }
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const next = () => {
    clearColor();
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const prev = () => {
    clearColor();
    if (currentQuestion <= 0) {
      setCurrentQuestion(0);
    } else {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  return (
    <div className="App">
      {/* 1. Header  */}
      <h1>QUIZ</h1>

      {/* 2. Current Score  */}
      {/* <h2>Score: {score}</h2> */}

      {/* 3. Show results or show the question game  */}
      {showResults ? (
        /* 4. Final Results */
        <div className="final-results">
          <h1>Final Results</h1>
          <h2>
            {score} out of {questions.length} correct - (
            {(score / questions.length) * 100}%)
          </h2>
          <button onClick={() => restartGame()}>Restart game</button>
        </div>
      ) : (
        /* 5. Question Card  */
        <div className="question-card">
          {/* Current Question  */}
          <h2>
            Question: {currentQuestion + 1} out of {questions.length}
          </h2>
          <h3 className="question-text">{questions[currentQuestion].text}</h3>

          {/* List of possible answers  */}
          <ul>
            {questions[currentQuestion].options.map((option) => {
              return (
                <li
                  key={option.id}
                  onClick={(e) => optionClicked(e, option.id)}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
          <button onClick={prev}>PREV</button>
          <button onClick={next}>NEXT</button>
          <button onClick={submit}>SUBMIT</button>
        </div>
      )}
    </div>
  );
}

export default Quiz;