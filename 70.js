// 假设你正在爬楼梯。需要 n 步你才能到达楼顶。

// 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

// 注意：给定 n 是一个正整数。

// 输入： 2
// 输出： 2
// 解释： 有两种方法可以爬到楼顶。
// 1.  1 步 + 1 步
// 2.  2 步

// 方法一 
var climbStairsOne = function(n, frist = 1 , secode = 2) {
    if(n === 1) {
        return frist;
    } 
    if(n === 2) {
        return secode;
    }
    return climbStairsOne(n-1, secode, frist+secode);
};

/**
 * 当 n = 4 时，有5种可能
 * 1 1 1 1
 * 2 1 1
 * 1 2 1
 * 1 1 2
 * 2 2 
 */
/**
 * 当 n = 5 时，有8种可能
 * 1 1 1 1 1
 * 2 1 1 1
 * 1 2 1 1
 * 1 1 2 1
 * 1 1 1 2
 * 2 2 1
 * 2 1 2 
 * 1 2 2
 */
// 方法二
var climbStairsTwo = function (n){
    let arr = new Array(n);
    for(let i = 1; i <= n; i++) {
        if(i == 1) {
            arr[i-1] = 1;
        } else if(i == 2) {
            arr[i-1] = 2;
        } else {
            arr[i-1] = arr[i-2] + arr[i-3];
        }
    }
    return arr[n-1];
}

let n = 4;
let res = climbStairsTwo(n);
console.log(res);