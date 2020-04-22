/*
Given an integer, n, perform the following conditional actions:
- If n is odd, print Weird
- If n is even and in the inclusive range of 2 to 5, print Not Weird
- If n is even and in the inclusive range of 6 to 20, print Weird
- If n is even and greater than 20, print Not Weird
*/

let inputString = '3';
let currentLine = 0;

function convertInputStringToArray() {
  inputString = inputString.replace(/\s*$/, '')
                           .split('\n')
                           .map(str => str.replace(/\s*$/, ''));
}

function readLine() {
  return inputString[currentLine++];
}

function conditons(n) {
  if (n % 2 == 1) {
      console.log("Weird")
  } else {
      if (n >= 2 && n <= 5) {
          console.log("Not Weird")
      } else if (n >= 6 && n <= 20) {
          console.log("Weird")
      } else if (n > 20) {
          console.log("Not Weird")
      }
  }
}

function main() {
  const N = parseInt(readLine(), 10);
  conditons(N)
}
main()

// Testing other conditions...
conditons(24)
conditons(16)
conditons(4)