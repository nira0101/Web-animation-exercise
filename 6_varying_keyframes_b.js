"use strict";

/* overwrite this file with your 5_varying_keyframes.js - and the edit this one */

const ball = document.querySelector("#ball");

const bounce = {
  duration: 2580,
  iterations: Infinity,
  composite: "add",
};

const keyframeBounce = {
  offset: [0, 0.35, 0.51, 0.65, 0.75, 0.86, 0.92, 1],
  transform: [
    "translate(0,3.5vw)",
    "translate(0,31vw)",
    "translate(0,13vw)",
    "translate(0,31vw)",
    "translate(0,20vw)",
    "translate(0,31vw)",
    "translate(0,26vw)",
    "translate(0,31vw)",
  ],
  easing: [
    "ease-in",
    "ease-out",
    "ease-in",
    "ease-out",
    "ease-in",
    "ease-out",
    "ease-in",
    "ease-out",
  ],
};

const moveRight = {
  duration: 2580,
  iterations: Infinity,
  easing: "linear",
  composite: "add",
};

const keyframeMoveRight = {
  offset: [0, 0.35, 0.51, 0.65, 0.75, 0.86, 0.92, 1],
  transform: [
    "translate(0vw,0)",
    "translate(14vw,0)",
    "translate(22vw,0)",
    "translate(29vw,0)",
    "translate(34vw,0)",
    "translate(39vw,0)",
    "translate(43vw,0)",
    "translate(46vw,0)",
  ],
};
/*  { offset: 0, transform: `translate(0vw,0)` },
  { offset: 0.35, transform: `translate(14vw,0)` },
  { offset: 0.51, transform: `translate(22vw,0)` },
  { offset: 0.65, transform: `translate(29vw,0)` },
  { offset: 0.75, transform: `translate(34vw,0)` },
  { offset: 0.86, transform: `translate(39vw,0)` },
  { offset: 0.92, transform: `translate(43vw,0)` },
  { offset: 1, transform: `translate(46vw,0)` }, */

ball.animate(keyframeBounce, bounce);
ball.animate(keyframeMoveRight, moveRight);
