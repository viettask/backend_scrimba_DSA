Challenge:
*********

In the Dinosaur social network, the younger generation of dinos is following a new trend of having a username that is a palindrome, with mixed-case letters, both uppercase and lowercase, and possibly digits. For example: "TREXerT", "Veloc1COLEv", and so on. Many of those users want to form groups of users like themselves who follow the cool palindrome trend. Build the backend functionality to help them find their peers. Write a function, `findAllPalindromes`, that takes an array of usernames, and returns an array of all the usernames that are palindromes, ignoring the letter case.

Remember, a palindrome is a string that reads the same forwards and backwards. For example: 

"bob" -> palindrome
"tim" -> not a palindrome 

In addition, in our algorithm, "Bob", and "zAAaaZ" are also palindromes since we are ignoring the letter case.


Examples:
********

Example 1:
usernames = ["Tricer66", "TREXerT", "Veloc1COLEv", "stego95"]
result = ["TREXerT", "Veloc1COLEv"]

Example 2:
usernames = ["nigersaurus111", "BRACHI33"]
result = []


Constraints:
************

1. usernames.length >= 0.
2. A username may only contain letters and digits but must start with a letter. The letters can be uppercase or lowercase.
3. username.length > 0.


Tasks:
******

1. Write the algorithm as steps in plain English.
2. Implement the steps in JavaScript.
3. Run the tests in the terminal using the command `npm test`. If a test doesn't pass, debug your code and fix what's wrong.
4. When you’re done, analyze the time and space complexity of your algorithm and write it down in Big O notation.


Notes:
******

1. There is more than one way to solve this challenge. This will be true with most of the challenges you will see in this course, and in problem solving in general.
2. If you need to, feel free to go back to the previous lesson on strings to brush up.
3. Lastly, and only if you absolutely need to, I added some hints for you in `hints.md` to check out.
