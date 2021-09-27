// Sonic running game
// Aiden Maddison
// Oct. 4th 2021
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


// figure out jump and run animation
// randoisme dodge or jump obsacales
// death & score(maybe)
// keyboard to resart, mouse to move 




//global variables
let x = 50; 
let y = 50;
let sonicRun, sonicJump; 

function preload(){
  sonicRun = loadImage("assets/sonicRun.gif");
  sonicJump = loadImage("assets/sonicJump.gif");
}

function setup() {
  createCanvas(windowHeight, windowWidth);
}

function draw() {
  background(220);
  image(sonicRun, 0, 50, x, y);
}


function moveSonic(){
  if(mouseIsPressed){
    if (mouseButton === RIGHT){
      

    }

  } 
}