// export function tagSumLottery(communications, lotteryNumber) {
//   const winners = []
//   for (let i = 0; i < communications.length; i++) {
//     for (let j = i + 1; j < communications.length; j++) {
//       if (communications[i].tag + communications[j].tag === lotteryNumber) {
//         winners.push([communications[i].name, communications[j].name].toSorted())
//       }
//     }
//   }
//   if (winners.length > 0) {
//     return winners
//   }
//   return "No winners"
// }

/*
Algorithm: Tag Sum Lottery
Input: array of objects, each has a tag and name, and a lottery number
Output: array of pairs of names, whose tags add up to the lottery number. Each pair is sorted alphabetically. If there are no winners, return the string "No winners".

Steps:
1. Init a winners array.
2. Init a tagName map.
3. Loop over the array:
4.   If the difference between the lottery number and the current tag is in the map:
5.     Add both the name the tag found in the map maps to, and the current name, as an array, sorted, to the winners array.
6.   Else:
7.     Add the current tag and name to the map.
8. If we found pairs of winners:
9.   Return them.
10. Return "No winners".  
*/

export function tagSumLottery(communications, lotteryNumber) {
  const winners = []
  const tagName = new Map()
  for (let i = 0; i < communications.length; i++) {
    const difference = lotteryNumber - communications[i].tag
    if (tagName.has(difference)) {
      winners.push([tagName.get(difference), communications[i].name].toSorted())
    } else {
      tagName.set(communications[i].tag, communications[i].name)
    }
  }
  if (winners.length > 0) {
    return winners
  }
  return "No winners"
}