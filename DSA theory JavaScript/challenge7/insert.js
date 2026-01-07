import { Node } from './node'

export function insert(root, value) {
  if (root === null) {
    root = new Node(value)
  } else if (value < root.value) {
    root.left = insert(root.left, value)
  } else if (value > root.value) {
    root.right = insert(root.right, value)
  }
  return root
}
