/*
Algorithm: BST Search
Input: the BST root, and the target value
Output: true if target found, false if not

Steps:
1. If the tree is empty:
2.   The target cannot be found. Return false.
3. If the target is the current value:
4.   We found the target. Return true.
5. If the target is less than the current value:
6.   Recursively search in the left subtree and return the result.
7. If the target is greater than the current value:
6.   Recursively search in the right subtree and return the result.
*/

export function search(root, target) {
  if (root === null) {
    return false
  }
  if (target === root.value) {
    return true
  }
  if (target < root.value) {
    return search(root.left, target)
  }
  if (target > root.value) {
    return search(root.right, target)
  }
}
