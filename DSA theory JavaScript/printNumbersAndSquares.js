function printNumbersAndSquares(n) {
  for (let i = 1; i <= n; i++) {
    console.log(i)
  }
  // O(n)
  for (let i = 1; i <= n; i++) {
    console.log(i * i)
  }
   // O(n)
}

// Time Complexity: O(n + n) = O(2n) = O(n)