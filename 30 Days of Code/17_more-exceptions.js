/*
Write a Calculator class with a single method: int power(int,int). The power method takes two integers, 'n' and 'p', as parameters and returns the integer result of 'n^p'. If either 'n' or 'p' is negative, then the method must throw an exception with the message: "n and p should be non-negative".

Note: Do not use an access modifier (e.g.: public) in the declaration for your Calculator class.
*/

class Calculator {
  constructor() {
  }

  power(n, p) {
    try {
      if (n < 0 || p < 0) throw new Error("n and p should be non-negative")
      console.log(Math.pow(n, p))
      // return Math.pow(n, p)
    } catch (error) {
      console.log(error.message)
      // return error.message
    }
  }
}

let power1 = new Calculator()
power1.power(2, 2)
power1.power(-1, 2)