// 给定一个数组 nums 和一个值 val，你需要原地移除所有数值等于 val 的元素，返回移除后数组的新长度。

// 不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。

// 元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。

var removeElement = function(nums, val) {
    for(let i = 0; i < nums.length; i++) {
        for(let j = nums.length; j >= i; j--) {     // 要 >= i ，因为如果 i = 0 ， j > i , 那么 i=0 也等于 val的情况，却没被删除
            if(nums[j] == val) {
                nums.splice(j, 1)
            }
            // console.log(nums)
        }
    }
    return nums.length;
};

var nums = [3, 2, 2, 3], val = 3;
var res = removeElement(nums, val);
console.log(res);