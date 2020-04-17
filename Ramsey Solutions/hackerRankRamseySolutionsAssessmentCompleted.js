// finihsed test at 5:19 PM
// How much longer would it take to finish this?

// Continued to work on from 5:30PM -> 6:02PM == 32 extra minutes to get the rest of the conditonal logic done
// and sorting to work.

function formattedFriendListForBabyStep(babyStep, friends) {
  let friendsOnSameStep = []
  let friendsLength = friends.length

  // find friends on the same Baby Step
  for (let i = 0; i < friendsLength; i++) {
      let friend = friends[i]
      let friendsBabyStep = friend[2]

      // check if data is valid
      if (friendsBabyStep != null) {
          if (friend[2] == `${babyStep}`) {
            friendsOnSameStep.push(friend)
          }
      }
  }
  console.log(friendsOnSameStep)

  let sortedFriends = sortFriendsOnSameStep(friendsOnSameStep)
  console.log("Sorted Friends:", sortedFriends)

  if (sortedFriends.length == 0) {
    console.log(`None of your friends are in Baby Step ${babyStep}.`)
    return `None of your friends are in Baby Step ${babyStep}.`
  } else if (sortedFriends.length == 1) {
    let friend = sortedFriends[0]
    console.log(`${friend[0]} ${friend[1]} is also in Baby Step ${babyStep}.`)
    return `${friend[0]} ${friend[1]} is also in Baby Step ${babyStep}.`
  } else if (sortedFriends.length == 2) {
    let friend1 = ""
    let friend2 = ""

    for (let i = 0; i < 2; i++) {
      if (i == 1) {
        let getFriend = sortedFriends[i]
        friend1 = `${getFriend[0]} ${getFriend[1]}`
      } else {
        let getFriend = sortedFriends[i]
        friend2 = `${getFriend[0]} ${getFriend[1]}`
      }
    }
    console.log(`${friend1} ard ${friend2} are also in Baby Step ${babyStep}.`)
    return `${friend1} and ${friend2} are also in Baby Step ${babyStep}.`
  } else if (sortedFriends.length == 3) {
    let friend1 = ""
    let friend2 = ""

    for (let i = 0; i < 2; i++) {
      if (i == 1) {
        let getFriend = sortedFriends[i]
        friend1 = `${getFriend[0]} ${getFriend[1]}`
      } else {
        let getFriend = sortedFriends[i]
        friend2 = `${getFriend[0]} ${getFriend[1]}`
      }
    }
    console.log(`${friend1}, ${friend2} and 1 other friend are also in Baby Step ${babyStep}.`)
    return `${friend1}, ${friend2} and 1 other friend are also in Baby Step ${babyStep}.`
  } else if (sortedFriends.length >= 4) {
    let friend1 = ""
    let friend2 = ""

    for (let i = 0; i < 2; i++) {
      if (i == 1) {
        let getFriend = sortedFriends[i]
        friend1 = `${getFriend[0]} ${getFriend[1]}`
      } else {
        let getFriend = sortedFriends[i]
        friend2 = `${getFriend[0]} ${getFriend[1]}`
      }
    }
    console.log(`${friend1}, ${friend2} and other friends are also in Baby Step ${babyStep}.`)
    return `${friend1}, ${friend2} and other friends are also in Baby Step ${babyStep}.`
  }

}

function sortFriendsOnSameStep (friendsOnSameStep) {
  return friendsOnSameStep.sort(function (a, b) { return a[1] > b[1] ? 1 : -1 })
}

formattedFriendListForBabyStep(2, [['Sharon', 'Thomas', '3'], ['Thomas', 'Harris', '3']])
formattedFriendListForBabyStep(2, [['Paul', 'Taylor', '2'], ['Sharon', 'Thomas', '3'], ['Thomas', 'Harris', '3']])
formattedFriendListForBabyStep(2, [['Bob', 'Young', '2'], ['Paul', 'Taylor', '2'], ['Sharon', 'Thomas', '3'], ['Thomas', 'Harris', '3']])
formattedFriendListForBabyStep(2, [['Bob', 'Young', '2'], ['Paul', 'Taylor', '2'], ['Sharon', 'Thomas', '3'], ['Thomas', 'Harris', '3'], ['Tom', 'Riddal', '2']])
formattedFriendListForBabyStep(2, [['Bob', 'Young', '2'], ['Paul', 'Taylor', '2'], ['Sharon', 'Thomas', '3'], ['Thomas', 'Harris', '3'], ['Tom', 'Riddal', '2'], ['Harry', 'Potter', '2']])

