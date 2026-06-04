import React from "react";

function AnimalSounds({ setGame }) {
  const playSound = (sound) => {
    new Audio(`/assets/sounds/${sound}`).play();
  };

  return (
    <div>
      <h2>🐶 Animal Sounds 🐱</h2>
      <img src="/assets/images/dog.png" alt="Dog" onClick={() => playSound("dog_bark.mp3")} />
      <img src="/assets/images/cat.png" alt="Cat" onClick={() => playSound("cat_meow.mp3")} />
      <img src="/assets/images/cow.png" alt="Cow" onClick={() => playSound("cow_moo.mp3")} />
      <img src="/assets/images/lion.png" alt="Lion" onClick={() => playSound("lion_roar.mp3")} />
      <button onClick={() => setGame("menu")}>Back to Menu</button>
    </div>
  );
}

export default AnimalSounds;
