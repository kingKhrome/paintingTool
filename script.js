// Be sure to name any p5.js functions we use in the global so Glitch can recognize them.
// Add to this list as you consult the p5.js documentation for other functions.
/* global angleMode, DEGREES, arc, clear, createCanvas, colorMode, HSB, width, height, random, background, fill, color, random,
          rect, ellipse, stroke, image, loadImage, collideCircleCircle, collideRectCircle, text, 
          mouseX, mouseY, strokeWeight, line, mouseIsPressed, noFill, windowWidth, windowHeight, noStroke, 
          keyCode, PI, HALF_PI, UP_ARROW, LEFT_ARROW, RIGHT_ARROW, DOWN_ARROW, textSize */

let dvdImage;
let tennisImage;
let masterVelocity;
let dvdWidth;
let dvdHeight;
let dvdX;
let dvdY;
let dvdXVelocity;
let dvdYVelocity;
let tennisX;
let tennisY;
let tennisWidth;
let tennisHeight;
let tennisXVelocity;
let tennisYVelocity;

function setup() {
  createCanvas(300, 300);
  // Load the image once.
  dvdImage = loadImage(
    "https://cdn.glitch.com/9ca9771e-2b27-465a-87d8-e4ac73d86a07%2FdvdLogo.jpeg?v=1594154686865"
  );
  tennisImage = loadImage(
    "https://cdn.glitch.com/9ca9771e-2b27-465a-87d8-e4ac73d86a07%2FtennisBall.png?v=1594161137161"
  );

  // Set up Controller Variables

  // Adjust to change speed
  masterVelocity = 1;
  // Adjust the width of the logo
  dvdWidth = 200;
  // Adjust the height of the logo
  dvdHeight = 150;

  // Set up starting values.
  dvdX = 50;
  dvdY = 50;
  dvdXVelocity = masterVelocity;
  dvdYVelocity = masterVelocity;
}

function draw() {
  background(220);

  // Check to make sure the image isn't at or over the edge of the screen for
  // horizontal movement.
  if (dvdX > width - dvdWidth) {
    // If it's too far right, make velocity negative
    dvdXVelocity = -1 * masterVelocity;
  } else if (dvdX < 0) {
    // if it's too far left, make the velocity positive
    dvdXVelocity = masterVelocity;
  }

  // Same check, but for vertical movement. Reverse it in either case.
  if (dvdY > height - dvdHeight) {
    dvdYVelocity = -masterVelocity;
  } else if (dvdY < 0) {
    dvdYVelocity = masterVelocity;
  }

  // Move the shape by changing the values of dvdX and dvdY,
  // unless the mouse is being pressed.
  if (!mouseIsPressed) {
    dvdX += dvdXVelocity;
    dvdY += dvdYVelocity;
  }

  // Draw the logo at the new position.
  image(dvdImage, dvdX, dvdY, dvdWidth, dvdHeight);
  image(tennisImage, tennisX, tennisY, tennisWidth, tennisHeight);

  // Debugging
  text("dvdX: " + dvdX, 0, height - 10);
  text("dvdY: " + dvdY, 50, height - 10);
  text("dvdXVelocity: " + dvdXVelocity, 100, height - 10);
  text("dvdYVelocity: " + dvdYVelocity, 200, height - 10);
}
