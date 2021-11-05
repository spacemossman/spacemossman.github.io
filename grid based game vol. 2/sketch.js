// utimate tic tac toe
// Aiden Maddison
// 11/9/2021
 

let grid = [
  [1, 0, 0, 0, 0, 0, 0, 0, 0],// 
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
];
let cellWidth, cellHeight;
let cellSize; 
let gridSize = 9;
let player1 = true;
let player2 = false;
let xAndOs;

function setup() {
  createCanvas(700, 700);
  
  cellWidth = width/gridSize;
  cellHeight = height/gridSize;
  cellSize = width/gridSize;
}

function draw() {
  background(220);

  displayGrid();
}

// function mousePressed(){
//   if (player1){
//     player1Turn(mouseX, mouseY);
//   }

//   else if(player2){
//     player2Turn(mouseX, mouseY);
//   }
// }

function displayGrid(){
  for (let i = 0; i<gridSize; i++){
    for(let b = 0; b<gridSize; b++){
      fill("white");
      strokeWeight(1);
      rect(i*cellWidth, b * cellHeight, cellWidth, cellHeight);


      if (grid[i][b] !== 0){
        fill("black");
        textSize(cellSize*0.5);
        textAlign(CENTER, CENTER);
        if( grid[i][b] === 1){
          text("X", i*cellSize + cellSize/2, b*cellSize + cellSize/2);
        }
        else if (grid[i][b] === 2){
          text("O", i*cellSize + cellSize/2, b*cellSize + cellSize/2);
        }
      }
    }
  }
  drawCageLines();
}

// function player1Turn(x, y){
//   if (grid[y][x] === 0){
//     grid[y][x] = 1;
//   }
//   player2 = true;
//   player1 = false;
// }

// function player2Turn(x, y){
//   if(grid[y][x] === 0){
//     grid[y][x] = 2;
//   }
//   player1 = true;
//   player2 = false;
// }


function drawCageLines(){
  strokeWeight(4);

  for(let location = 0; location <= 9; location+= 3){
    line(0, cellSize*location, width, cellSize*location);
    line(cellSize*location, 0, cellSize*location, height);
  }
}