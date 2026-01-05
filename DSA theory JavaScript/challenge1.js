/*
Challenge:
**********

Analyze the time complexity of the following 4 functions. For each function, just write down its time complexity in terms of Big O notation. In other words, answer the question: Is it an O(n), O(n^2), or O(1) algorithm?

*/

function sum(n) {
    let sum = 0
    for (let num = 1; num <= n; num++) {
        sum += num
    }
    return sum
}
// Time complexity: O(n)


function printMultiplicationTable(n) {
    for (let a = 0; a <= n; a++) {
        for (let b = 0; b <= n; b++) {
            console.log(`${a} x ${b} = ${a * b}`)
        }
    }
}
// Time complexity: O(n^2)


function isPositive(n) {
    return n > 0
}
// Time complexity: O(1)


function printTriangle() {
    for (let row = 1; row <= 5; row++) {
        let line = ""
        for (let col = 1; col <= row; col++) {
            line = line + "*"
        }
        console.log(line)
    }
}
// Time complexity: O(n^2)


// console.log(sum(100))
// printMultiplicationTable(10)
// console.log(isPositive(100))
printTriangle()