// Be sure to name any p5.js functions we use in the global so Glitch can recognize them.
// Add to this list as you consult the p5.js documentation for other functions.
/* global angleMode, DEGREES, arc, clear, createCanvas, colorMode, HSB, width, height, random, background, fill, color, random,
          rect, ellipse, stroke, image, loadImage, collideCircleCircle, collideRectCircle, text, 
          mouseX, mouseY, strokeWeight, line, mouseIsPressed, noFill, windowWidth, windowHeight, noStroke, 
          keyCode, PI, HALF_PI, UP_ARROW, LEFT_ARROW, RIGHT_ARROW, DOWN_ARROW, textSize */

function setup() {
  createCanvas(300, 300);
  angleMode(DEGREES);
}

function draw() {
  background(240);

  // Brush settings
  noFill();
  strokeWeight(5);

  // Ring 1: Blue
  stroke(10, 134, 205);
  ellipse(50, 50, 50);

  // Ring 2: Yellow
  stroke(255, 214, 0);
  ellipse(80, 80, 50);

  // Ring 3: Black
  stroke(0, 0, 0);
  ellipse(110, 50, 50);

  // Ring 4: Green
  stroke(33, 176, 76);
  ellipse(140, 80, 50);

  // Ring 5: Red
  stroke(234, 30, 35);
  ellipse(170, 50, 50);

  /* Overlapping sections */

  // Ring 1: Blue
  stroke(10, 134, 205);
  arc(50, 50, 50, 50, 0, 30);

  // Ring 2: Yellow
  stroke(255, 214, 0);
  arc(80, 80, 50, 50, 270, 300);

  // Ring 3: Black
  stroke(0, 0, 0);
  arc(110, 50, 50, 50, 0, 30);

  // Ring 4: Green
  stroke(33, 176, 76);
  arc(140, 80, 50, 50, 270, 300);
}
