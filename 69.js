// 计算并返回 x 的平方根，其中 x 是非负整数。

// 由于返回类型是整数，结果只保留整数的部分，小数部分将被舍去。

var mySqrt = function(x) {
    // let res = Math.floor(Math.sqrt(x));

    let low = 0, high = x;
    let res;
    while(low <= higt) {
        let mid = (low + higt) / 2;
        if(mid * mid <= x) {
            res = mid
        }
    }
    return res;
};

let x = 8;
let res = mySqrt(x);
console.log(res);