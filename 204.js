// 统计所有小于非负整数 n 的质数的数量。

// 质数 : 质数定义为在大于1的自然数中，除了1和它本身以外不再有其他因数

// 输入: 10
// 输出: 4
// 解释: 小于 10 的质数一共有 4 个, 它们是 2, 3, 5, 7 。

var countPrimes = function(n) {
  var count = 0
  var arr = []
  for (let i = 2; i < n; i++) {
    if (isPrime(i)) {
      arr.push(i)
      count++
    }
  }
  return count
}
var isPrime = function(num) {
  if (typeof num != 'number' || num < 2) {
    // 如果不是number类型并且小于2
    return false
  }

  if (num === 2) {
    return true
  } else if (num % 2 === 0) {
    return false // 偶数
  }
  var squareRoot = Math.sqrt(num)
  for (let i = 3; i <= squareRoot; i += 2) {
    //因为2已经验证过，所以从3开始；且已经排除偶数，所以每次加2
    if (num % i === 0) {
      return false
    }
  }

  return true
}

let n = 10
let count = countPrimes(n)
console.log(count)
