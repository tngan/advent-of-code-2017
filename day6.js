// part1

input = '11 11 13 7 0 15 5 5 4 4 1 1 7 1 15 11'.split(' ').map(Number).slice()

memory = new Set();

function distributor() {
  const p = input.indexOf(Math.max(...input)); 
  for(let i=input[p], j=0; i>=1; i--) {
    pointer = (p+(j++)+1)%input.length;
    input[p]--;
    input[pointer] += 1;
  }
}

function run() {
  while(true) {
    distributor();
    if (!memory.has(String(input.map(String)))) {
      memory.add(String(input.map(String)));
    } else {
      // part2 answer
      const found = [...memory].indexOf(String(input.map(String)));
      console.log('boom', [...memory].length - found);
      break;
    }
  }
  console.log([...memory].length+1);
}

run();
