// Be sure to name any p5.js functions we use in the global so Glitch can recognize them.
// Add to this list as you consult the p5.js documentation for other functions.
/* global angleMode, DEGREES, arc, clear, createCanvas, colorMode, HSB, width, height, random, background, fill, color, random,
          rect, ellipse, stroke, image, loadImage, collideCircleCircle, collideRectCircle, text, tint, noTint
          mouseX, mouseY, strokeWeight, line, mouseIsPressed, noFill, windowWidth, windowHeight, noStroke, 
          keyCode, PI, HALF_PI, UP_ARROW, LEFT_ARROW, RIGHT_ARROW, DOWN_ARROW, textSize */

// We'll use variables for most of our colors in this code-along.
let backgroundColor;
let color1;
let color2;
let textColor;

function setup() {
  // Canvas & color settings
  createCanvas(400, 400);
  colorMode(HSB, 360, 100, 100);
  noStroke();

  // When used with only one argument, the color mode is greyscale.
  // 0 is black and 100 is white.
  backgroundColor = color(95);
  textColor = color(20);
  // When used with three arguments, the function takes, in this order:
  // HUE - 0 to 360 degrees on a color wheel - 0 is red, 120 is green and 240
  //       is blue.
  // SATURATION - 0 is no color (greyscale), and 100 is as bold as possible.
  // BRIGHTNESS - 0 is no light (black), and 100 is as bright as possible.
  color1 = color(0, 80, 80);
  color2 = color(200, 80, 80);
}

function draw() {
  background(backgroundColor);
  // Call the drawCenterLine function here to run the three lines of code
  // contained in that function.

  // The red and blue circles:
  fill(color1);
  ellipse(width/4, height/2, 50);
  fill(color2);
  ellipse(3/4*width, height/2, 50);

  // The grey circle and the text:
  fill(textColor);
  ellipse(mouseX, mouseY, 50);
  text("Flip the switch", 20, 20);
}

function drawCenterLine() {
  // This function will turn stroke on, draw the line, and then turn stroke
  // back off.
  // A line segment in p5.js has four arguments: x1, y1, x2, y2
  stroke(textColor);
  line(width/2, 0, width/2,height);
  noStroke();
}
