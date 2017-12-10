// part1

// done by hands

// part2 - simulation

PRELOAD_LEVEL=4
level = 0;
coord = [0,0];
spiral = new Map();

function n(c) {
  return spiral.has(String(c)) ? spiral.get(String(c)) : 0;
}

function updateSpiral() {
  if (level == 0) {
    return spiral.set(String(coord), 1);
  }
  // get the value and set spiral
  let c1 = [coord[0]-1, coord[1]+1];
  let c2 = [coord[0], coord[1]+1];
  let c3 = [coord[0]+1, coord[1]+1];
  let c4 = [coord[0]-1, coord[1]];
  let c6 = [coord[0]+1, coord[1]];
  let c7 = [coord[0]-1, coord[1]-1];
  let c8 = [coord[0], coord[1]-1];
  let c9 = [coord[0]+1, coord[1]-1];
  return spiral.set(String(coord), n(c1) + n(c2) + n(c3) + n(c4) + n(c6) + n(c7) + n(c8) + n(c9));
}

// preload simulation
while(level<=PRELOAD_LEVEL) {
  // start a spiral loop
  while(true) {

    // update the spiral find the current position
    updateSpiral();
    console.log(coord, spiral.get(String(coord)));

    // end of current spiral level
    if(coord[0]==level && coord[1]==-level) {
      // jump to next level
      level++;
      coord = [coord[0]+1, coord[1]];
      break;
    }
    // going right +x, left bottom corner
    else if((coord[0]>=-level && coord[0]<=level) && coord[1]==-level) {
      coord = [coord[0]+1, coord[1]];
    }    
    // going down -y, left upper corner
    else if(coord[0]==-level && (coord[1]>=-level && coord[1]<=level)) {
      coord = [coord[0], coord[1]-1];
    }
    // going left -x, right upper corner
    else if((coord[0]>=-level && coord[0]<=level) && coord[1]==level) {
      coord = [coord[0]-1, coord[1]];
    }
    // going up +y
    else {
      coord = [coord[0], coord[1]+1];
    }
  }
}
