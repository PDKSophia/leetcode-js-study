// 反转一个单链表。

// 示例:

// 输入: 1->2->3->4->5->NULL
// 输出: 5->4->3->2->1->NULL

function ListNode (val) { 
  this.val = val
  this.next = null
}

var reverseList = function(head) {
  if (!head || !head.next) {
    return head
  }

  var current = head
  var n = null
  var next

  while (current !== null) {
    next = current.next
    current.next = n
    n = current
    current = next
  }

  return n
}

