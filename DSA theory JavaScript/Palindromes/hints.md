Hints:
******

1. You could follow a top-down approach to solve the challenge, writing the high level algorithm first, and then moving down to check whether a username is a palindrome or not.
2. Instead, you could go bottom-up, writing the algorithm to check whether a username is a palindrome or not, ignoring letter case, and then writing the higher level algorithm that uses this to find all the palindromes.
3. How do you check if a string is a palindrome? It should read the same forwards and backwards. 
4. To do that, you could use the algorithm from the previous lesson to reverse the username, then check if it equals the original, ignoring the case.
5. How do you ignore the letter case in JavaScript? One way is to simply convert both strings to lowercase using the `toLowerCase` function, then check if they are equal.
6. Instead of reversing the entire string then checking, you could use the same left-right loop technique and check if the characters on both sides are equal, ignoring the case. If at any point they are not, return `false`. If you finish the loop without returning `false`, that means all characters were equal until left and right pointers met in the middle, which means it's a palindrome. So return `true`.
7. In the top level function, loop over all the usernames, check each username, push all the ones that are palindromes into an array, and return it.
8. Analyzing the time and space complexity will be interesting. We have one input to the function, the array of usernames. But when we calculate the complexity, we take into account two variables: the length of the array of usernames, n, and the length of the longest username, k.