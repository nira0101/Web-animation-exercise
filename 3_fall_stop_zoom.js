"use strict";

const ball = document.querySelector("#ball");

// Create keyframes and properties for falling and zoom
const falling = {
  duration: 7000,
  iteration: Infinity,
};

const keyframesFalling = [
  { transform: "translateY(-20vw)" },
  { transform: "translateY(65vw)" },
];

const zooming = {
  duration: 3000,
  iteration: 1,
  fill: "forwards",
  composite: "add",
};

const keyframesZooming = [{ transform: "scale(1)" }, { transform: "scale(0)" }];

// register click
document.querySelector("#ball").addEventListener("mousedown", ballClicked);

// start falling animation
const fallAnimation = ball.animate(keyframesFalling, falling);

function ballClicked() {
  console.log("Ball clicked!");
  // pause falling animation
  fallAnimation.pause();

  // start zoom-animation
  document.querySelector("#ball").animate(keyframesZooming, zooming);
}
