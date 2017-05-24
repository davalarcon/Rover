var myRover = {
  position: [0,0],
  direction: 'N'
};

function goForward(rover) {
  switch(rover.direction) {
    case 'N':
      rover.position[0]++;
      break;
    case 'E':
      rover.position[1]++;
      break;
    case 'S':
      rover.position[0]--;
      break;
    case 'W':
      rover.position[1]--;
      break;
  }

  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]");
}

function turnRight(rover) {
  switch(rover.direction) {
   case 'N':
     rover.direction="E";
    break;
   case 'E':
     rover.direction="S";
     break;
   case 'S':
     rover.direction="W";
     break;
   case 'W':
     rover.direction="N";
     break;
  }

  console.log("New Rover facing Direction: [" + rover.direction + "]");
}
function turnLeft(rover) {
  switch(rover.direction) {
   case 'N':
     rover.direction="W";
    break;
   case 'E':
     rover.direction="N";
     break;
   case 'S':
     rover.direction="E";
     break;
   case 'W':
     rover.direction="S";
     break;
  }

  console.log("New Rover facing Direction: [" + rover.direction + "]");
}

function goBackwards(rover) {
  switch(rover.direction) {
    case 'N':
      rover.position[0]--;
      break;
    case 'E':
      rover.position[1]--;
      break;
    case 'S':
      rover.position[0]++;
      break;
    case 'W':
      rover.position[1]++;
      break;
  }

  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]");
}

var commands = "fffrfflffbb";

switch (commands[0]) {
  case "f":
    console.log(goForward(myRover));
    break;
  case "b":
    console.log(goBackwards(myRover));
    break;
    case "r":
      console.log(turnRight(myRover));
      break;
    case "l":
      console.log(turnLeft(myRover));
      break;
  default:
    console.log("don't understand which direction you want to go");
}

switch (commands[1]) {
  case "f":
    console.log(goForward(myRover));
    break;
  case "b":
    console.log(goBackwards(myRover));
    break;
    case "r":
      console.log(turnRight(myRover));
      break;
    case "l":
      console.log(turnLeft(myRover));
      break;
  default:
    console.log("don't understand which direction you want to go");
}

switch (commands[2]) {
  case "f":
    console.log(goForward(myRover));
    break;
  case "b":
    console.log(goBackwards(myRover));
    break;
    case "r":
      console.log(turnRight(myRover));
      break;
    case "l":
      console.log(turnLeft(myRover));
      break;
  default:
    console.log("don't understand which direction you want to go");
}

switch (commands[3]) {
  case "f":
    console.log(goForward(myRover));
    break;
  case "b":
    console.log(goBackwards(myRover));
    break;
    case "r":
      console.log(turnRight(myRover));
      break;
    case "l":
      console.log(turnLeft(myRover));
      break;
  default:
    console.log("don't understand which direction you want to go");
}

switch (commands[4]) {
  case "f":
    console.log(goForward(myRover));
    break;
  case "b":
    console.log(goBackwards(myRover));
    break;
    case "r":
      console.log(turnRight(myRover));
      break;
    case "l":
      console.log(turnLeft(myRover));
      break;
  default:
    console.log("don't understand which direction you want to go");
}

switch (commands[5]) {
  case "f":
    console.log(goForward(myRover));
    break;
  case "b":
    console.log(goBackwards(myRover));
    break;
    case "r":
      console.log(turnRight(myRover));
      break;
    case "l":
      console.log(turnLeft(myRover));
      break;
  default:
    console.log("don't understand which direction you want to go");
}

switch (commands[6]) {
  case "f":
    console.log(goForward(myRover));
    break;
  case "b":
    console.log(goBackwards(myRover));
    break;
    case "r":
      console.log(turnRight(myRover));
      break;
    case "l":
      console.log(turnLeft(myRover));
      break;
  default:
    console.log("don't understand which direction you want to go");
}

switch (commands[7]) {
  case "f":
    console.log(goForward(myRover));
    break;
  case "b":
    console.log(goBackwards(myRover));
    break;
    case "r":
      console.log(turnRight(myRover));
      break;
    case "l":
      console.log(turnLeft(myRover));
      break;
  default:
    console.log("don't understand which direction you want to go");
}

switch (commands[8]) {
  case "f":
    console.log(goForward(myRover));
    break;
  case "b":
    console.log(goBackwards(myRover));
    break;
    case "r":
      console.log(turnRight(myRover));
      break;
    case "l":
      console.log(turnLeft(myRover));
      break;
  default:
    console.log("don't understand which direction you want to go");
}

switch (commands[9]) {
  case "f":
    console.log(goForward(myRover));
    break;
  case "b":
    console.log(goBackwards(myRover));
    break;
    case "r":
      console.log(turnRight(myRover));
      break;
    case "l":
      console.log(turnLeft(myRover));
      break;
  default:
    console.log("don't understand which direction you want to go");
}

switch (commands[10]) {
  case "f":
    console.log(goForward(myRover));
    break;
  case "b":
    console.log(goBackwards(myRover));
    break;
    case "r":
      console.log(turnRight(myRover));
      break;
    case "l":
      console.log(turnLeft(myRover));
      break;
  default:
    console.log("don't understand which direction you want to go");
}

switch (commands[11]) {
  case "f":
    console.log(goForward(myRover));
    break;
  case "b":
    console.log(goBackwards(myRover));
    break;
    case "r":
      console.log(turnRight(myRover));
      break;
    case "l":
      console.log(turnLeft(myRover));
      break;
  default:
    console.log("don't understand which direction you want to go");
}
