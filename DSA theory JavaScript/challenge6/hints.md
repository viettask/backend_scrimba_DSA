Hints:
******

1. If you already have the pointer tail, pointing to the last node in the list, you just need to create a new node, and link the last node to it. Make the `next` of the tail node point to the new node.
2. If the list is empty, then you just point the head to the new node.
3. If you only have the head, create a new pointer, tail, and start at the head and keep moving the tail until it points to the last node in the list. After that, you could just use the previous function which uses the tail to add the new node to the end.
4. How do you move a pointer to the next node? You assign the `next` of the current node to it. `tail = tail.next`.
5. How do you know that you reached the last node? You check if the `next` of the current node is `null`.