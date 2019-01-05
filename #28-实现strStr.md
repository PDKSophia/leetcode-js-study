## 实现 strStr() 函数。

给定一个 haystack 字符串和一个 needle 字符串，在 haystack 字符串中找出 needle 字符串出现的第一个位置 (从 0 开始)。如果不存在，则返回 -1。

```
示例 1:

输入: haystack = "hello", needle = "ll"
输出: 2
```

```
示例 2:

输入: haystack = "aaaaa", needle = "bba"
输出: -1
```

```javascript
// 方法1 ： 使用自带的indexOf方法
var strStr = function(haystack, needle) {
  return haystack.indexOf(needle)
}

var haystack = 'hello',
  needle = 'lle'
var res = strStr(haystack, needle)
console.log(res)
```

```javascript
// 方法2 ： 从haystack中截取 跟 needle 长度一样的字符，然后进行对比
var strStr = function(haystack, needle) {
  if (needle.length == 0) {
    return 0
  }

  let h_len = haystack.length //  5
  let n_len = needle.length //  2
  for (let i = 0; i < h_len - n_len + 1; i++) {
    // h_len - n_len+1 原因是hello中， i < 5-2   第一轮循环不符合，但是第二轮答案是符合的，可是这时候 1 < 1 ?? 不执行了
    if (haystack.substring(i, i + n_len) == needle) {
      return i
      break
    }
  }
  return -1
}

var haystack = 'hello',
  needle = 'll'
var res = strStr(haystack, needle)
console.log(res)
```
