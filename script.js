// Be sure to name any p5.js functions we use in the global so Glitch can recognize them.
// Add to this list as you consult the p5.js documentation for other functions.
/* global createCanvas, colorMode, HSB, width, height, random, background, fill, color, random,
          rect, ellipse, stroke, image, loadImage, collideCircleCircle, collideRectCircle, text, 
          mouseX, mouseY, strokeWeight, line, mouseIsPressed, windowWidth, windowHeight, noStroke, 
          keyCode, UP_ARROW, LEFT_ARROW, RIGHT_ARROW, DOWN_ARROW, textSize */

let backgroundColor;
const circle = {
  x: 10,
  y: 10,
  d: 10
};

function setup() {
  // Canvas & color settings
  const canvasDiv = document.getElementById('canvas');
  const canvas = createCanvas(canvasDiv.offsetWidth, 400);
  canvas.parent('canvas');
  colorMode(HSB, 360, 100, 100);
  backgroundColor = 100;
}

function draw() {
  background(75, 100, 100);
  fill(0);
  ellipse(circle.x, circle.y, circle.d);
  if (!mouseIsPressed) {
    circle.x = (circle.x + 1) % width;
  }
}
