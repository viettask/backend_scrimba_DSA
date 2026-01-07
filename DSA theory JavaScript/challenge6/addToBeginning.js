import { Node } from './node'

export function addToBeginning(head, value) {
  const node = new Node(value)
  node.next = head
  return node
} 