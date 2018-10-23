// 给定两个字符串 s 和 t，判断它们是否是同构的。

// 如果 s 中的字符可以被替换得到 t ，那么这两个字符串是同构的。

// 所有出现的字符都必须用另一个字符替换，同时保留字符的顺序。两个字符不能映射到同一个字符上，但字符可以映射自己本身

// 输入: s = "egg", t = "add"
// 输出: true

// 输入: s = "foo", t = "bar"
// 输出: false

// 思路： s对象的key对应值为t的字符，如果出现ppp这种连续的，就只需要比较对应的 s对象中的key是否等于 t[i]
var isIsomorphic = function(s, t) {
  if (s.length !== t.length) {
    return false
  }
  let map1 = {}
  let map2 = {}
  for (let i = 0; i < s.length; i++) {
    if (!map1[s[i]]) {
      map1[s[i]] = t[i]
    } else if (map1[s[i]] != t[i]) {
      return false
    }
    if (!map2[t[i]]) {
      map2[t[i]] = s[i]
    } else if (map2[t[i]] != s[i]) {
      return false
    }
  }
  console.log(map1)
  console.log(map2)
  return true
};

let s = 'foo', t = 'baa';
console.log(isIsomorphic(s, t));