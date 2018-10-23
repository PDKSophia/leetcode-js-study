// 编写一个函数，输入是一个无符号整数，返回其二进制表达式中数字位数为 ‘1’ 的个数

// 输入 11 ， 输出3，  11的二进制为 00000001011，所以输出3

var hammingWeight = function(n) {
    let _n = n.toString(2);
    // console.log(_n)
    let count = 0;
    for(let i = 0 ; i < _n.length; i++) {
        if(_n[i] == '1') {
            count = count + 1;
            // console.log(i)
        }
    }
    // console.log(count)
    return count;
};

let n = 128;
let res = hammingWeight(n);
console.log(res);