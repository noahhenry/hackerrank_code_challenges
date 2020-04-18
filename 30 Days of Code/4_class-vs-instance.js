/*
Write a Person class with an instance variable, 'age', and a constructor that takes an integer, 'initialAge', as a parameter.
The constructor must assign 'initialAge' to 'age' after confirming the argument passed as 'initialAge' is not negative;
if a negative argument is passed as 'initialAge', the constructor should set 'age' to '0' and print "Age is not valid, setting age to 0.".

In addition, you must write the following instance methods:
1. yearPasses() should increase the  instance variable by .
2. amIOld() should perform the following conditional actions:
  - If 'age' < 13, print "You are young.".
  - If 'age' >= 13 and < 18, print "You are a teenager.".
  - Otherwise, print "You are old.".
*/

var input_currentline = 0;

function Person(initialAge) {
  // Add some more code to run some checks on initialAge
  if (initialAge < 0) {
    console.log("Age is not valid, setting age to 0.")
    initialAge = 0
  }
  this.amIOld = function () {
    // Do some computations in here and print out the correct statement to the console
    if (initialAge < 13) {
      console.log("You are young.")
    } else if (initialAge >= 13 && initialAge < 18) {
      console.log("You are a teenager.")
    } else {
      console.log("You are old.")
    }

  };
  this.yearPasses = function () {
    // Increment the age of the person in here
    initialAge++
  };
}

function main(input) {

  // T, being the first item in the array represents the "number of test cases"
  var T = input[input_currentline++];
  for (i = 0; i < T; i++) {
    var age = input[input_currentline++];
    var p = new Person(age);
    p.amIOld();
    for (j = 0; j < 3; j++) {
      p.yearPasses();

    }
    p.amIOld();
    console.log("");
  }

}

main([4, -1, 10, 16, 18])