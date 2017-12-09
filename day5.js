// part1 simulation

input = [0,3,0,1,-3]
pointer = 0;
counter = 0;

while(pointer>=0 && pointer<=input.length) {
  instruction = input[pointer]
  input[pointer] = input[pointer]+1
  pointer += instruction
  counter++;
}

console.log(counter-1);

// part 2 lol

pointer = 0;
counter = 0;

while(pointer>=0 && pointer<=input.length) {
  counter++;
  instruction = input[pointer]
  pointer += instruction
  if (instruction >= 3) {
    input[pointer-instruction] = input[pointer-instruction]-1
  } else {
    input[pointer-instruction] = input[pointer-instruction]+1
  }
}

console.log(counter-1);
