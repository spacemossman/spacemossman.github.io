// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let grid;
let gridSize = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);

  grid  = createEmpty2DArray(5, 5); 
}

function draw() {
  background(220);

}

function createEmpty2DArray(rows, cols){
  let grid = [];

  for (let x = 0; x<rows; x++){
    grid.push([]);
    for (let y = 0; y<cols; y++){
      grid.push(0);
    }
  }
  return grid;
}
