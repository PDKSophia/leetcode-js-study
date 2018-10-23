// 设计一个支持 push，pop，top 操作，并能在常数时间内检索到最小元素的栈。

// push(x) -- 将元素 x 推入栈中。
// pop() -- 删除栈顶的元素。
// top() -- 获取栈顶元素。
// getMin() -- 检索栈中的最小元素。
// 示例:

// MinStack minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// minStack.getMin();   --> 返回 -3
// minStack.pop();
// minStack.top();      --> 返回 0
// minStack.getMin();   --> 返回 -2

/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.stack = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  this.stack.push(x)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  this.stack.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  if (this.stack.length > 0) {
    return this.stack[this.stack.length - 1]
  }
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  if (this.stack.length > 0) {
    var min = this.stack[0]
    for (var i = 0; i < this.stack.length; i++) {
      if (this.stack[i] < min) {
        min = this.stack[i]
      }
    }
  }
  return min;
};

MinStack.prototype.show = function () {
  console.log('目前栈的数据: ', this.stack.join(' '))
}

var obj = new MinStack()
obj.push(-2)
obj.push(0)
obj.push(-3)
console.log(obj.getMin())
obj.show()
// var param_3 = obj.top()
// var param_4 = obj.getMin()
console.log(obj)