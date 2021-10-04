// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let theBubbles = [];


function setup() {
  createCanvas(windowWidth, windowHeight);

  
}

function draw() {
  background(220);
  bubbleUp();
  displayBubble();
}


function bubbleUp(){
  for(let bubble of theBubbles){
    bubble.x = random(-5, 5);
    bubble.y += bubble.dy;
  }
}

function mousePressed(){
  for (let i = 0; i<5; i++ ){

    spawnBubble();
  }
}

function spawnBubble(){
  let bubble = {
    x: random(width),
    y: height/2,
    radius: random(20, 50),
    dx: 0,
    dy: -3,
    theColour: color(random(255), random(255), random(255)),
  };
  theBubbles.push(bubble);
}

function displayBubble(){
  for(let bubble of theBubbles){
    noStroke();
    fill(bubble.theColour);
    circle(bubble.x, bubble.y, bubble.radius*2);
  }
}
