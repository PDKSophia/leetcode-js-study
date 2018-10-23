// 编写一个函数来查找字符串数组中的最长公共前缀。如果不存在公共前缀，返回空字符串 ""。

var longestCommonPrefix = function(strs) {
    if(strs.length == 0) {
        return "";
    }

    if(strs.length == 1) {
        return strs[0];
    }

    var result = '', str = ''
    // 以第一个为标准，flower， 一个一个字母和后边的匹配， 如果有不相同或者是undefined的，就停止
    for(let i in strs[0]) {
        // console.log(i)       // 0 , 1, 2 , 3 , 4 , 5
        for(let j = 1; j < strs.length; j++) {
            if(strs[j][i] == undefined || strs[j][i] != strs[0][i]) {
                str = '';       // 不同字母或者undefined，置为空
                break;
            }
            str = strs[0][i];  
        }
        // console.log(str)
        if(str == '') {        // 为空，应该停止循环查找，break退出
            break;  
        }
        result += strs[0][i]
    }
    return result;
};

var arr = ["flower","flow","floght"];
var res = longestCommonPrefix(arr);
console.log(res);