const nums = [1, 2, 3]

console.log(nums[0])

console.log(nums.length)

nums.push(4)

const lastItem = nums.pop()

for (let i = 0; i < nums.length; i++) {
  console.log(nums[i])
}

for (const num of nums) {
  console.log(num)
}