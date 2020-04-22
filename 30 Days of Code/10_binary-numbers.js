/*
Given a base- integer, 'n', convert it to binary (base-'2').
Then find and print the base-'10' integer denoting the maximum number of consecutive '1's in 'n's binary representation.
*/

function processData(number) {
  // convert number to bianary
  let bianaryNumber = parseInt(number, 10).toString(2)

  // count the number of consecutive 1's
  let result = function countConsectutive1s() {
    let highestCount = 0
    let consecutive1sCount = 0
    let length = bianaryNumber.length
    let previous = ""

    for (let i = 0; i < length; i++) {
      if (!previous.length) {
        previous = bianaryNumber.charAt(i)
        if (previous == "1") {
          consecutive1sCount++
        }
      } else {
        if (bianaryNumber.charAt(i) == "1" && previous == "1") {
          consecutive1sCount++
        } else {
          consecutive1sCount = 0
        }
      }
      if (highestCount < consecutive1sCount) {
        highestCount = consecutive1sCount
      }
    }

    return highestCount
  }()

  // return the count
  return result
}

console.log(processData(5))
console.log(processData(13))