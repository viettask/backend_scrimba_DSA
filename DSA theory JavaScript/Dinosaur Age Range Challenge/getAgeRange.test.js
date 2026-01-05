import { getAgeRange } from './getAgeRange'
import { describe, test, expect } from 'vitest'


describe("getAgeRange", () => {
  test('array of length 8 gets age range 99', () => {
    const ages = [8, 51, 3, 64, 1, 75, 9, 100]
    const result = 99
    expect(getAgeRange(ages)).toBe(result)
  })

  test('array of length 5 gets age range 10', () => {
    const ages = [8, 2, 5, 12, 3]
    const result = 10
    expect(getAgeRange(ages)).toBe(result)
  })

  test('array of length 2 of different values gets age range 5', () => {
    const ages = [5, 10]
    const result = 5
    expect(getAgeRange(ages)).toBe(result)
  })

  test('array of length 2 of equal values gets age range 0', () => {
    const ages = [5, 5]
    const result = 0
    expect(getAgeRange(ages)).toBe(result)
  })

  test('array of length 1 gets age range 0', () => {
    const ages = [5]
    const result = 0
    expect(getAgeRange(ages)).toBe(result)
  })
})