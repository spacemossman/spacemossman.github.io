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

function preload(){

}

function setup() {
  createCanvas(windowWidth*0.5, windowHeight*0.5);
  grid = createEmpty2DArray(gridSize, gridSize);

  cellSize = width/gridSize;
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


      if(grid[y][x] !== 0){

        fill("black");
        textSize(cellSize*0.75);
        textAlign(CENTER, CENTER);
        text(grid[y][x], x*cellSize + cellSize/2, y*cellSize + cellSize/2);
      }
      
      
      
    }
  }
}

function numbers2048(){
  
  if (keyIsPressed){
    for (let y = 0; y<gridSize; y++){
      for(let x = 0; x<gridSize; x++){
        // up arrow key
        if(keyCode === 38 && grid[y][x] === grid[y + 1][x]){
          grid[y][x] = 0;
          grid[y - 1][x] = grid[y- 1][x]*grid[y -1];
        }
        // down arrow key
        else if (keyCode === 40 && grid[y][x] === grid[y][x +1]){
          grid[y][x] = 0;
          grid[y + 1][x] = grid[y+1][x]*grid[y+1][x];
        }
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
      if(random(100)< 20){
        grid[y].push(1);
      }
      else{
        grid[y].push[0];
      }
    }
  }
  return grid;
}