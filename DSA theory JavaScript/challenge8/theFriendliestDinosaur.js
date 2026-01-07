/*
Algorithm: The Frindliest Dinosaur
Input: the names of the dinosaurs, and the adjacency list for the graph
Output: the name of the friendliest dinosaur

Steps:
1. Init the index of the friendliest dinosaur as 0.
2. Loop, starting from the second array in the adjacency list:
3.   If the count of connections in the current array is greater than the count of connections of the friendliest dinosaur:
4.     Update the friendliest dinosaur to be the current index.
5. When the loop is over, return the name of the friendliest dinosaur using the index.
*/

export function theFriendliestDinosaur(dinosaurs, adjacencyList) {
  let friendliestIndex = 0
  for (let i = 1; i < adjacencyList.length; i++) {
    if (adjacencyList[i].length > adjacencyList[friendliestIndex].length) {
      friendliestIndex = i
    }
  }
  return dinosaurs[friendliestIndex]
}