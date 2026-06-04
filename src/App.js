import React, { useState } from "react";
import Menu from "./components/Menu";
import AnimalSounds from "./components/AnimalSounds";
import ColorMatch from "./components/ColorMatch";
import MathPuzzle from "./components/MathPuzzle";
import "./styles/app.css";

function App() {
  const [game, setGame] = useState("menu");

  return (
    <div>
      {game === "menu" && <Menu setGame={setGame} />}
      {game === "animal" && <AnimalSounds setGame={setGame} />}
      {game === "color" && <ColorMatch setGame={setGame} />}
      {game === "math" && <MathPuzzle setGame={setGame} />}
    </div>
  );
}

export default App;
