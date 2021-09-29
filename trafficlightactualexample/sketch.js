// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


// Traffic Light Starter Code
// aiden m
// 9/29/2021

// GOAL: make a 'traffic light' simulator. For now, just have the light
// changing according to time. You may want to investigate the millis()
// function at https://p5js.org/reference/#/p5/millis

let whichLight = "red";
let lastTimeSwitched = 0; 
let redDuration = 3000;
let greenDuration = 3000;
let yellowDuration = 1000; 

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(255);
  drawOutlineOfLights();
  pickCorrectLight();
  colourCorretLight();
}

function drawOutlineOfLights() {
  //box
  rectMode(CENTER);
  fill(0);
  rect(width/2, height/2, 75, 200, 10);

  //lights
  fill(255);
  ellipse(width/2, height/2 - 65, 50, 50); //top
  ellipse(width/2, height/2, 50, 50); //middle
  ellipse(width/2, height/2 + 65, 50, 50); //bottom
}

function colourCorretLight(){
  if (whichLight === "green"){
    fill("green");
    ellipse(width/2, height/2 + 65, 50, 50); //bottom
  }
  else if(whichLight === "yellow"){
    fill("yellow");
    ellipse(width/2, height/2, 50, 50); //middle
  }
  else if (whichLight === "red"){
    fill("red");
    ellipse(width/2, height/2 - 65, 50, 50); //top 
  }
}

function pickCorrectLight(){
  if (whichLight === "red" && millis() > lastTimeSwitched + redDuration){
    whichLight = "green";
    lastTimeSwitched = millis();
  }
  else if (whichLight === "green" && millis() > lastTimeSwitched + greenDuration){
    whichLight = "yellow";
    lastTimeSwitched = millis();
  }
  else if (whichLight === "yellow" && millis() > lastTimeSwitched + yellowDuration){
    whichLight = "red";
    lastTimeSwitched = millis();
  }
}
