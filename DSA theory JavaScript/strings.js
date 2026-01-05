const coldSeason = "winter"
const seasons = ["winter", "spring", "summer", "fall"]


const greeting = "hello"
console.log(greeting[0]) // Gives you "h".
console.log(greeting.length) // Gives you 5.


greeting[0] = "H" // This doesn't work but fails silently.
console.log(greeting) // greeting is still "hello".


function reverse(string) {
  const characters = string.split("") // Splits a string into an array of characters.
  let left = 0
  let right = characters.length - 1
  while (left < right) {
    const temp = characters[left]
    characters[left] = characters[right]
    characters[right] = temp
    left++
    right--
  }
  const reversed = characters.join("") // Joins an array of characters back to a string.
  return reversed
}

console.log(reverse("hello")) // Gives you "olleh".


let word = "Go"
const upperCase = word.toUpperCase() // Gives you "GO".
const lowerCase = word.toLowerCase() // Gives you "go".
const letter = "a"
const code = letter.charCodeAt(0) // Gives you 97.
const char = String.fromCharCode(code) // Give you "a" back.