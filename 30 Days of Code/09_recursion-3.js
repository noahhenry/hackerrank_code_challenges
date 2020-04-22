/*
Write a factorial function that takes a positive integer, 'N' as a parameter and prints the result of 'N!' ('N' factorial).
*/

// Complete the factorial function below.
function factorial(n) {
  if (n <= 1) { // base case)
      return 1 
  } else { // recursive case)
      return n * factorial(n - 1)
  }
}

console.log(factorial(3))
console.log(factorial(8))
console.log(factorial(9))