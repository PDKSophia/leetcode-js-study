/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  var arr = []
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] + numbers[i + 1] === target) {
      arr.push(i + 1)
      arr.push(i + 2)
    }
  }
  return arr
}

console.log(twoSum([2, 7, 11, 15], 17))
