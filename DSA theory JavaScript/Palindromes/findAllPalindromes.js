/*
Algorithm: Find All Palindromes
Input: array of usernames
Output: array of all the usernames that are palindromes, ignoring letter case

Steps:
1. Init result array.
2. Loop over the array of usernames:
3.   If a username is a palindrome, ignoring letter case:
4.     Add it to the result array.
5. Return the result.

Algorithm: Check Palindrome
Input: a username
Output: true or false

Steps:
1. Reverse the username.
2. Compare the username with its reverse, converting both to lowercase.
3. Return the result of the comparison.
*/

export function findAllPalindromes(usernames) {
  const result = []
  for (const username of usernames) { //Time complexity: O(n)
    if (isPalindrome(username)) { //Time complexity: O(k)
      result.push(username)
    }
  }
  // Space complexity: O(n)
  return result
}

function isPalindrome(username) {   
  const reversed = reverse(username) //Time complexity: O(k) // Space complexity: O(k)
  const result = username.toLowerCase() === reversed.toLowerCase() //Time complexity: O(k) // Space complexity: O(k)
  return result
}

function reverse(string) {
  const characters = string.split("") //Time complexity: O(k) // Space complexity: O(k)
  let left = 0
  let right = characters.length - 1
  while (left < right) {
    const temp = characters[left]
    characters[left] = characters[right]
    characters[right] = temp
    left++
    right--
  }
  const reversed = characters.join("") //Time complexity: O(k) // Space complexity: O(k)
  return reversed
}
// Time complexity: O(n * k)
// Space complexity: O(n * k)