// 判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。

// 方法一
var isPalindrome = function(x) {
    var arr = []
    var str = x.toString()
    for(var i = str.length-1; i>=0; i--) {
        arr.push(str[i])
    }

    if(x.toString() === arr.join('')) {
        return true
    } else {
        return false
    }
};

var x = 10;
var res = isPalindrome(x);
console.log(res); // false

// 方法二
var isPalindrome = function (x) {
  let strx = x.toString()
  return x == strx.split('').reverse().join('')
}
var x = 123656321
console.log(isPalindrome(x)) // true

// 方法三
var isPalindrome = function (x) {
  let strx = x.toString()
  let palind = ''
  for (let i = strx.length-1; i >= 0; i--) {
    palind += strx[i]
  }
  return strx === palind ? true : false
}
var x = 123656321
console.log(isPalindrome(x)) // true