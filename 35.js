// 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。插入位置是排序好的
// 你可以假设数组中无重复元素

var searchInsert = function(nums, target) {
    for(let i = 0; i < nums.length; i++){
        if(nums[i] == target) {             // 找到
            return i;
        }
        
        if(nums[i] < target && nums[i+1] > target) {            // 插入
            return i+1;
        }
    }
    if(nums[0] > target) {          // 第一个 比 target还要小
        return 0;   
    }
    if(nums[nums.length-1] < target) {      // target比最后一个还要大
        return nums.length;
    }
    return -1;
};

let nums = [1, 3, 5, 6], target = 10;
let res = searchInsert(nums, target);
console.log(res);