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
let x = 0; 
let y = 300;
let bx = 500; 
let by = 500; 
let speed = 5; 
let sonicRun, sonicJump;
let state = "run"; 
let lastTimeSwitched = 0; 
let blockDuration = 10; 
let blockSpawn = true;
let blockSpot = 50;

function preload(){
  sonicRun = loadImage("assets/sonicRun.gif");
  sonicJump = loadImage("assets/sonicJump.gif");
}

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background("green");

  blocks();
  runOrJump();
  jumpSonic();
  moveSonic();
}



// whether to do the run animation or the jump animation
function runOrJump(){
  if (state === "jump"){
    image(sonicJump, x, y, 100, 100);
    state = "run";
  }
  else if (state === "run"){
    image(sonicRun, x, y, 75, 75);
  }
}


// how sonic moves up or down
function moveSonic(){
  if(mouseIsPressed){
    if (mouseButton === RIGHT){
      if ( y < 500){
        y = y + speed;
      } 
    }
  } 
  if (mouseIsPressed){
    if(mouseButton === LEFT){
      if (y > 0 ){
        y = y - speed; 
      }
    }
  }
}


// how sonic jumps
function jumpSonic(){
  if (keyIsPressed){
    if (keyCode === 32){
      state = "jump";
    }
  }
}



function blocks(){
  blockSpot = random(1, 3)
  if (blockSpawn === true && millis() > lastTimeSwitched + blockDuration){
    bx -= speed;
    lastTimeSwitched = millis();
  }
  fill("black");
  rect(bx, by, blockSpot);
}