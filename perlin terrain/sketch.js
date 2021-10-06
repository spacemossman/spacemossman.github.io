// terrain
// aiden
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let rectHeights = [];
let numbersOfRects = 500; 



function setup() {
  createCanvas(windowWidth, windowHeight);

  generateTerrian();
}

function draw() {
  background(220);
  numbersOfRects = width;
  displayTerrain();
}

function generateTerrian(){
  let time = 0;
  for(let i = 0; i < numbersOfRects; i++){
    let theHeight = noise(time) * height;
    rectHeights.push(theHeight);
    time += 0.005; 
  }
}

function displayTerrain(){
  let theWidth = width/rectHeights.length; 
  for (let i = 0; i < rectHeights.length; i++){
    let theHeight = rectHeights[i];
    fill("black");
    rect(theWidth*i, height, 10, -theHeight);
  }
}