//Space Complexity: 

function sumSquares(n) {
  const squares = [] // O(1)
  for (let i = 1; i <= n; i++) { // O(1)
    squares.push(i * i)
  }
  //O(n)
  let sum = 0 // O(1)
  for (const square of squares) {   // O(1)
    sum += square
  }
  return sum
}

//Space Complexity: O(1+1+n+1+1) O(n)

/*
Challenge:
***********

I want you to look at this function, 
and think of a way to improve the space complexity. 
Right now it’s O(n) space complexity. 
But could you see a way to improve it so that it gives us the same result, 
the sum of the squares of the numbers from 1 to n, 
but without using that extra memory space? Think about it, 
and if you see it, go ahead and make the changes.
*/

function sumSquares1(n) {
  let sum = 0 // O(1)
  for (let i = 1; i <= n; i++) { // O(1)
    sum += i * i
  }
  return sum
}