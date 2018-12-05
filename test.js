 var removeElement = function(nums, val) {
    let len = 0
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== val) {
        nums[len++] = nums[i]
      }
    }
    console.log(nums)
    return len
  }
  var nums = [3, 2, 2, 3]
  var res = removeElement(nums, 3)
  console.log(res);