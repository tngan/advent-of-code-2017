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
