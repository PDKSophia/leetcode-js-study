  var rob = function(nums) {
    if (nums.length === 0) return 0
    if (nums.length === 1) return nums[0]
    var maxMoney = [nums[0], Math.max(nums[0], nums[1])]

    for (let i = 2; i < nums.length; i++) {
      maxMoney.push(Math.max(nums[i] + maxMoney[i-2], maxMoney[i-1]))
    }
    return maxMoney[maxMoney.length -1]
  }; 

  var arr = [2,7,9,3,1]
  console.log(rob(arr))