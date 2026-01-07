import { Node } from './node'
import { addToEndUsingTail } from './addToEnd'
import { addToBeginning } from './addToBeginning'
import { describe, test, expect } from 'vitest'


describe("addToEndUsingTail", () => {

  test('adds 4 to a list of 1, 2, 3', () => {
    let head = new Node(3)
    let tail = head
    head = addToBeginning(head, 2)
    head = addToBeginning(head, 1)
    head = addToEndUsingTail(head, tail, 4)
    tail = head
    const list = []
    while (tail.next !== null) {
      list.push(tail.value)
      tail = tail.next
    }
    list.push(tail.value)
    expect(tail.value).toBe(4)
    expect(list).toEqual([1, 2, 3, 4])
  })

  test('adds 2 to a list of 1', () => {
    let head = new Node(1)
    let tail = head
    head = addToEndUsingTail(head, tail, 2)
    tail = head
    const list = []
    while (tail.next !== null) {
      list.push(tail.value)
      tail = tail.next
    }
    list.push(tail.value)
    expect(tail.value).toBe(2)
    expect(list).toEqual([1, 2])
  })

  test('adds 1 to an empty list', () => {
    let head = null
    let tail = head
    head = addToEndUsingTail(head, tail, 1)
    tail = head
    const list = []
    while (tail.next !== null) {
      list.push(tail.value)
      tail = tail.next
    }
    list.push(tail.value)
    expect(tail.value).toBe(1)
    expect(list).toEqual([1])
  })
})