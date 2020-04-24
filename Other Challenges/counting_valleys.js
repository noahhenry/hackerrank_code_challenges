// *Passed
// const n = 12
// const s = "DDUUDDUDUUUD" // expected output = 2  

// *Passed
// const n = 8
// const s = "UDDDUDUU" // expected output = 1

// !FAILED
// const n = 10
// const s = "DDUDDUUDUU" // expected output = 1

// function countingValleys(n, s) {
//   let valleyCount = 0
//   let elevation = 0
//   let direction // true = U, false = D
//   let lastDirection // true = U, false = D

//   for (let i = 0; i < n; i++) {
//     if (s.charAt(i) == "U") {
//       elevation++
//       direction = true
//     } else if (s.charAt(i) == "D") {
//       elevation--
//       direction = false
//     }

//     if (elevation < -1 && lastDirection == direction) {
//       // we are in a valley & we have a consecutive direction movment
//       valleyCount++
//     }

//     lastDirection = direction
//   }

//   console.log(valleyCount)
// }

// countingValleys(n, s)

// ? It does not appear that the requirment to track 'consecutive' steps bellow sea
// ? level is literal...
// todo: Attempt #2

// *Passed
// const n = 10
// const s = "DDUDDUUDUU" // expected output = 1

const n = 10
const s = "DDUUUDDUUD" // expected output = 2

function countingValleys(n, s) {
  let valleyCount = 0
  let elevation = 0
  let previousElevation = 0

  for (let i = 0; i < n; i++) {
    if (s.charAt(i) == "U") {
      elevation++
    } else if (s.charAt(i) == "D") {
      elevation--
    }

    if (previousElevation == -1 && elevation == 0) {
      valleyCount++
    }

    previousElevation = elevation
  }

  console.log(valleyCount)
}

countingValleys(n, s)