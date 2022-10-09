"use strict";

const ball = document.querySelector("#ball");

// Create keyframes and properties for falling and zoom

const propertiesfall = {
  duration: 5000,
  iterations: Infinity,

  easing: "ease-in-out",
};

const propertieszoom = {
  duration: 500,
  fill: "forwards",
  composite: "add",
};

const keyframefall = [
  {
    offset: 0,
    transform: "translate(42vw,0)",
    easing: "ease-in",
  },
  {
    offset: 0.65,
    transform: "translate(85vw,20vw)",
    easing: "ease-out",
  },
  {
    offset: 0.75,
    transform: "translate(42vw,41vw)",
    easing: "ease-in",
  },
  {
    offset: 0.83,
    transform: "translate(0vw,20vw)",
    easing: "ease-in",
  },
  {
    offset: 1,
    transform: "translate(42vw,0)",
    easing: "ease-in-out",
  },
];
const keyframezoom = [{ transform: "scale(1)" }, { transform: "scale(0)" }];

const falling = ball.animate(keyframefall, propertiesfall);

// register click
ball.addEventListener("click", ballClicked);

// start falling animation

function ballClicked() {
  console.log("Ball clicked!");
  // pause falling animation
  falling.pause();
  // start zoom-animation
  const zoom = ball.animate(keyframezoom, propertieszoom);
  zoom.addEventListener("finish", (event) => {
    console.log("zoom has finished");
    zoom.cancel();
    falling.play();
  });
}
