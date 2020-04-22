/*
Given an array, 'A', of 'N' integers, print 'A's elements in reverse order as a single line of space-separated numbers.

Input Format
The first line contains an integer, 'N' (the size of our array).
The second line contains 'N' space-separated integers describing array 'A's elements.
*/

// let n = 4
// let arr = [1, 4, 3, 2]

function reorder (n, arr) {
  let reverseArr = arr.reverse()
  let reverseStr = ""

  for (let i = 0; i < n; i++) {
    reverseStr += `${reverseArr[i]} `
  }

  console.log(reverseStr)
}

reorder(4, [1, 4, 3, 2])