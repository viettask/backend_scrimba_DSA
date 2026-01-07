Challenge:
**********

Implement the BST search operation. It will be similar to the insert operation you saw in the previous lesson. The function receives the root of the tree as well as the target value as inputs, and must return true if the target is found in the tree, and false if it’s not.


Examples:
**********

Example 1:
```
root = ------->
              6
        4          8
     3     5    7     9
 1    

target = 5 
result = true
```

Example 2:
```
root = ------->
              6
        4          8
     3     5    7     9
 1

target = 15 
result = false
```

Example 3:
```
root = ------->
             null   

target = 15 
result = false
```


Task:
*****

Implement the function `search()`.
1. Write the algorithm.
2. Implement it.
3. Run the tests using `npm run test` to make sure it works as expected.


Constraints:
************

- The tree may be empty.


Notes:
******

1. Use recursion.
2. Check `hints.md` if needed.