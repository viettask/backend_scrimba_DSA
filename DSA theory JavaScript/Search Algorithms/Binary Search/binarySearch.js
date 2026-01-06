/*
Algorithm: Binary Search
Input: array of sorted numbers, and target
Output: index of target in array, or -1 if not found

Steps:
1. Init l to 0.
2. Init r to point to the last element in the array.
3. Loop as long as l did not pass r:
4.   Init m to be the middle point between l and r.
5.   If the value at m is the target:
6.     Return m.
7.   Else if the value at m is less than the target:
8.     Move l to right after m.
9.   Else:
10.    Move r to right before m.
11. Return -1.
*/

export function binarySearch(numbers, target) {
  let l = 0
  let r = numbers.length - 1
  while (l <= r) {
    const m = l + Math.floor((r - l) / 2)
    if (numbers[m] === target) {
      return m
    } else if (numbers[m] < target) {
      l = m + 1
    } else {
      r = m - 1
    }
  }
  return -1
}

// Time complexity: O(log n )
// Space complexity: O(1)

/*
Challenge:
***********

Implement the binary search algorithm. Call the function binarySearch() and make sure to export it. When done, run the tests in the terminal with ’npm test’ to make sure it works.

Note: If needed, see hint.md for the formula.
*/