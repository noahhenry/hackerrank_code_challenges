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
  console.log(sortedFriends)

  if (sortedFriends.length == 0) {
    console.log(`None of your friends are in Baby Step ${babyStep}.`)
    return `None of your friends are in Baby Step ${babyStep}.`
  } else if (sortedFriends.length == 1) {
    let friend = sortedFriends[0]
    console.log(`${friend[0]} ${friend[1]} is also in Baby Step ${babyStep}.`)
    return `${friend[0]} ${friend[1]} is also in Baby Step ${babyStep}.`
  } else if (sortedFriends.length == 2) {
    let friend1 = ""
    for (let i = 0; i < 2; i++) {

      `${friend[0]} ${friend[1]} is also in Baby Step ${babyStep}.`
    }
    console.log(`${friend[0]} ${friend[1]} is also in Baby Step ${babyStep}.`)
    return `${friend[0]} ${friend[1]} is also in Baby Step ${babyStep}.`
  }

}

function sortFriendsOnSameStep (friendsOnSameStep) {
  let sortedFriends = friendsOnSameStep.sort(function (a, b) {return a[2] - b[2]})

  return sortedFriends
}

formattedFriendListForBabyStep(2, [['Paul', 'Taylor', '2'], ['Sharon', 'Thomas', '3'], ['Thomas', 'Harris', '3']])
formattedFriendListForBabyStep(2, [['Bob', 'Young', '2'], ['Paul', 'Taylor', '2'], ['Sharon', 'Thomas', '3'], ['Thomas', 'Harris', '3']])

// ^finihsed test at 5:19 PM
// How much longer would it take to finish this?