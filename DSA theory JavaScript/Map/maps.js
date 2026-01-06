// Define a new map
const idNames = new Map()

// Set key-value pairs
idNames.set(1, "Tim the T-Rex")
idNames.set(2, "Vince the Veloci")
idNames.set(3, "Sue the Bellu")

// Get the value a specific key maps to
console.log(idNames.get(3))

// Iterate over the keys of the map
for (const id of idNames.keys()) {
  console.log(idNames.get(id))
}

// Check if the map has a key
const key = 4
if (idNames.has(key)) {
  console.log(`${key} found!`)
}

// Delete a key (with its value) from the map
idNames.delete(2)

// Get the size of the map
console.log(idNames.size)