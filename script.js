var rover = { 
  x : 0,
  y : 0,
  direction : "N",
  travelLog : [0,0]
}

var rover2 = {
  x : 9,
  y : 9,
  direction : "N",
  travelLog : [0,0]
}
//Add additional rovers to the map.

// ======================
//Create obstacles for the rover too
var grid = [
  [null, null, "obstacle", null, null, null, null, null, null, null],
  [null, null, null, null, null, "obstacle", null, null, null, null],
  [null, null, null, "obstacle", "obstacle", "obstacle", null, null, null, null],
  [null, null, null, null, null, null, null, null, "obstacle", null],
  [null, null, null, null, null, null, "obstacle", null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, "obstacle", null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, "obstacle", null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, "obstacle", null, null, null, null, null, null]
];



// ======================
//create a function to turn the rover:
function turnLeft(rover){
  console.log("turnLeft was called!");
  switch ((rover).direction){
    case "N":
      (rover).direction="S";
      break;
    case "W":
      (rover).direction="S";
      break;
    case "S":
      (rover).direction="E";
      break;
    case "E":
      (rover).direction="N";
      break; 
    default:
 }
  console.log (`Rover Direction: ${(rover).direction}`)
}

//turnLeft(rover);
//turnLeft(rover);
//turnLeft(rover);

function turnRight(rover){
  console.log("turnRight was called!");
  switch (rover.direction){
    case "N":
      rover.direction="E";
      break;
    case "W":
      rover.direction="N";
      break;
    case "S":
      rover.direction="W";
      break;
    case "E":
      rover.direction="S";
      break; 
}
  console.log (`Rover Direction: ${rover.direction}`)
}

//turnRight(rover);
//turnRight(rover);
//turnRight(rover);


//create a function to move the rover forward or backward based on its direction,
function moveForward(rover){
  console.log("moveForward was called");
  switch (rover.direction){
    
    case rover.direction = "N" :
      if (rover.y === 0){
       console.log ("You can't place Rover outside of the board!");
       console.log (`Rover current position is ${rover.x},${rover.y}`);
     }
     else if (grid[rover.y-1][rover.x] !=null ) {
      //report the obstacle as found
        console.log ("Rover can crash with an obstacle! STOP!");
        console.log (`Rover current position is ${rover.x},${rover.y}`);
      }
     else if ((rover.y-1 == rover2.y) && (rover.x == rover2.x)){
       console.log("Rover can crash with another Rover! STOP!");
       console.log (`Rover current position is ${rover.x},${rover.y}`);
     } 
     else {
       rover.y--;
       rover["travelLog"].push([rover.x,rover.y]);
       console.log (`The last positions of the Rover are: ${rover.travelLog}`);
       console.log (`Rover current position is ${rover.x},${rover.y}`);
     }
    break;
    
    case rover.direction = "S" :
      if (rover.y === 9){
       console.log ("You can't place Rover outside of the board!");
       console.log (`Rover current position is ${rover.x}${rover.y}`);
     }
      else if (grid[rover.y+1] != null) {
        console.log ("Rover can crash with an obstacle! STOP!");
        console.log (`Rover current position is ${rover.x},${rover.y}`);
      } 
      else if ((rover.y+1 == rover2.y) && (rover.x == rover2.x)){
       console.log("Rover can crash with another Rover! STOP!");
       console.log (`Rover current position is ${rover.x},${rover.y}`);
     } 
        else {
       rover.y++;
       rover["travelLog"].push([rover.x,rover.y]);
       console.log (`The last positions of the Rover are: ${rover.travelLog}`);
       console.log (`Rover current position is ${rover.x},${rover.y}`); 
     }
    break;
      
    case rover.direction = "W" :
      if (rover.x === 0){
       console.log ("You can't place Rover outside of the board!");
       console.log (`Rover current position is ${rover.x},${rover.y}`);
     }
      else if (grid[rover.x-1] != null) {
        console.log ("Rover can crash with an obstacle! STOP!");
        console.log (`Rover current position is ${rover.x},${rover.y}`);
      }
      else if ((rover.x-1 == rover2.x) && (rover.y == rover2.y)){
       console.log("Rover can crash with another Rover! STOP!");
       console.log (`Rover current position is ${rover.x},${rover.y}`);
     } 
      else {
       rover.x--;
       rover["travelLog"].push([rover.x,rover.y]);
       console.log (`The last positions of the Rover are: ${rover.travelLog}`);
       console.log (`Rover current position is ${rover.x},${rover.y}`); 
     }
    break;
      
    case rover.direction = "E" :
      if (rover.x === 0){
       console.log ("You can't place Rover outside of the board!");
       console.log (`Rover current position is ${rover.x},${rover.y}`);
     }
      else if (grid[rover.x+1] != null) {
        console.log ("Rover can crash with an obstacle! STOP!");
        console.log (`Rover current position is ${rover.x},${rover.y}`);
      }
      else if ((rover.x-1 == rover2.x) && (rover.y == rover2.y)){
       console.log("Rover can crash with another Rover! STOP!");
       console.log (`Rover current position is ${rover.x},${rover.y}`);
     } 
      else {
       rover.x++;
       rover["travelLog"].push([rover.x,rover.y]); 
       console.log (`The last positions of the Rover are: ${rover.travelLog}`); 
       console.log (`Rover current position is ${rover.x},${rover.y}`); 
     }
    break;  
 }
}


