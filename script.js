let backgroundColor
let width = 500
let height = 500
function setup() {
  // Canvas & color settings
  createCanvas(width, height);
  colorMode(HSB,360,100,100)

}

let paintBox_X = [0,1*width/10,2*width/10,3*width/10,4*width/10,5*width/10,6*width/10,7*width/10,8*width/10,9*width/10,width]
let paintBox_Y = height/25
let color = 1



function draw() {
  background(backgroundColor);
  for(let i=0; i<paintBox_X.length-1; i++){ 
    fill(color*i*35,100,100)
    rect( paintBox_X[i] ,paintBox_Y ,paintBox_X[i+1] ,paintBox_Y) }
  console.log('hello')
  }
             
  
  

