"use strict";

const screen = document.querySelector("body").getBoundingClientRect();

// create (at least) 200 stars as div.star and append each one to the #stars.
for (let star = 0; star < 200; star++) {
  const starDiv = document.createElement("div");
  const starS = document.querySelector("#stars");
  starDiv.classList.add("star");
  document.body.appendChild(starDiv);
}

// add a randomized animation to each star

document.querySelectorAll(".star").forEach((star) => {
  const endX = (Math.random() - 0.5) * screen.width * 2;
  const endY = (Math.random() - 0.5) * screen.height * 2;
  let randomDuration = Math.floor(Math.random() * (7000 - 3000) + 5000);
  let randomOpacity = Math.floor(Math.random() * (2 - 0) + 0);
  let randomScale = Math.floor(Math.random() * (1.5 - 0.1) + 0.1);

  // create keyframes to animate (translate) each star to a random end X and Y
  const starProperties = {
    duration: randomDuration,
    iterations: 1,
    composite: "add",
  };

  const starKeyframes = [
    // prettier-ignore
    {  transform: `translate(${endX}px,${endY}px) scale(${randomScale})`,
      opacity: randomOpacity},
  ];

  const starAnimation = star.animate(starKeyframes, starProperties);

  // when the animation is finished, add a new randomized animation to that star

  starAnimation.onfinish = () => {
    starAnimation.cancel();
    starAnimation.currentTime = 0;
    starAnimation.play();
  };
});

// when the animation is finished, add a new randomized animation to that star
