// 使用队列实现栈的下列操作：

// push(x) -- 元素 x 入栈
// pop() -- 移除栈顶元素
// top() -- 获取栈顶元素
// empty() -- 返回栈是否为空

// 队列 “先进先出”， 栈 “先进后出”
var Queue = function () {
  this.list = []
}
Queue.prototype._enqueue = function (element) {
//   console.log(element)
  this.list.push(element)
}
Queue.prototype._dequeue = function () {
  return this.list.shift() // 弹出数组第一位元素
}
Queue.prototype._getTop = function () {
  return this.list[0]
}
Queue.prototype._empty = function () {
  return this.list.length
}

var MyStack = function() {
  this.queue = new Queue()
}
MyStack.prototype.push = function(x) {
   var pushQueue = new Queue()
   pushQueue._enqueue(x) 
   pushQueue._enqueue(this.queue) 
   this.queue = pushQueue

   // 压入栈第一元素 1
   // 压入初始化空数组 []
   // this.queue = pushQueue ， 也就是 this.queue = [ 1, [] ]

   // 压入栈第二元素 2
   // 压入之前的数组 [1, []]
   // this.queue = pushQueue ， 也就是 this.queue = [ 2, [1, []] ]

   // 压入栈第二元素 3
   // 压入之前的数组 [ 2, [1, []] ]
   // this.queue = pushQueue ， 也就是 this.queue = [3, [ 2, [1, []] ] ]

};
MyStack.prototype.pop = function() {
  var last = this.queue._dequeue() // 出队列，从队列中出
  this.queue = this.queue._dequeue()
  return last
};
MyStack.prototype.top = function() {
  return this.queue._getTop()
};
MyStack.prototype.empty = function() {
  return this.queue.length === 0
};

var mystack = new MyStack()
mystack.push(1)
mystack.push(2)
mystack.push(3)
var a = mystack.pop()
var b = mystack.pop()
var c = mystack.pop()
console.log(a)
console.log(b)
console.log(c)
