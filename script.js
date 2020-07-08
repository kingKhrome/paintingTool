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
function wait(s) {
  let time = Date.now();
  let t = null;
  while (t - time < s) {
    t = Date.now(); }
}

let paintBox_X = [0,1*width/10,2*width/10,3*width/10,4*width/10,5*width/10,6*width/10,7*width/10,8*width/10,9*width/10,width]
let paintBox_Y = height/25
let color1 = 1
let color2 = 255
let brushSize =10

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
    fill(color1*i*36,100,100)
    rect( paintBox_X[i] ,0 ,paintBox_X[i+1] ,paintBox_Y)
    fill(color1*i*36+18,50,65)
    rect( paintBox_X[i] ,paintBox_Y ,paintBox_X[i+1] ,paintBox_Y)
  }  
}

function earse() {
  fill('white')
  rect(0,height-height/20,width/10.5,height-height/20)
  fill(0)
  textStyle(BOLD)
  text('Reset',5,height-height/55)
  if(mouseIsPressed && dist(mouseX,mouseY,width/20,height-height/40) < 20 ) {
    console.log('hi')
    background(backgroundColor);
  }
}
function scribble() {
  if (mouseIsPressed) {
    fill(color2)
    circle(mouseX,mouseY,brushSize)
  }
}

function changeSize(){
  fill('white')
  rect(0,445,width/10.5,25)
  fill(0)
  textStyle(BOLD)
  text('Bigger',3,height-height/13)
  
  fill('white')
  rect(0,415,47.6,25)
  fill(0)
  textStyle(BOLD)
  text('Smaller',2,433)
  
  if (mouseIsPressed && dist(mouseX,mouseY,24,425) < 20){
    if (brushSize > 1) brushSize-=1;
    wait(100)
    console.log('yea')
  }
  if (mouseIsPressed && dist(mouseX,mouseY,24,455) < 20){
    if (brushSize > 1) brushSize-=1;
    wait(100)
    console.log('yea')
  }
  
}


function draw() {
  makePaints()
  setColor()
  scribble()
  earse()
  changeSize()
  
  
  }
             
  
  

