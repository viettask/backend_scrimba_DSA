1. O(n) 
n is the input to the algorithm

2. Big O Notation
A way to describe how fast an algorithm runs in relation to the input

3.  time complexity

4. Space complexity 
The amount of memory space an algorithm uses during execution in relation to the input.

5. Big O simplification rules
2 rules:
    1. Drop the constant multipliers
    2. Drop the non-dominant terms.
    
6. Array can be 
    Static : fixed length. can not change afterwards
    danamic : flexible. javascript always dynamic

7. String = text
    A sequence of characters

8. Sorting Algorithms
    Bubble Sort: swap 2 number at start
        Time complexity: O(n^2)
        Space complexity: O(1)
    Merge Sort: A fast sorting algorithms with a time complexity of O(n logn)
        divide half and merge sort
        Divide and Conquer



9.  Search Algorithm
    Linear Search
        Time complexity: O(n)
        Space complexity: O(1)
    Binary Search
        An efficient searching algorithm with a time complexity of O(log n)
    
10. Other algorithms
    Map :   A collection of unique key-value pairs with O(1) lookup time complexity
            When to use a map: if have unique keys of data + fast lookup 
    Stacks:
            A collection of elements such that you could modify:
            1. Push: add to the top
            2. Pop: Remove from the top

            Stack operations:
            Each operation is efficient and takes O(1) time
            1. push(x):  add x to the top
            2. pop(): removes from the top
            3. peek(): gets the value at the top without removing it.
            4. size(): gets the size of the stack
            5. isEmpty(): checks if the stack is empty.

    Queues
            An ordered collection of elements such that you could mainly:
            1. enqueue: add to the back
            2. dequeue: remove from the front

            When to use a queue:
            When you need to process items in the same order they arrived.
    Linked list
            A list of elements such that each is linked to, or points to, the next

    Trees
            A hierarchical tree structure consisting of a set of connected nodes.
            Each node has a parent node and one or more child nodes, except for:
                the root node which has no parent
                the leaf nodes which have no children

            Tree application:
                1. file system directory structure
                2. DOM tree of HTML documents
                3. Search trees.

            Binary Search Trees (BST): O(log n)
            Depth-First Search (DFS):
                Use DFS:
                1. When the target is deep in the tree
                2. To traverse the tree in:
                    a. in-order
                    b. pre-order, or
                    c. post-order fashion.
                3. To minimize memory use
            Breath-First Search (BFS)
                Use BFS:
                1. When the targets close to the root
                2. To visit all the nodes in increasing order of distance from the root
                3. To find the shortest path to a node

    Graph

11. Recursion
    Ex: Factorial
        0! = 1
        n! = n * (n-1)!

12. Learning tip: Visualize
