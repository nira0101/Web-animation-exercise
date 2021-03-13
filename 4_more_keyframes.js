"use strict";
const ball = document.querySelector("#ball");
const stageSize = document.querySelector("#stage").getBoundingClientRect();
const ballSize = document.querySelector("#ball").getBoundingClientRect();
console.log(ballSize);
const multipleProperties = {
  duration: 5000,
  iterations: Infinity,
};

const keyframesMultiple = [
  //first exercise
  /* { transform: "translate(42vw, 0vw)" },
  { transform: "translate(85vw, 20vw)" },
  { transform: "translate(42vw, 41vw)" },
  { transform: "translate(0vw, 20vw)" },
  { transform: "translate(42vw, 0vw)" }, */

  //second exercise
  { transform: `translate(${stageSize.width / 2 - ballSize.width / 2}px,0)` },
  { transform: `translate(${stageSize.width - ballSize.width}px)` },

  //centerY
  {
    transform: `translate(${stageSize.width / 2 - ballSize.width / 2}px,${
      stageSize.height - ballSize.height
    }px)`,
  },

  //bottomY
  {
    transform: `translate(0px,${stageSize.height / 2 - ballSize.height / 2}px)`,
  },
];

keyframesMultiple.push(keyframesMultiple[0]);

ball.animate(keyframesMultiple, multipleProperties);
