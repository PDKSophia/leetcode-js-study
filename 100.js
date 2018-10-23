// 给定两个二叉树，编写一个函数来检验它们是否相同。

// 如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。

// 示例 1:

// 输入:       1         1
//           / \       / \
//          2   3     2   3

//         [1,2,3],   [1,2,3]

// 输出: true
// 示例 2:

// 输入:      1          1
//           /           \
//          2             2

//         [1,2],     [1,null,2]

// 输出: false
// 示例 3:

// 输入:       1         1
//           / \       / \
//          2   1     1   2

//         [1,2,1],   [1,1,2]

// 输出: false

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

// 思路，如果两棵树的先序遍历是一样，说明是相同树

var TreeNode = function (val) {
  this.val = val
  this.left = null
  this.right = null
}

var preOrder = function (node, arr) {
  if (node === null) {
    return arr.push(node)
  } 
  arr.push(node.val)
  preOrder(node.left, arr)
  preOrder(node.right, arr)
}
var isSameTree = function(p, q) {
  var pArr = []
  var qArr = []
  preOrder(p, pArr)
  preOrder(q, qArr)

  if (pArr.length !== qArr.length) {
    return false
  }
  for (let i = 0; i < pArr.length; i++) {
    if (pArr[i] !== qArr[i]) {
      return false
    }
  }
  return true
};