// 0 = safe, 1 = danger/game over...

// *Passed
// let c = [0, 0, 1, 0, 0, 1, 0] // expected output = 4
// *Passed
let c = [0,0,0,0,1,0] // expected output = 3

function jumpingOnClouds(c) {
  let minJumpsCount = 0
  let arrLength = c.length

  for (let i = 0; i < arrLength-1;) {
    // can jump 2?
    if (c[i + 2] == 0) {
      minJumpsCount++
      // jump 2
      i = i + 2
    } else {
      minJumpsCount++
      // jump 1
      i++
    }
  }
  console.log(minJumpsCount)
}

jumpingOnClouds(c)