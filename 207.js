// 给定一个整数数组，判断是否存在重复元素。

// 如果任何值在数组中出现至少两次，函数返回 true。如果数组中每个元素都不相同，则返回 false。

// 示例 1:

// 输入: [1,2,3,1]
// 输出: true
// 示例 2:

// 输入: [1,2,3,4]
// 输出: false
// 示例 3:

// 输入: [1,1,1,3,3,4,3,2,4,2]
// 输出: true

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  if (nums.length <= 1) {
    return false;
  }

  let obj = {}
  for (let i = 0; i < nums.length; i++) {
    if (!obj[nums[i]]) {
      obj[nums[i]] = 1
    } else {
      obj[nums[i]] += 1
    }
  }
  var bool = false
  for (let key in obj) {
    if (obj[key] > 1) {
      bool = true
    }
  }
  return bool
};
console.log(containsDuplicate([2, 14, 18, 22, 22]))