// 给定一个整数数组和一个目标值，找出数组中和为目标值的两个数。你可以假设每个输入只对应一种答案，且同样的元素不能被重复利用。

var twoSum = function(nums, target) {
  let res = []
  for(let i = 0; i < nums.length; i++) {
    for(let j = i+1; j < nums.length; j++) {
      if(nums[i] + nums[j] == target) {
        res.push(i)
        res.push(j)
      }
    }
  }
  return res;
}

let nums = [2, 2, 11, 15];
let target = 4;
let res = twoSum(nums, target);
console.log(res);