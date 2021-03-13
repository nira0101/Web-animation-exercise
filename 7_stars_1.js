"use strict";

const screen = document.querySelector("body").getBoundingClientRect();

document.querySelectorAll(".star").forEach((star) => {
  const endX = (Math.random() - 0.5) * screen.width * 2;
  const endY = (Math.random() - 0.5) * screen.height * 2;
  let randomDuration = Math.floor(Math.random() * 5000);
  let randomOpacity = Math.floor(Math.random() * 2);
  let randomScale = Math.floor(Math.random() * 1.5);

  // create keyframes to animate (translate) each star to a random end X and Y
  const starProperties = {
    duration: randomDuration,
    iterations: 1,
    composite: "add",
  };

  const keyframeStars = [
    // prettier-ignore
    {  transform: `translate(${endX}px,${endY}px) scale(${randomScale})`,
  opacity: randomOpacity},
  ];

  const starAnimation = star.animate(keyframeStars, starProperties);
  starAnimation.onfinish = () => {
    starAnimation.cancel();
    starAnimation.currentTime = 0;
    starAnimation.play();
  };

  // Also make the duration random - and why not also animate opacity and scale (to and from random values)
});
