/*
  * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
  * 有效字符串需满足：
    1 左括号必须用相同类型的右括号闭合。
    2 左括号必须以正确的顺序闭合。
    3 注意空字符串可被认为是有效字符串。
*/
function VaildKuoHao (s){
    let map = {
        '(' : -1,
        ')' : 1,
        '{' : -2,
        '}' : 2,
        '[' : -3,
        ']' : 3
    }

    let stack = []

    for(let i = 0 ; i < s.length; i++) {
        if(map[s[i]] < 0) {
            stack.push(map[s[i]])
        } else {
            let last = stack.pop()
            // console.log(last)
            // console.log(map[s[i]])
            if(map[s[i]] + last != 0) {
                return false
            }
        }
    }
    if(stack.length > 0){
        return false
    }
    return true
}

let res = VaildKuoHao('({}[()])')
console.log(res)