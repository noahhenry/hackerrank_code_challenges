/*
Complete the code in the editor below. The variables i, d, and s are already declared and initialized for you. You must:

1. Declare 3 variables: one of type int, one of type double, and one of type String.
2. Read 3 lines of input from stdin (according to the sequence given in the Input Format section below) and initialize your 3 variables.
3. Use the + operator to perform the following operations:
    1. Print the sum of i plus your int variable on a new line.
    2. Print the sum of d plus your double variable to a scale of one decimal place on a new line.
    3. Concatenate s with the string you read as input and print the result on a new line.
*/

var input_array = [12, 4.0, "is the best place to learn and practice coding!"];
var input_currentline = 0;

// Reads complete line from input_array
function readLine() {
    return input_array[input_currentline++];
}

function main() {
    var i = 4
    var d = 4.0
    var s = "HackerRank "
    
    // Declare second integer, double, and String variables.
    let myInt
    let myDouble
    let myString

    // Read and save an integer, double, and String to your variables.
    myInt = parseInt(readLine())
    myDouble = parseFloat(readLine())
    myString = readLine()

    // Print the sum of both integer variables on a new line.
    console.log(i + myInt)

    // Print the sum of the double variables on a new line.
    console.log((d + myDouble).toFixed(1))

    // Concatenate and print the String variables on a new line
    // The 's' variable above should be printed first.
    console.log(s + myString)

}

main()