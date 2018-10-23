// 给定一个仅包含大小写字母和空格 ' ' 的字符串，返回其最后一个单词的长度。

// 如果不存在最后一个单词，请返回 0 。一个单词是指由字母组成，但不包含任何空格的字符串。

var lengthOfLastWord = function(s) {
    let arr = s.trim().split(' ')           // 去掉首字母的空格，然后以 ' ' 分割，存入数组，返回数组最后一位的长度
    // console.log(arr[length-1]) 
    return arr[arr.length-1].length;
};

let s = 'hello world';
let res = lengthOfLastWord(s);
console.log(res);