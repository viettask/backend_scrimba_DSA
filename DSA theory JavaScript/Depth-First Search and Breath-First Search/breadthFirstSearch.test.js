import { Node } from './library/node'
import { insert } from './library/insert'
import { breadthFirstSearch } from './breadthFirstSearch'

import { describe, beforeEach, test, expect } from 'vitest'

describe("breadthFirstSearch", () => {

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
    expect(breadthFirstSearch(root, target)).toBeTruthy()
  })

  test("doesn't find the value 15 in the tree", () => {
    const target = 15
    expect(breadthFirstSearch(root, target)).toBeFalsy()
  })

  test("doesn't find the value 15 in an empty tree", () => {
    root = null
    const target = 15
    expect(breadthFirstSearch(root, target)).toBeFalsy()
  })
})