import React from "react";

function Menu({ setGame }) {
  return (
    <div>
      <h1>🎉 Kids Fun World 🎉</h1>
      <button onClick={() => setGame("animal")}>Animal Sounds</button>
      <button onClick={() => setGame("color")}>Color Match</button>
      <button onClick={() => setGame("math")}>Math Puzzle</button>
    </div>
  );
}

export default Menu;
