/*
Task:
Given a string, 'S', of length 'N' that is indexed from '0' to 'N - 1',
print its even-indexed and odd-indexed characters as '2' space-separated strings on a single line (see the Sample below for more detail).

Note: '0' is considered to be an even index.

Input Format:
The first line contains an integer, 'T' (the number of test cases).
Each line 'i' of the 'T' subsequent lines contain a String, 'S'.
*/

let input = `2
Hacker
Rank`

function processData(input) {
  //Enter your code here
  let inputArr = input.split("\n")

  let T = inputArr[0]
  for (let i = 1; i <= T; i++) {
    let S = inputArr[i]
    let evenStr = ""
    let oddStr = ""

    let length = S.length
    for (let j = 0; j < length; j++) {
      if (j % 2 === 0) {
        evenStr = evenStr.concat(S.charAt(j))
      } else {
        oddStr = oddStr.concat(S.charAt(j))
      }
    }

    console.log(`${evenStr} ${oddStr}`)
  }
}

processData(input)