//For testing before i set the position of the rover in the middle of the grid
//moveForward(rover);
//moveForward(rover);
//moveForward(rover);
//moveForward(rover);


//Create another function called moveBackward() that will move the rover back. This will be very similar to the moveForward() function.
function moveBackward(rover){
  console.log("moveBackward was called");
  switch (rover.direction){
    
    case rover.direction = "N" :
      if (rover.y === 9){
       console.log ("You can't place Rover outside of the board!");
       console.log (`Rover position is ${rover.x},${rover.y}`);
     }
      else if (grid[rover.y+1][rover.x] !=null ) {
      //report the obstacle as found
        console.log ("Rover can crash with an obstacle! STOP!");
        console.log (`Rover current position is ${rover.x},${rover.y}`);
      }
     else if ((rover.y+1 == rover2.y) && (rover.x == rover2.x)){
       console.log("Rover can crash with another Rover! STOP!");
       console.log (`Rover current position is ${rover.x},${rover.y}`);
     } 
     else {
       rover.y++;
       rover["travelLog"].push([rover.x,rover.y]);
       console.log (`The last positions of the Rover are: ${rover.travelLog}`);
       console.log (`Rover position is ${rover.x},${rover.y}`);
     }
    break;
    
    case rover.direction = "S" :
      if (rover.y === 0){
       console.log ("You can't place Rover outside of the board!");
       console.log (`Rover position is ${rover.x},${rover.y}`);
     }
      else if (grid[rover.y-1][rover.x] !=null ) {
      //report the obstacle as found
        console.log ("Rover can crash with an obstacle! STOP!");
        console.log (`Rover current position is ${rover.x},${rover.y}`);
      }
     else if ((rover.y-1 == rover2.y) && (rover.x == rover2.x)){
       console.log("Rover can crash with another Rover! STOP!");
       console.log (`Rover current position is ${rover.x},${rover.y}`);
     } 
      else {
       rover.y--;
       rover["travelLog"].push([rover.x,rover.y]);
       console.log (`The last positions of the Rover are: ${rover.travelLog}`);
       console.log (`Rover position is ${rover.x},${rover.y}`); 
     }
    break;
      
    case rover.direction = "W" :
      if (rover.x === 9){
       console.log ("You can't place Rover outside of the board!");
       console.log (`Rover position is ${rover.x},${rover.y}`);
     }
      else if (grid[rover.x+1][rover.y] !=null ) {
      //report the obstacle as found
        console.log ("Rover can crash with an obstacle! STOP!");
        console.log (`Rover current position is ${rover.x},${rover.y}`);
      }
     else if ((rover.x+1 == rover2.x) && (rover.y == rover2.y)){
       console.log("Rover can crash with another Rover! STOP!");
       console.log (`Rover current position is ${rover.x},${rover.y}`);
     } 
      else {
       rover.x++;
       rover["travelLog"].push([rover.x,rover.y]);
       console.log (`The last positions of the Rover are: ${rover.travelLog}`);
       console.log (`Rover position is ${rover.x},${rover.y}`); 
     }
    break;
      
    case rover.direction = "E" :
      if (rover.x === 9){
       console.log ("You can't place Rover outside of the board!");
       console.log (`Rover position is ${rover.x},${rover.y}`);
     }
      else if (grid[rover.x-1][rover.y] !=null ) {
      //report the obstacle as found
        console.log ("Rover can crash with an obstacle! STOP!");
        console.log (`Rover current position is ${rover.x},${rover.y}`);
      }
     else if ((rover.x-1 == rover2.x) && (rover.y == rover2.y)){
       console.log("Rover can crash with another Rover! STOP!");
       console.log (`Rover current position is ${rover.x},${rover.y}`);
     } 
      else {
       rover.x--;
       rover["travelLog"].push([rover.x,rover.y]);
       console.log (`The last positions of the Rover are: ${rover.travelLog}`);
       console.log (`Rover position is ${rover.x},${rover.y}`); 
     }
    break;  
 }
}

//moveBackward(rover);
//moveBackward(rover);
//moveBackward(rover);
//moveBackward(rover);


//create a function to receive a list of commands and move based off of those commands.

var listOfCommands = ["r","f","f","r","f","f","l","f","r","f","f"];

function commands(listOfCommands){
  for (var i=0; i<listOfCommands.length; i++){
    switch (listOfCommands[i]) {
      case "f":
      moveForward(rover);
      break;
      case "r":
      turnRight(rover);
      break;
      case "l":
      turnLeft(rover);
      break;
      case "b":
      moveBackward(rover);
      break;
   //Bonus3: Add validation so that the inputs must be f, b, r, or l
      default:
      console.log("Only this commands are possible: l, r, b or f");
      break;
    }
  } 
}

//commands(listOfCommands);