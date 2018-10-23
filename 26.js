// 给定一个排序数组，你需要在原地删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。
// 不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。

var removeDuplicates = function(nums) {

    // 第一轮从左往右， 然后第二层遍历用于找是否相同，以便删除 
    for(let i = 0; i < nums.length; i++) {
        for(let j = nums.length-1; j > i; j--) {
            if(nums[i] == nums[j]) {            
                nums.splice(j, 1)
            }
            // console.log(nums)
        }
    }
    return nums.length;
};

var nums = [0,0,1,1,1,2,2,3,3,4];
var res = removeDuplicates(nums);       // res = 5
console.log(res);