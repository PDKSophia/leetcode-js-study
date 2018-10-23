var missingNumber = function (nums) { 
    let n = nums.length+1 
    let sum = n * (n-1) / 2
    for (let i = 0; i < nums.length; i++) {
      sum = sum - nums[i]
    }
    return sum
  }
console.log(missingNumber([0]))