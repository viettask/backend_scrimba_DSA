/*
Algorithm: Get Age Range
Input: array of ages
Output: age range

Steps:
1. Init max = first item.
2. Loop over the rest of the array, starting from index 1:
3.   If the new item is greater than the max:
4.     Update the max.
5. Init min = first item.
6. Loop over the rest of the array, starting from index 1:
7.   If the new item is less than the min:
8.     Update the min.
9. Calculate the age range = max age - min age.
10. Return the age range.
*/

export function getAgeRange(ages) {
    let maxAge = ages[0]
    for (let i = 1; i < ages.length; i++) {
        if (ages[i] > maxAge) {
            maxAge = ages[i]
        }
    }
    let minAge = ages[0]
    for (let i = 1; i < ages.length; i++) {
        if (ages[i] < minAge) {
            minAge = ages[i]
        }
    }
    const ageRange = maxAge - minAge
    return ageRange
}

// Time complexity: O(n + n) = O(2n) = O(n)
// Space complexity: O(1)