// 给定一个非负整数组成的非空数组，在该数的基础上加一，返回一个新的数组。

// 最高位数字存放在数组的首位， 数组中每个元素只存储一个数字。

// 你可以假设除了整数 0 之外，这个整数不会以零开头。

// 输入数组 [1, 2, 3] 表示数字 123

var plusOne = function(digits) {
    let len = digits.length - 1;
    let flag = true
    while(flag) {
        if(digits[len] < 9) {
            digits[len]++;
            flag = false
        } else if(len == 0) {           // 这是 [9] 的情况，否则当只有 9 的时候，不加这个判断，就会走else的判断。len = 0, --len之后就-1，报错
            digits[len] = 0
            digits.unshift(1);
            flag = false
        }  else {
            digits[len] = 0
            len--
        }
    }
    return digits;
}
let digits = [9];

let res = plusOne(digits);
console.log(res);