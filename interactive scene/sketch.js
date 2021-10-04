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
let sonicRun, sonicJump, sonicDead;
let state = "run"; 
let lastTimeSwitched = 0; 
let blockDuration = 3000; 
let blockSpawn = true;
let blockSpot = 50;
let hit;

function preload(){
  sonicRun = loadImage("assets/sonicRun.gif");
  sonicJump = loadImage("assets/sonicJump.gif");
  sonicDead = loadImage("assets/grave.png");
}

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background("green");

  hitBlock();
  restart();
  blocks();
  runOrJump();
  jumpSonic();
  moveSonic();
}



// whether to do the run animation or the jump animation or the grave
function runOrJump(){
  if (state === "jump"){
    image(sonicJump, x, y, 100, 100);
    point(50, y + 50);
    state = "run";
  }
  else if (state === "run"){
    image(sonicRun, x, y, 75, 75);
    point(50, y + 50);
  }
  else if (state === "dead"){
    image(sonicDead, x, y, 75, 75);
    point(50, y + 50);
  }
}


// how sonic moves up or down
function moveSonic(){
  if(mouseIsPressed){
    if (mouseButton === RIGHT && state === "run"){
      if ( y < 500){
        y = y + speed;
      } 
    }
  } 
  if (mouseIsPressed){
    if(mouseButton === LEFT && state === "run"){
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

// how to restart the game by pressing s
function restart(){
  if (keyIsPressed && keyCode === 83 && state === "dead"){
    state = "run";
  }
}

// how each block comes out from three different points
function blocks(){
  blockSpot = random(1, 100);
  if (blockSpawn === true && millis() > lastTimeSwitched + blockDuration){
    bx = 550; 
    lastTimeSwitched = millis();
    if (blockSpot < 33){
      by = 150; 
    }
    else if (blockSpot < 66){
      by = 300; 
    }
    else if (blockSpot < 100){
      by = 450;
    }
  }
  bx -= speed;
  fill("black");
  rect(bx, by, 50, 50);
}

//when the sonic hits ablock he dies, this is how
function hitBlock(){
  hit = collidePointRect(50, y + 50,  bx, by, 50, 50);
  if (state === "run" && hit ){
    state = "dead";
    console.log("collided");
  }
}
