/*
Context
Given a "6x6" 2D Array, 'A':
1 1 1 0 0 0
0 1 0 0 0 0
1 1 1 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0

We define an hourglass in 'A' to be a subset of values with indices falling in this pattern in 'A's graphical representation:
a b c
  d
e f g

There are '16' hourglasses in 'A', and an hourglass sum is the sum of an hourglass' values.

Task
Calculate the hourglass sum for every hourglass in 'A', then print the maximum hourglass sum.

Input Format
There are '6' lines of input, where each line contains '6' space-separated integers describing 2D Array 'A';
every value in 'A' will be in the inclusive range of '-9' to '9'.
*/

/*
x == row
y == column
arr = [
x y 0  1  2  3  4  5
0  [1, 1, 1, 0, 0, 0],
1  [0, 1, 0, 0, 0, 0],
2  [1, 1, 1, 0, 0, 0],
3  [0, 0, 2, 4, 4, 0],
4  [0, 0, 0, 2, 0, 0],
5  [0, 0, 1, 2, 4, 0]
]
*/

// // Test Case 1
// const twoDementionalArray = [
//   [1, 1, 1, 0, 0, 0],
//   [0, 1, 0, 0, 0, 0],
//   [1, 1, 1, 0, 0, 0],
//   [0, 0, 2, 4, 4, 0],
//   [0, 0, 0, 2, 0, 0],
//   [0, 0, 1, 2, 4, 0]
// ] // output == 19

// // Test Case 3
// const twoDementionalArray = [
//   [-1, -1,  0, -9, -2, -2],
//   [-2, -1, -6, -8, -2, -5],
//   [-1, -1, -1, -2, -3, -4],
//   [-1, -9, -2, -4, -4, -5],
//   [-7, -3, -3, -2, -9, -9],
//   [-1, -3, -1, -2, -4, -5]
// ] // output == -6

// Test Case 7
const twoDementionalArray = [
  [ 0, -4, -6,  0, -7, -6],
  [-1, -2, -6, -8, -3, -1],
  [-8, -4, -2, -8, -8, -6],
  [-3, -1, -2, -5, -7, -4],
  [-3, -5, -3, -6, -6, -6],
  [-3, -6,  0, -8, -6, -7]
] // output == -19

const hourGlassShapes = {
  topAndBottom: 3,
  middle: 1
}

function solve(twoDementionalArray) {
  let maxHourGlassSum = null // initialized to null to account for negative numbers

  let columnStartIndex = 0
  let rowCounter = 0 // determins if the shape can be applied
  let columnCounter = 0 // determins if the shape can be applied

  let hourGlassHeight = 3
  let hourGlassWidth = 3

  let numberOfRows = twoDementionalArray.length

  // solve for row (x-axis)
  // loop over rows
  for (let x = 0; x < numberOfRows; x++) {
    let numberOfColumns = twoDementionalArray[x].length
    
    // check if hourGlassHeight can go into numberOfRows
    if (numberOfRows - rowCounter >= hourGlassHeight) {
      
      // solve for column (y-axis)
      // loop over columns
      for (let y = 0; y < numberOfColumns; y++) {
        // initialize hourGlassArray
        let tempHourGlassArray = []

        // check if hourGlassWidth can go into numberOfColumns
        if (numberOfColumns - columnCounter >= hourGlassWidth) {
          
          // compile hour glass
          let index = 0
          while(index < 3) {
            // Get "top"
            if(index == 0) {
              let topResult = getHourGlassValuesByShape("top", twoDementionalArray[rowCounter + index], columnStartIndex)
              tempHourGlassArray = tempHourGlassArray.concat(topResult)
            }
            // Get "middle"
            else if (index == 1) {
              let middleResult = getHourGlassValuesByShape("middle", twoDementionalArray[rowCounter + index], columnStartIndex)
              tempHourGlassArray = tempHourGlassArray.concat(middleResult)
            }
            // Get "bottom"
            else {
              let bottomResult = getHourGlassValuesByShape("bottom", twoDementionalArray[rowCounter + index], columnStartIndex)
              tempHourGlassArray = tempHourGlassArray.concat(bottomResult)
            }
            index++
          }

          // set maxHourGlassSum
          let hourGlassSum = tempHourGlassArray.reduce((a,b) => a + b, 0)
          if (maxHourGlassSum == null) {
            maxHourGlassSum = hourGlassSum
          } else if (maxHourGlassSum < hourGlassSum) {
            maxHourGlassSum = hourGlassSum
          }

        } else {
          // reset columnCounter to "0"
          columnCounter = 0
          // reset columnStartIndex
          columnStartIndex = 0
          // boot out to "row" loop...
          break
        }

        // increase columnCounter by "1"
        columnCounter++
        // increase columnStartIndex by "1"
        columnStartIndex++
      }

    } else {
      // done... exit "row" loop...
      break
    }

    // increase rowCounter by "1"
    rowCounter++
  }
  
  console.log(maxHourGlassSum)
}

function getHourGlassValuesByShape(shape, arrayToModify, columnIndex) {
  if (shape == "top" || shape == "bottom") {
    return arrayToModify.slice(0 + columnIndex, hourGlassShapes.topAndBottom + columnIndex)
  } else {
    return arrayToModify.slice(1 + columnIndex, hourGlassShapes.middle + 1 + columnIndex)
  }
}

solve(twoDementionalArray)
