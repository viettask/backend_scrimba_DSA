/*
Algorithm: Are They Connected?
Input: the indexes of the two dinosaurs as an array, and the adjacency list for the graph
Output: true if they are connected, false otherwise

Steps:
1. Init a set for the visited vertexes.
2. Init a stack for the unvisited vertexes.
3. Add the the first vertex to the stack.
4. While there are vertexes in the stack:
5.   Get a vertex from the stack.
6.   If it's the second vertex:
7.     There is a path. Return true.
8.   Add the vertex to the visited set.
9.   Loop over all the neighbors of the vertex and add the unvisited ones to the stack.
10. Loop finished and second vertex not found. Return false. 
*/

import { Stack } from './library/stack'

export function areTheyConnected(dinosaurs, adjacencyList) {
  const visited = new Set()
  const unvisited = new Stack()
  unvisited.push(dinosaurs[0])
  while (!unvisited.isEmpty()) {
    const vertex = unvisited.pop()
    if (vertex === dinosaurs[1]) {
      return true
    }
    visited.add(vertex)
    for (const neighbor of adjacencyList[vertex]) {
      if (!visited.has(neighbor)) {
        unvisited.push(neighbor)
      }
    }
  }
  return false
}