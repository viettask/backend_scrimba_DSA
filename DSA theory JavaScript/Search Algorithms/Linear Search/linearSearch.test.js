import { linearSearch } from './linearSearch'
import { describe, test, expect } from 'vitest'


describe("linearSearch", () => {
  test("finds target", () => {
    const numbers = [3, 5, 1, 7, 8]
    const target = 7
    const result = 3
    expect(linearSearch(numbers, target)).toEqual(result)
  })

  test("doesn't finds target", () => {
    const numbers = [3, 5, 1, 7, 8]
    const target = 9
    const result = -1
    expect(linearSearch(numbers, target)).toEqual(result)
  })

  test("doesn't finds target in empty array", () => {
    const numbers = []
    const target = 9
    const result = -1
    expect(linearSearch(numbers, target)).toEqual(result)
  })
})