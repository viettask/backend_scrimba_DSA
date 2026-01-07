import { areTheyConnected } from './areTheyConnected'
import { describe, test, expect } from 'vitest'

describe("areTheyConnected", () => {

    test("returns that the dinosaurs are connected", () => {
        const dinosaurs = [0, 4]
        const adjacencyList = [
            [1, 2],
            [0, 3],
            [0, 3, 4],
            [1, 2],
            [2],
            [6],
            [5, 7],
            [6, 8],
            [7]
        ]
        const result = true

        expect(areTheyConnected(dinosaurs, adjacencyList)).toBe(result)
    })

    test("returns that the dinosaurs are not connected", () => {
        const dinosaurs = [0, 7]
        const adjacencyList = [
            [1, 2],
            [0, 3],
            [0, 3, 4],
            [1, 2],
            [2],
            [6],
            [5, 7],
            [6, 8],
            [7]
        ]
        const result = false

        expect(areTheyConnected(dinosaurs, adjacencyList)).toBe(result)
    })

    test("returns that the dinosaurs are connected in a graph of two nodes", () => {
        const dinosaurs = [0, 1]
        const adjacencyList = [
            [1],
            [0]
        ]
        const result = true

        expect(areTheyConnected(dinosaurs, adjacencyList)).toBe(result)
    })

    test("returns that the dinosaurs are not connected in a graph of two nodes", () => {
        const dinosaurs = [0, 1]
        const adjacencyList = [
            [],
            []
        ]
        const result = false

        expect(areTheyConnected(dinosaurs, adjacencyList)).toBe(result)
    })

})