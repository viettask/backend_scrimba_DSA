Challenge - Part 2:
*******************

You are given:
1. the head of a linked list,
2. and a value to add to the end. 
Add the value as a new node to the end of the linked list and return the head.


Examples:
**********

Example 1:
```
linked list = head 
               1 -> 2 -> 3 -> null
head = points to 1
value = 4 
result = head
          1 -> 2 -> 3 -> 4 -> null
```

Example 2:
```
linked list = head
                1 -> null
head = points to 1
value = 2 
result = head
           1 -> 2 -> null
```

Example 3:
```
linked list = head
              null
head = points to null
value = 1 
result = head
          1 -> null
```


Task:
*****

Implement the function `addToEndUsingHead()`.
1. Write the algorithm.
2. Implement it.
3. Run the tests using `npm run test:head` to make sure it works as expected.


Constraints:
************

- Linked list may be empty.


Notes:
******

1. Use the Node class provided.
2. Check `hints.md` if needed.