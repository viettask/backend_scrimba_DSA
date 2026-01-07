import { theFriendliestDinosaur } from './theFriendliestDinosaur'
import { describe, test, expect } from 'vitest'


describe("theFriendliestDinosaur", () => {

  test("gets the name of the dinosaur with 6 connections", () => {

    const dinosaurs = ["Eddie the Edmon", "Brie the Bellu", "Vinnie the Veloci", "Tim the Tyranno", "Lori the Lourin", "Sam the Seismo", "Maddie the Metria", "Cassie the Camara", "Amber the Amarga"]

    const adjacencyList = [
      [1],
      [0, 3],
      [0, 3],
      [1, 2, 4, 5, 6, 7],
      [3],
      [3],
      [3, 8],
      [3, 8],
      [6, 7]
    ]
    const result = "Tim the Tyranno"

    expect(theFriendliestDinosaur(dinosaurs, adjacencyList)).toBe(result)
  })

  test("gets the name of the dinosaur with 4 connections", () => {

    const dinosaurs = ["Eddie the Edmon", "Brie the Bellu", "Vinnie the Veloci", "Tim the Tyranno", "Lori the Lourin", "Sam the Seismo", "Maddie the Metria", "Cassie the Camara", "Amber the Amarga"]

    const adjacencyList = [
      [1],
      [0, 2],
      [1, 3],
      [2, 4],
      [3, 5, 8],
      [4, 6, 8],
      [5, 7, 8],
      [6, 8],
      [4, 5, 6, 7]
    ]
    const result = "Amber the Amarga"

    expect(theFriendliestDinosaur(dinosaurs, adjacencyList)).toBe(result)
  })
})