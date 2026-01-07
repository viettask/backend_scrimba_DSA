Hints:
******

1. To traverse the graph, use DFS, modifying it for the graph rather than for binary trees as we previously did. To implement DFS, you could use the `Stack` class included in the `library` directory.
2. If you traverse the gragh starting from one vertex, you would eventually find the other vertex, if there were a path from the first vertex to the second.
3. You need to make sure not to get into a cycle. The `Set` object in JavaScript comes in handy for that. It has the following functions: 
- `add()` 
- `delete()`
- `has()`

To learn more about the `Set` object, check out the MDN docs here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set

4. To prevent getting into a cycle, keep track of the vertexes you've visited so far using a set. If the vertex you are about to add to the stack is already visited, do not add it.