// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let bgButton;
let shapeButton;
let bgColour = "blue";
let isShapeDisplayed = false;

function setup() {
  createCanvas(windowWidth, windowHeight);

  bgButton = new Button(100, 300, 600, 150, "grey", "black");
  shapeButton = new Button(100, 600, 600, 150, "pink", "red");
}

function draw() {
  background(bgColour);
  bgButton.display();
  shapeButton.display();

  if(isShapeDisplayed){
    fill("black");
    circle(600, 200, 100);
  }
}

function mousePressed(){

  if(bgButton.isPointInButton(mouseX, mouseY)){
    bgColour = "green";
  }
  if (shapeButton.isPointInButton(mouseX, mouseY)){
    isShapeDisplayed = !isShapeDisplayed;
  }
}

class Button{
  constructor(x, y, buttonWidth, buttonHeight, hoverColour, notHoverColour){
    this.x  = x;
    this.y = y;
    this.height = buttonHeight;
    this.width = buttonWidth;
    this.notHoverColour = notHoverColour;
    this.hoverColour = hoverColour;
  }

  display(){
    if (this.isPointInButton(mouseX, mouseY)){
      fill(this.hoverColour);
    }
    else{
      fill(this.notHoverColour);
    }
    rect(this.x, this.y, this.width, this.height);
  }

  isPointInButton(x, y){
    return x >= this.x && x <= this.x + this.width && y >= this.y && y <= this.y + this.height;
  }
}