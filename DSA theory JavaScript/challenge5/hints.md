Hints:
******

1. As emphasized in the challenge statement, use a queue to remember the order of dinosaurs as they arrived.
2. Use a map to keep track of the frequency of each age.
3. A unique age is one that only appears once in the stream of ages, i.e. has a frequency of 1.
4. Initialize an empty queue, and an empty map.
5. Process the stream of ages one age at a time, adding it to the queue, and updating its frequency in the map.
6. After you process the stream, use the queue, taking out one age at a time, and checking if it has a frequency of 1.
7. Return the first age you encounter in the queue that is unique.
8. If after going over the entire queue, you cannot find a unique age, return the string "No unique age was found.".