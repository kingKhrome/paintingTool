// Be sure to name any p5.js functions we use in the global so Glitch can recognize them.
// Add to this list as you consult the p5.js documentation for other functions.
/* global angleMode, DEGREES, arc, clear, createCanvas, colorMode, HSB, width, height, random, background, fill, color, random,
          rect, ellipse, stroke, image, loadImage, collideCircleCircle, collideRectCircle, text, tint, noTint
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
let tintColor = 0;

function setup() {
  createCanvas(300, 300);
  
  // Makes it easier to pick a random fully-saturated color.
  colorMode(HSB);
  
  // Load the image once.
  dvdImage = loadImage(
    "https://cdn.glitch.com/9ca9771e-2b27-465a-87d8-e4ac73d86a07%2FdvdLogo.jpeg?v=1594154686865"
  );
  tennisImage = loadImage(
    "https://cdn.glitch.com/9ca9771e-2b27-465a-87d8-e4ac73d86a07%2FtennisBall.png?v=1594161137161"
  );

  // Set up starting values.
  dvdX = 50;
  dvdY = 50;
  dvdXVelocity = 1;
  dvdYVelocity = 1;
  dvdWidth = 200;
  dvdHeight = 150;
  
  tennisX = 50;
  tennisY = 50;
  tennisXVelocity = 1;
  tennisYVelocity = 2;
  tennisWidth = 50;
  tennisHeight = 50;
}

function draw() {
  background(220);

  // Check to make sure the image isn't at or over the edge of the screen for
  // horizontal movement.
  if (dvdX > width - dvdWidth || dvdX < 0) {
    dvdXVelocity = -dvdXVelocity;
    tintColor = random(255);
  }

  // Same check, but for vertical movement. Reverse it in either case.
  if (dvdY > height - dvdHeight || dvdY < 0) {
    dvdYVelocity = -dvdYVelocity;
    tintColor = random(255);
  }
  
  // Check to make sure the image isn't at or over the edge of the screen for
  // horizontal movement.
  if (tennisX > width - tennisWidth || tennisX < 0) {
    // If it's too far right, make velocity negative
    tennisXVelocity = -tennisXVelocity;
  }

  // Same check, but for vertical movement. Reverse it in either case.
  if (tennisY > height - tennisHeight || tennisY < 0) {
    tennisYVelocity = -tennisYVelocity;
  }

  // Move the shape by changing the values of x and y,
  // unless the mouse is being pressed.
  if (!mouseIsPressed) {
    dvdX += dvdXVelocity;
    dvdY += dvdYVelocity;
    tennisX += tennisXVelocity;
    tennisY += tennisYVelocity;
  }

  // Draw the logo at the new position with the current tint color.
  tint(tintColor, 255, 255);
  image(dvdImage, dvdX, dvdY, dvdWidth, dvdHeight);
  noTint();
  
  image(tennisImage, tennisX, tennisY, tennisWidth, tennisHeight);

  // Debugging
  
  text("dvdX: " + dvdX, 0, height - 10);
  text("dvdY: " + dvdY, 55, height - 10);
  text("dvdXVelocity: " + dvdXVelocity, 110, height - 10);
  text("dvdYVelocity: " + dvdYVelocity, 200, height - 10);

  text("tX: " + tennisX, 0, height - 20);
  text("tY: " + tennisY, 55, height - 20);
  text("tXVelocity: " + tennisXVelocity, 110, height - 20);
  text("tYVelocity: " + tennisYVelocity, 200, height - 20);
}
