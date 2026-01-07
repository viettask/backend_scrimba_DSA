import { Node } from './node'


/*
Algorithm: Add to the End using the Tail
Input: head pointer, tail pointer, and the value to add
Output: head pointer

Steps:
1. Create a new node for the value.
2. If the list is empty:
3.   Just have the head point to the new node.
4. Else:
5.   Link the tail node to the new node.
6. Return the head.
*/

// Part 1:
export function addToEndUsingTail(head, tail, value) {
  const node = new Node(value)
  if (head === null) {
    head = node
  } else {
    tail.next = node
  }
  return head
}


// Part 2:
export function addToEndUsingHead(head, value) {
  let tail = head
  if (head !== null) {
    while (tail.next !== null) {
      tail = tail.next
    }
  }
  return addToEndUsingTail(head, tail, value)
}