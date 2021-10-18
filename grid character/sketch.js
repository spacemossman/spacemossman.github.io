// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


// Game of Life

let grid;
let gridSize = 30;
let cellWidth, cellHeight;
let level;
let playerX = 0; 
let playerY = 0;


function preload(){
  level = loadJSON("assets/level1.json"); //assumes gridSize is 30
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  grid = level;
  cellWidth = width/gridSize;
  cellHeight = height/gridSize;

  // put player in grid
  grid[playerY][playerX] = 2;
}

function draw() {
  background(220);
  
  
  displayGrid();
}

function mousePressed() {
  let cellX = Math.floor(mouseX/cellWidth);
  let cellY = Math.floor(mouseY/cellHeight);

  if (grid[cellY][cellX] === 0) {
    grid[cellY][cellX] = 1;
  }
  else if (grid[cellY][cellX] === 1) {
    grid[cellY][cellX] = 0;
  }
}

function keyPressed(){
  if (key === "e"){
    grid = createEmpty2DArray(gridSize, gridSize);
  }
  if (key  === "r"){
    grid = createRandom2DArray(gridSize, gridSize);
  }
  if (key === "s"){
    tryToMOveTwo(playerX, playerY+1);
  }
  else if (key === "w"){
    tryToMOveTwo(playerX, playerY-1);
  }
  else if (key === "a"){
    tryToMOveTwo(playerX -1, playerY);
  }
  else if (key === "d"){
    tryToMOveTwo(playerX + 1, playerY);
  }
}

function tryToMOveTwo(newx, newy){
  //make sure youre on the grid
  if(newx >= 0 && newy >= 0 && newx < gridSize && newy < gridSize){
    if (grid[newy][newx] === 0){
  
      //reset current player spot to empty
      grid[playerY][playerX] = 0;
      
      playerX = newx;
      playerY = newy; 
    
      // new player spot becomes red
      grid[playerY][playerX] = 2;
    }
  }
  
}

function displayGrid() {
  for (let y=0; y<gridSize; y++) {
    for (let x=0; x<gridSize; x++) {
      if (grid[y][x] === 0) {
        fill("white");
      }
      if (grid[y][x] === 1) {
        fill("black");
      }
      if(grid[y][x] === 2){
        fill("red");
      }
      rect(x*cellWidth, y*cellHeight, cellWidth, cellHeight);
    }
  }
}

function createEmpty2DArray(rows, cols) {
  let board = [];
  for (let y=0; y<rows; y++) {
    board.push([]);
    for (let x=0; x<cols; x++) {
      board[y].push(0);
    }
  }
  return board;
}

function createRandom2DArray(rows, cols) {
  let board = [];
  for (let y=0; y<rows; y++) {
    board.push([]);
    for (let x=0; x<cols; x++) {
      if(random(100) < 50){
        board[y].push(0);
      }
      else{
        board[y].push(1);
      }
    }
  }
  return board;
}