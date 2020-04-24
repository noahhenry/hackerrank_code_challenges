function findOddNumbers (l, r) {
  let odds = []

  for (let i = l; i <= r; i++) {
    if (i % 2 == 1) {
      odds.push(i)
    }
  }

  return odds
}

console.log(findOddNumbers(2, 7))
console.log(findOddNumbers(1, 7))
console.log(findOddNumbers(0, 22))
console.log(findOddNumbers(-5, -1))
