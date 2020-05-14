// hackerrank.com does not support JavaScript for this problem...
// todo: Give it a go in Swift?

/*
Complete the Difference class by writing the following:
  A class constructor that takes an array of integers as a parameter and saves it to the 'elements' instance variable.
  A computeDifference method that finds the maximum absolute difference between any '2' numbers in 'N' and stores it in the 'maximumDifference' instance variable.
*/

// JavaScript Solution (if hackerrank supported it for this problem):
class Difference {
  constructor(elements) {
    this.elements = elements
    this.maximumDifference = null
  }

  computDifference() {
    for (let i = 0; i < this.elements.length; i++) {
      let base = this.elements[i]
      
      for (let j = i + 1; j < this.elements.length; j++) {
        let comparer = this.elements[j]
        let getDiff = function(a, b) { return Math.abs(a - b) }
        let diff = getDiff(base, comparer)

        if (diff > this.maximumDifference) {
          this.maximumDifference = diff
        }
      }
    }
  }
}

function solution(arr) {
  // const n = 3
  const a = arr
  
  const d = new Difference(a)
  d.computDifference()

  console.log(d.maximumDifference)
}
solution([1,2,5])
solution([4,6,12])
solution([8,19,3,2,7])
