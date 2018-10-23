// 给定一个链表，判断链表中是否有环。

// 判断是否有环，就是两个指针，如果两个指针相等, 一个快，一个慢，当快指针等于慢指针，或者快指针的next指向慢指针，那么就是存在着环

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }NODE
*/

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) { 
  let fast = head
  let slow = head

  if (head || fast.next === null || slow.next === null) {
    return false
  }

  fast = fast.next.next
  slow = slow.next

  while (1) {
    if (fast === null || fast.next === null) {
      return false
    } else  if (fast === slow || fast.next === slow) {
      return true
    } else {
      fast = fast.next.next
      slow = slow.next
    }
  }
};