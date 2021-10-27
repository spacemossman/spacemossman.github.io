// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let kayaan, nick, hannah;


function setup() {
  createCanvas(windowWidth, windowHeight);
  kayaan = new Walker(width/2, height/2, "red");
  nick = new Walker(100, height/2, "blue");
  hannah = new Walker(400, 500, "orange");
}

function draw() { 
  kayaan.move();
  nick.move();
  hannah.move();


  kayaan.display();
  nick.display();
  hannah.display();
  
}


class Walker{
  constructor(x, y, theColour){
    this.x = x;
    this.y = y;
    this.colour = theColour;
    this.speed = 5;
  }

  display(){
    noStroke();
    fill(this.colour);
    circle(this.x, this.y, 3);
  }

  move(){
    let choice = random(100);
    if (choice < 25 ){ // up
      this.y -= this.speed;
    }
    else if(choice < 50 ){ //down
      this.y += this.speed;
    }
    else if(choice < 75 ){// left
      this.x -= this.speed;
    }
    else if (choice < 100 ){ // right
      this.x += this.speed;
    }
  }
}