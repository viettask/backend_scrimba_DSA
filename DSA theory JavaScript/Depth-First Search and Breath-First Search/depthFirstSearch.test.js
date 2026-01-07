import { Node } from './library/node'
import { insert } from './library/insert'
import { depthFirstSearch } from './depthFirstSearch'

import { describe, beforeEach, test, expect } from 'vitest'

describe("depthFirstSearch", () => {

  let root

  beforeEach(() => {
    root = new Node(6)
    insert(root, 4)
    insert(root, 8)
    insert(root, 3)
    insert(root, 5)
    insert(root, 7)
    insert(root, 9)
    insert(root, 1)
  })

  test("finds the value 5 in the tree", () => {
    const target = 5
    expect(depthFirstSearch(root, target)).toBeTruthy()
  })

  test("doesn't find the value 15 in the tree", () => {
    const target = 15
    expect(depthFirstSearch(root, target)).toBeFalsy()
  })

  test("doesn't find the value 15 in an empty tree", () => {
    root = null
    const target = 15
    expect(depthFirstSearch(root, target)).toBeFalsy()
  })
})