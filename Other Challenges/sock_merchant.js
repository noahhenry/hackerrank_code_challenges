// Using an Object
console.time("obj")
const n = 10
const ar = [1,2,1,1,2,3,4,3,2,1]

let pairsCount = 0

const colors = {};
for (let i = 0; i < n; i++) {
  if (colors.hasOwnProperty(ar[i])) {
    pairsCount ++
    delete colors[ar[i]]
  } else {
    colors[ar[i]] = 0
  }

  console.log("Colors Obj.", colors)
}

console.log("Pairs Count:", pairsCount)
console.timeEnd("obj")

console.log("-------------------------")

// Using a Hash Table/Set() w/'for of' loop
console.time("set")
const ar2 = [1,2,1,1,2,3,4,3,2,1]

let pairsCount2 = 0
let colorsSet = new Set()

for (item of ar2) {
  if (colorsSet.has(item)) {
    // console.log("I'm already here...")
    pairsCount2 ++
    colorsSet.delete(item)
  } else {
    // console.log("No item found.")
    colorsSet.add(item)
  }
  console.log("Colors Set:", colorsSet)
}

console.log("Pairs Count 2:", pairsCount2)
console.timeEnd("set")

console.log("-------------------------")

// Using a Hash Table/Set() w/a traditioinal for loop
console.time("set3")
const ar3 = [1,2,1,1,2,3,4,3,2,1]

let pairsCount3 = 0
let colorsSet3 = new Set()

for (let i = 0; i < n; i++) {
  let item = ar3[i]
  if (colorsSet3.has(item)) {
    // console.log("I'm already here...")
    pairsCount3 ++
    colorsSet3.delete(item)
  } else {
    // console.log("No item found.")
    colorsSet3.add(item)
  }
  console.log("Colors Set:", colorsSet3)
}

console.log("Pairs Count 3:", pairsCount3)
console.timeEnd("set3")

