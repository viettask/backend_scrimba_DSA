/*
Algorithm: Expression Validation
Input: string representing the expression
Output: true if it's valid, false if it's not

Steps:
1. Init a stack.
2. Go over each character in the expression:
3.   If it's an opening bracket:
4.     Push it to the stack.
4.   Else if it's a closing bracket:
5.     If the stack is not empty and the top of the stack is an opening bracket:
6.       Pop it. 
7.     Else:
8.       Return false.
9. After going over the entire expression, return if the stack is empty.
*/


import { Stack } from './stack'

export function isValid(exp) {
  const stack = new Stack()
  for (const char of exp) {
    if (char === '<') {
      stack.push(char)
    } else if (char === '>') {
      if (!stack.isEmpty() && stack.peek() === '<') {
        stack.pop()
      } else {
        return false
      }
    }
  }
  return stack.isEmpty()
}

// Time complexity: O(n)
//