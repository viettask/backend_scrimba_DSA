// export function findNamesOfDuplicates(dinos) {
//   const namesOfDuplicates = []
//   for (let i = 0; i < dinos.length; i++) {
//     for (let j = i + 1; j < dinos.length; j++) {
//       if (dinos[i].id === dinos[j].id) {
//         namesOfDuplicates.push(dinos[i].name)
//         namesOfDuplicates.push(dinos[j].name)
//       }
//     }
//   }
//   return namesOfDuplicates
// }

/*
Challenge:
**********

What's the time complexity of the algorithm above?
*/
// Time complexity: O(n^2)















export function findNamesOfDuplicates(dinos) {
  const namesOfDuplicates = []
  const idNames = new Map()
  for (const { id, name } of dinos) {
    if (idNames.has(id)) {
      namesOfDuplicates.push(idNames.get(id))
      namesOfDuplicates.push(name)
    } else {
      idNames.set(id, name)
    }
  }
  return namesOfDuplicates
}

// Time complexity: O(n)