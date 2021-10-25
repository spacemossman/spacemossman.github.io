// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let gridSize = 4; 
let grid;
let cellSize;
let twentyfortyeight; 


function setup() {
  createCanvas(windowWidth*0.5, windowHeight*0.5);
  grid = createRandom2DArray(gridSize, gridSize);
}

function draw() {
  background(220);

  displayGrid();
}


function displayGrid(){
  let cellWidth = width/gridSize;
  let cellHeight = height/gridSize;

  for (let y = 0; y<gridSize; y++){
    for(let x = 0; x<gridSize; x++){
      fill("white");
      strokeWeight(1);
      rect(x*cellWidth, y * cellHeight, cellWidth, cellHeight);

      fill("black");
      textSize(cellSize*0.75);
      textAlign(CENTER, CENTER);
      text(grid[y][x], x*cellSize + cellSize/2, y*cellSize + cellSize/2);
     

    }
  }
}

function numbers2048(){
  
  if (keyIsPressed){
    for (let y = 0; y<gridSize; y++){
      for(let x = 0; x<gridSize; x++){
        if(keyCode === 38 && grid[y][x] === grid[y + 1][x]){
          grid[y][x] = 0;
          grid[y + 1][x] = grid[y+1][x]*grid[y+1];
        }
        else if (keyCode === 40 && grid[y][x] === grid[y][x +1]){


        }
    }
  }
}

function createEmpty2DArray(rows, cols){
  let grid = [];

  for (let y = 0; y<rows; y++){
    grid.push([]);
    for(let x = 0; x<cols; x++){
      grid[y].push(0); 
    }
  }
  return grid;
}

function createRandom2DArray(rows, cols){
  let grid = [];

  for (let y = 0; y<rows; y++){
    grid.push([]);
    for(let x = 0; x<cols; x++){
      grid[y].push(0); 
    }
  }
  return grid;
}