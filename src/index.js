import { animals } from "./animals";
import React from "react";
import ReactDOM from "react-dom";

const background = (
  <img src="/files/images/FarmFactsMap.jpg" className="background" alt="Farm" />
);

const images = [];

for (const animal in animals) {
  images.push(
    <img
      key={animal}
      className="animal"
      alt={animal}
      src={animals[animal].image}
      aria-label={animal}
      role="button"
      onClick={wrapperFunction}
    />
  );
}

const animalFacts = (
  <div>
    <h1 className="title">
      Fun Farm Facts
    </h1>
    {background}
    <div className="animals">
      {images}
    </div>
    <p id="fact"></p>
  </div>
);

function displayFact(e) {
  const animalName = e.target.alt;
  const randomIndex = Math.floor(Math.random() * 3);
  const funFact = animals[animalName].facts[randomIndex];
  const factElement = document.getElementById("fact");
  factElement.innerHTML = funFact;
}

function playAudio(e) {
  const animalName = e.target.alt;
  const animalAudio = animals[animalName].sound + ".mp3"
  new Audio(animalAudio).play();
  console.log(animalAudio);
}

function wrapperFunction(e) {
  displayFact(e);
  playAudio(e);
}

ReactDOM.render(animalFacts, document.getElementById("root"));