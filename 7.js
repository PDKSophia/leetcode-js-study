// 给定一个 32 位有符号整数，将整数中的数字进行反转

var reverse = function (x) {
    if(x == 0) {
        return 0;
    }
    let num = 0; 
    let digit = 0;

    while(x != 0) {
        digit = x % 10;             
        x = (x-digit) / 10          
        num = num * 10 + digit      
    }

    // 第一轮循环 ， x = 123， digit = 123 % 10 为3 ， x = (123 - 3) / 10 为 12 ， num = 0 * 10 + 3 为 3
    // 第二轮循环 ， x = 12 ， digit = 12 % 10  为2 ， x = (12 - 2)  / 10 为 1  ， num = 3 * 10 + 2 为 32
    // 第三轮循环 ， x = 1,    digit = 1 % 10   为1 ， x = (1-0)     / 10 为 0  ， num = 32* 10 + 1 为 321

    if (num >= 2147483647 || num <= -2147483647) {
        return 0;
    }

    return num;
}

let a = 123;
let res = reverse(a);
console.log(res)