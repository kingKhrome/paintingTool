let backgroundColor = 0
let width = 500
let height = 500
function setup() {
  // Canvas & color settings
  createCanvas(width, height);
  background(backgroundColor);
  noStroke()
  frameRate(1000)

}

let paintBox_X = [0,1*width/10,2*width/10,3*width/10,4*width/10,5*width/10,6*width/10,7*width/10,8*width/10,9*width/10,width]
let paintBox_Y = height/25
let color1 = 1
let color2 

function setColor() {
  if (mouseIsPressed && mouseY<2*paintBox_Y) {
    colorMode(RGB)
    let col = get(mouseX,mouseY)
    color2 = color(col[0],col[1],col[2])
  }
}
function makePaints() {
  colorMode(HSB,360,100,100)
  for(let i=0; i<paintBox_X.length-1; i++){ 
    fill(color1*i*36,100,95)
    rect( paintBox_X[i] ,0 ,paintBox_X[i+1] ,paintBox_Y)
    fill(color1*i*36+18,50,90)
    rect( paintBox_X[i] ,paintBox_Y ,paintBox_X[i+1] ,paintBox_Y)
  }  
}

function earse() {
  rect(width)
}
function scribble() {
  if (mouseIsPressed) {
    fill(color2)
    circle(mouseX,mouseY,5)
  }
}


function draw() {
  makePaints()
  setColor()
  scribble()
  
  
  }
             
  
  

