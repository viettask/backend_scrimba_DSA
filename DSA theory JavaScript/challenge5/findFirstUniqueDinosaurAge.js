/*
Algorithm: First Unique Dinosaur Age
Input: stream of dinosaur ages as an array
Output: first unique age, or "No unique age was found."

Steps:
1. Init a queue for the ages in the order they arrived.
2. Init a map for age frequency.
3. Loop over the stream of ages:
4.   Enqueue the age to the queue.
5.   Update its frequency in the map.
6. While there are ages in the queue:
7.   Dequeue an age.
8.   If it has a frequency of 1:
9.     Return it.
10. After going over the entire queue with no unique age, return the string "No unique age was found.".
*/

import { Queue } from './queue'

export function findFirstUniqueDinosaurAge(ages) {
  const queue = new Queue()
  const ageFrequency = new Map()

  for (const age of ages) {
    queue.enqueue(age)
    if (!ageFrequency.has(age)) {
      ageFrequency.set(age, 1)
    } else {
      ageFrequency.set(age, ageFrequency.get(age) + 1)
    }
  }

  while (!queue.isEmpty()) {
    const age = queue.dequeue()
    if (ageFrequency.get(age) === 1) {
      return age
    }
  }

  return "No unique age was found."
}

// Time complexity: O(n)
// Space complexity: O(n)