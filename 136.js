/**
 * 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  if (nums.length == 1) {
    return nums[0];
  }
  let obj = {}
  for (let i = 0; i < nums.length; i++) {
    if (!obj[nums[i]]) {
      obj[nums[i]] = 1
    } else {
      obj[nums[i]]++
    }
  }
  for (key in obj) {
    if (obj[key] == 1) {
      return parseInt(key);
    }
  }
}

console.log(singleNumber([2,2,1]))