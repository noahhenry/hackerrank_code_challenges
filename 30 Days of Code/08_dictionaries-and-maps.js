/*
Given 'n' names and phone numbers, assemble a phone book that maps friends' names to their respective phone numbers.
You will then be given an unknown number of names to query your phone book for.
For each 'name' queried, print the associated entry from your phone book on a new line in the form "name=phoneNumber"; if an entry for 'name' is not found, print "Not found" instead.

Note: Your phone book should be a Dictionary/Map/HashMap data structure.

Input Format:
The first line contains an integer, 'n', denoting the number of entries in the phone book.
Each of the 'n' subsequent lines describes an entry in the form of '2' space-separated values on a single line. The first value is a friend's name, and the second value is an '8'-digit phone number.

After the 'n' lines of phone book entries, there are an unknown number of lines of queries. Each line (query) contains a 'name' to look up, and you must continue reading lines until there is no more input.

Note: Names consist of lowercase English alphabetic letters and are first names only.
*/

function processData(input) {
  //Enter your code here
  let inputArr = input.split("\n")
  let dictionaryMap = new Map()
  let queries = []

  // get length for dictionary
  let n = inputArr[0]
  // get lenght of queries
  // - 1 for n does not count
  let q = (inputArr.length - 1) - n

  // create dictionary
  for (let i = 1; i <= n; i++) {
    let itemArr = inputArr[i].split(" ")
    dictionaryMap.set(`${itemArr[0]}`, `${itemArr[1]}`)
  }

  // create queries array
  for (let i = 1; i <= q; i++) {
    index = i + parseInt(n)
    item = inputArr[index]
    queries.push(item)
  }

  // query dictionary
  for (let i = 0; i < q; i++) {
    let item = queries[i]
    if (dictionaryMap.has(item)) {
      value = dictionaryMap.get(item)
      console.log(`${item}=${value}`)
    } else {
      console.log("Not found")
    }
  }
}

processData(`3
sam 99912222
tom 11122222
harry 12299933
sam
edward
harry`)