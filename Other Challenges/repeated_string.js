function repeatedString(s, n) {
  let strLength = s.length
  let regex = /a/g // find all characters that match "a" within a given string
  
  let charCountInS = s.match(regex).length
  console.log("CCIS:", charCountInS)

  // The number of times s can be repeated within n
  let numberOfPossibleRepeats = Math.floor(n / strLength)
  console.log("NOPR:", numberOfPossibleRepeats)

  let charCountInBaseStr = charCountInS * numberOfPossibleRepeats

  // find remainder
  let remainderRepeatCount = n % numberOfPossibleRepeats
  console.log("RRC:", remainderRepeatCount)

  // get character count in remainder string
  let remainderCharCount = (s.substring(0, remainderRepeatCount).match(regex) || []).length
  console.log("RCC:", remainderRepeatCount)

  // return repeatCount + remainderCount
  return charCountInBaseStr + remainderCharCount
}

// *Passed
console.log("Result 1:", repeatedString("aba", 10))
console.log("Result 2:", repeatedString("aba", 11))
console.log("Result 3:", repeatedString("a", 1000000000000)) // 1000000000000
console.log("Result 4:", repeatedString("abcac", 10))

// !Failed on HackerRank
// console.log("Hacker Rank Test case 3:", repeatedString("ceebbcb", 817723))
// -> returns null above

// cleaned up
function repeatedString2(s, n) {
  let strLength = s.length
  let regex = /a/g

  if (strLength < n) {
    let charCountInS = (s.match(regex) || []).length
    let numberOfPossibleSRepeats = Math.floor(n / strLength)
    let charCountInBaseStr = charCountInS * numberOfPossibleSRepeats
    let remainderCount = n % numberOfPossibleSRepeats
    let charCountInRemainderStr = (s.substring(0, remainderCount).match(regex) || []).length

    return charCountInBaseStr + charCountInRemainderStr
  } else {
    let matchesInS = (s.substring(0, n).match(regex) || []).length

    return matchesInS
  }
}

// *Passed
console.log("Hacker Rank Test case 3:", repeatedString2("ceebbcb", 817723))
// -> Output should be 0

// *Passed
console.log("Hacker Rank Test case 22:", repeatedString2("ababa", 3))
// -> output should be 2
