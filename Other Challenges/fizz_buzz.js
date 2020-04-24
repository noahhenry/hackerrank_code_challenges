const n = [1,3,15,4,5,16,21,100,223]
const arrLength = n.length

console.time("For of")
for (item of n) {
  if (((item % 3) == 0) && ((item % 5) == 0)) {
    console.log("FizzBuzz")
  } else if ((item % 3) == 0) {
    console.log("Fizz")
  } else if ((item % 5) == 0) {
    console.log("Buzz")
  } else {
      console.log(item)
  }
}
console.timeEnd("For of")

console.log("---------------------")

console.time("Traditional for loop")
for (let i = 0; i < arrLength; i++) {
  let item = n[i]
  if (item % 3 == 0 && item % 5 == 0) {
    console.log("FizzBuzz")
  } else if (item % 3 == 0) {
    console.log("Fizz")
  } else if (item % 5 == 0) {
    console.log("Buzz")
  } else {
      console.log(item)
  }
}
console.timeEnd("Traditional for loop")
