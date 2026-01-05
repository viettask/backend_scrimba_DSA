import { findAllPalindromes } from './findAllPalindromes'
import { describe, test, expect } from 'vitest'


describe("findAllPalindromes", () => {
  test('array of length 3 gets 3 palindromes', () => {
    const usernames = ["TriciRT", "TREX1xerT", "VeloOLEv"]
    const result = ["TriciRT", "TREX1xerT", "VeloOLEv"]
    expect(findAllPalindromes(usernames)).toStrictEqual(result)
  })

  test('array of length 4 gets 2 palindromes', () => {
    const usernames = ["Tricer66", "TREXerT", "Veloc1COLEv", "stego95"]
    const result = ["TREXerT", "Veloc1COLEv"]
    expect(findAllPalindromes(usernames)).toStrictEqual(result)
  })

  test('array of length 2 gets no palindromes', () => {
    const usernames = ["nigersaurus111", "BRACHI33"]
    const result = []
    expect(findAllPalindromes(usernames)).toStrictEqual(result)
  })

  test('empty array gets no palindromes', () => {
    const usernames = []
    const result = []
    expect(findAllPalindromes(usernames)).toStrictEqual(result)
  })
})