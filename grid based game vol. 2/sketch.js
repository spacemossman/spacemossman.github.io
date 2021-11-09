// utimate tic tac toe
// Aiden Maddison
// 11/9/2021
 

let grid = [
  [0, 0, 0,  0, 0, 0,  0, 0, 0],// how the grid will show up on screen with the cage lines
  [0, 0, 0,  0, 0, 0,  0, 0, 0],
  [1, 0, 0,  0, 0, 0,  0, 0, 0],

  [0, 0, 0,  0, 0, 0,  0, 0, 0],
  [0, 0, 0,  0, 0, 0,  0, 0, 0],
  [0, 0, 0,  0, 0, 0,  0, 0, 0],

  [0, 0, 0,  0, 0, 0,  0, 0, 0],
  [0, 0, 0,  0, 0, 0,  0, 0, 0],
  [0, 0, 0,  0, 0, 0,  0, 0, 0],
];
// global varibles, how big the cells are, which players turn it is and the counter for spare tiles. 
let cellWidth, cellHeight;
let cellSize; 
let gridSize = 9;
let player1 = true;
let player2 = false;
let counter = 0;


//calculating the values for cell width, height and size
function setup() {
  createCanvas(700, 700);
  
  cellWidth = width/gridSize;
  cellHeight = height/gridSize;
  cellSize = width/gridSize;
}

function draw() {
  background(220);

  displayGrid();
  winCondition();
}

// when mouse pressed an x or a o appears where the mouse is clicked, and it also tells who's turn it is
function mousePressed(){
  if (player1){
    player1Turn(mouseX, mouseY);
  }

  else if(player2){
    player2Turn(mouseX, mouseY);
  }
}


//how the grid is displayed, 1 = x, 2 = o, and 0 means nothing is displayed
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


// players turn's where they click and x or an o is placed. 
function player1Turn(x, y){
  if (x >= 0 && x <= gridSize && y >= 0 && y <= gridSize){

    if (grid[x][y] === 0 && grid[x][y] !== 2 && counter !== 81){
      grid[x][y] = 1;
    }
    player2 = true;
    player1 = false;
     
    // counter is used for how many spaces left and when to score
    counter++;
  }
}

function player2Turn(x, y){
  if (x >= 0 && x <= gridSize && y >= 0 && y <= gridSize){

    if(grid[x][y] === 0 && grid[x][y] !== 1 && counter !== 81){
      grid[x][y] = 2;
    }
    player1 = true;
    player2 = false;

    counter++;
  }
}

// these show the cage lines around the grid 
function drawCageLines(){
  strokeWeight(4);

  for(let location = 0; location <= 9; location+= 3){
    line(0, cellSize*location, width, cellSize*location);
    line(cellSize*location, 0, cellSize*location, height);
  }
}

// how the score is counted
function winCondition(){
  if (counter === 81){
    for (let i = 0; i<gridSize; i++){
      for(let b = 0; b<gridSize; b++){

        if(grid[i][b] === 1 && grid[i][b]){
          grid;
        }
      }
    }
  }
}