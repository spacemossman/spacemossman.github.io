// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  let canvas =  createCanvas(300, 300);
  canvas.position(100, 400);

  let someText = createP("some html string");
  someText.position(500, 500);
}

function draw() {
  background(220);
  circle(mouseX, mouseY, 100);
}
