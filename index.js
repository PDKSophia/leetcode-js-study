/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  var flag = 0
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      flag++
      console.log(flag)
      nums[flag] = nums[i]
    }
  }
  console.log(nums)
  return flag + 1
}

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]))
