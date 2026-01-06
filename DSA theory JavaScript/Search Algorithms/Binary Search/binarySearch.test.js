import { binarySearch } from './binarySearch'
import { describe, test, expect } from 'vitest'


describe("binarySearch", () => {
  test("finds target in 8 numbers", () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8]
    const target = 7
    const result = 6
    expect(binarySearch(numbers, target)).toEqual(result)
  })

  test("finds target in 9 numbers", () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    const target = 3
    const result = 2
    expect(binarySearch(numbers, target)).toEqual(result)
  })

  test("doesn't find target", () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8]
    const target = 9
    const result = -1
    expect(binarySearch(numbers, target)).toEqual(result)
  })

  test("doesn't finds target in empty array", () => {
    const numbers = []
    const target = 9
    const result = -1
    expect(binarySearch(numbers, target)).toEqual(result)
  })
})