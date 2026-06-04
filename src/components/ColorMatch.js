import React, { useState } from "react";

function ColorMatch({ setGame }) {
  const [message, setMessage] = useState("");

  const allowDrop = (e) => e.preventDefault();
  const drag = (e, color) => e.dataTransfer.setData("color", color);
  const drop = (e, targetColor) => {
    e.preventDefault();
    const draggedColor = e.dataTransfer.getData("color");
    if (draggedColor === targetColor) {
      setMessage("🎉 Correct Match!");
      new Audio("/assets/sounds/dog_bark.mp3").play();
    } else {
      setMessage("❌ Try Again!");
    }
  };

  return (
    <div>
      <h2>🎨 Color Match Game</h2>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          draggable
          onDragStart={(e) => drag(e, "red")}
          style={{ backgroundColor: "red", width: 100, height: 100, margin: 20 }}
        ></div>
        <div
          draggable
          onDragStart={(e) => drag(e, "blue")}
          style={{ backgroundColor: "blue", width: 100, height: 100, margin: 20 }}
        ></div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          onDrop={(e) => drop(e, "red")}
          onDragOver={allowDrop}
          style={{ border: "2px dashed red", width: 100, height: 100, margin: 20 }}
        ></div>
        <div
          onDrop={(e) => drop(e, "blue")}
          onDragOver={allowDrop}
          style={{ border: "2px dashed blue", width: 100, height: 100, margin: 20 }}
        ></div>
      </div>
      <p>{message}</p>
      <button onClick={() => setGame("menu")}>Back to Menu</button>
    </div>
  );
}

export default ColorMatch;
