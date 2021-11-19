// utimate tic tac toe
// Aiden Maddison
// 11/9/2021
 

let grid = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];
// global varibles, how big the cells are, which players turn it is and the counter for spare tiles. 
let cellWidth, cellHeight;
let cellSize; 
let gridSize = 3;
let player1 = true;
let player2 = false;
let counter = 0;
let winnerX = false; 
let winnerO = false;


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
  winTimes();
}

// when mouse pressed an x or a o appears where the mouse is clicked, and it also tells who's turn it is
function mousePressed(){
  //
  let cellX  = Math.floor(mouseX/cellWidth);
  let cellY = Math.floor(mouseY/cellHeight);
  
  if (player1){
    player1Turn(cellX, cellY);
  }

  else if(player2){
    player2Turn(cellX, cellY);
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
}


// players turn's where they click and x or an o is placed. 
function player1Turn(x, y){
  if (x >= 0 && x <= gridSize && y >= 0 && y <= gridSize){

    if (grid[x][y] === 0 && grid[x][y] !== 2 && counter !== 9){
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

    if(grid[x][y] === 0 && grid[x][y] !== 1 && counter !== 9){
      grid[x][y] = 2;
    }
    player1 = true;
    player2 = false;

    counter++;
  }
}



// how the score is counted
function winCondition(){
  //this is the part where it all goes wrong, i cant get the sideways wins to work, and i dont have time for the diagonal.
  // im sorry 
  for(let i = 0; i<gridSize; i++){
    if (grid[i] === grid[i + 1] && grid[i + 1] === grid[i + 2]){
      if(grid[i] === 1){
        winnerX = true;
      }
      else if (grid[i] === 2){
        winnerO = true;
      }  
    }
  }
  // this part works just fine though
  for(let i = 0; i<gridSize; i++){
    for(let b = 0; b<gridSize; b++){
      if(i >= 0 && i <= gridSize && b >= 0 && b <= gridSize){   
        if (grid[i][b] === grid[i][b + 1] && grid[i][b + 1] === grid[i][b + 2]){
          if(grid[i][b]=== 1){
            winnerX = true;
          }
          else if (grid[i][b] === 2){
            winnerO = true;
          }
        }
      }
    }
  }
}

//this is what happens when a player wins, text displays on the top left corner of the screen
function winTimes(){
  if(winnerO === true){
    fill("black");
    textSize(25);
    textAlign(CENTER, CENTER);
    text("Player 2 wins!",  75, 50);//, 50, 50);
  }
  else if (winnerX === true){
    fill("black");
    textSize(25);
    textAlign(CENTER, CENTER);
    text("Player 1 wins!",  75, 50);//, 50, 50);
  }
}