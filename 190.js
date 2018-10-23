// 颠倒给定的 32 位无符号整数的二进制位

// 输入: 43261596
// 输出: 964176192
// 解释: 43261596 的二进制表示形式为 00000010100101000001111010011100 ，返回 964176192，其二进制表示形式为 00111001011110000010100101000000 。

var reverseBits = function(n) {
    let r_num = n.toString(2);
    let arr = r_num.split('')
    arr.reverse();
    // 注意这是32位无符号的整数，反转后就26位，需要加6个0
    let len = arr.length;
    for(let i = 0; i < 32 - len; i++){
        arr.push('0')
    }
    return parseInt(arr.join(''), 2);
};

let n = 43261596;
let res = reverseBits(n);
console.log(res);











