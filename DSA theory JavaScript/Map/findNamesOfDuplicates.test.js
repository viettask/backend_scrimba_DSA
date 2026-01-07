import { findNamesOfDuplicates } from './findNamesOfDuplicates'
import { describe, test, expect } from 'vitest'


describe("findNamesOfDuplicates", () => {
  test('array of length 6 gets 4 names of duplicate IDs', () => {
    const dinos = [
      { id: 1, name: "Tim the T-Rex" },
      { id: 2, name: "Vince the Veloci" },
      { id: 3, name: "Sue the Bellu" },
      { id: 1, name: "Dean the Edmon" },
      { id: 2, name: "Sam the Seismo" },
      { id: 5, name: "Karen the Cryol" }
    ]
    const duplicates = ["Tim the T-Rex", "Dean the Edmon", "Vince the Veloci", "Sam the Seismo"]
    expect(findNamesOfDuplicates(dinos)).toStrictEqual(duplicates)
  })

  test('array of length 6 gets 2 names of duplicate IDs', () => {
    const dinos = [
      { id: 1, name: "Tim the T-Rex" },
      { id: 2, name: "Vince the Veloci" },
      { id: 3, name: "Sue the Bellu" },
      { id: 1, name: "Dean the Edmon" },
      { id: 5, name: "Sam the Seismo" },
      { id: 6, name: "Karen the Cryol" }
    ]
    const duplicates = ["Tim the T-Rex", "Dean the Edmon"]
    expect(findNamesOfDuplicates(dinos)).toStrictEqual(duplicates)
  })

  test('array of length 6 gets no names of duplicate IDs', () => {
    const dinos = [
      { id: 1, name: "Tim the T-Rex" },
      { id: 2, name: "Vince the Veloci" },
      { id: 3, name: "Sue the Bellu" },
      { id: 4, name: "Dean the Edmon" },
      { id: 5, name: "Sam the Seismo" },
      { id: 6, name: "Karen the Cryol" }
    ]
    const duplicates = []
    expect(findNamesOfDuplicates(dinos)).toStrictEqual(duplicates)
  })
})