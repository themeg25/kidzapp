import React, { useState } from "react";

function MathPuzzle({ setGame }) {
  const [question, setQuestion] = useState(generateQuestion());
  const [answer, setAnswer] = useState("");
  const [message, setMessage] = useState("");

  function generateQuestion() {
    const a = Math.floor(Math.random() * 10);
    const b = Math.floor(Math.random() * 10);
    return { a, b, sum: a + b };
  }

  const checkAnswer = () => {
    if (parseInt(answer) === question.sum) {
      setMessage("🎉 Correct!");
      new Audio("/assets/sounds/cat_meow.mp3").play();
      setQuestion(generateQuestion());
      setAnswer("");
    } else {
      setMessage("❌ Try Again!");
    }
  };

  return (
    <div>
      <h2>➕ Math Puzzle Game</h2>
      <p>{question.a} + {question.b} = ?</p>
      <input
        type="number"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
      />
      <button onClick={checkAnswer}>Check</button>
      <p>{message}</p>
      <button onClick={() => setGame("menu")}>Back to Menu</button>
    </div>
  );
}

export default MathPuzzle;
