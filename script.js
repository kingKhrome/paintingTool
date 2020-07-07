// Be sure to name any p5.js functions we use in the global so Glitch can recognize them.
// Add to this list as you consult the p5.js documentation for other functions.
/* global angleMode, DEGREES, arc, clear, createCanvas, colorMode, HSB, width, height, random, background, fill, color, random,
          rect, ellipse, stroke, image, loadImage, collideCircleCircle, collideRectCircle, text, 
          mouseX, mouseY, strokeWeight, line, mouseIsPressed, noFill, windowWidth, windowHeight, noStroke, 
          keyCode, PI, HALF_PI, UP_ARROW, LEFT_ARROW, RIGHT_ARROW, DOWN_ARROW, textSize */

let dvdImage;
let masterVelocity;
let logoWidth;
let logoHeight;
let x;
let y;
let xVelocity;
let yVelocity;

function setup() {
  createCanvas(300, 300);
  // Load the image once.
  dvdImage = loadImage(
    'https://cdn.glitch.com/eaea72a4-ac6d-4777-b76e-f37d75959aa5%2Fdvd.jpeg?1515761833387'
  );

  // Set up Controller Variables

  // Adjust to change speed
  masterVelocity = 1;
  // Adjust the width of the logo
  logoWidth = 200;
  // Adjust the height of the logo
  logoHeight = 150;

  // Set up starting values.
  x = 50;
  y = 50;
  xVelocity = masterVelocity;
  yVelocity = masterVelocity;
}

function draw() {
  background(220);

  // Check to make sure the image isn't at or over the edge of the screen for
  // horizontal movement.
  if (x > width - logoWidth) {
    // If it's too far right, make velocity negative
    xVelocity = -1 * masterVelocity;
  } else if (x < 0) {
    // if it's too far left, make the velocity positive
    xVelocity = masterVelocity;
  }

  // Same check, but for vertical movement. Reverse it in either case.
  if (y > height - logoHeight) {
    yVelocity = -masterVelocity;
  } else if (y < 0) {
    yVelocity = masterVelocity;
  }

  // Move the shape by changing the values of x and y,
  // unless the mouse is being pressed.
  if (!mouseIsPressed) {
    x += xVelocity;
    y += yVelocity;
  }

  // Draw the logo at the new position.
  image(dvdImage, x, y, logoWidth, logoHeight);

  // Debugging
  text('x: ' + x, 0, height - 10);
  text('y: ' + y, 50, height - 10);
  text('xVelocity: ' + xVelocity, 100, height - 10);
  text('yVelocity: ' + yVelocity, 200, height - 10);
}
