// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let someList = [5, 15, 3, 8, 9, 1, 20, 7];

function bubbleSort(list){
  let anySwaps = true;
  
  while(anySwaps){
    anySwaps = false;
  
    for(let i = 0; i<list.length-1; i++){
      //check for swap
      if(list[i] > list[i + 1]){
        anySwaps = true;

        let aValue = list[i];
        let bValue = list[i + 1];
    
        list[i] = bValue;
        list[i + 1] = aValue;
  
      }
    }
  }
  return list;
}



function setup() {
  createCanvas(windowWidth, windowHeight);
  console.log(bubbleSort(someList));
}

function draw() {
}
