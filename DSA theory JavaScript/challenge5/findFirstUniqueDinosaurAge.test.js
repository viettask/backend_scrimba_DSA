import { findFirstUniqueDinosaurAge } from './findFirstUniqueDinosaurAge'
import { describe, test, expect } from 'vitest'


describe("findFirstUniqueDinosaurAge", () => {

  test('finds the first unique age early in the stream', () => {
    const ages = [12, 14, 12, 12, 16, 15, 16, 17, 16, 12]
    const result = 14
    expect(findFirstUniqueDinosaurAge(ages)).toBe(result)
  })

  test('finds the first unique age later in the stream', () => {
    const ages = [14, 16, 16, 14, 17, 18, 19]
    const result = 17
    expect(findFirstUniqueDinosaurAge(ages)).toBe(result)
  })

  test('finds no unique age', () => {
    const ages = [14, 16, 14, 14, 16, 14, 14]
    const result = "No unique age was found."
    expect(findFirstUniqueDinosaurAge(ages)).toBe(result)
  })
})