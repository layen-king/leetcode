// 找树左下角的值

// 中等

// 给定一个二叉树的 根节点 root，请找出该二叉树的 最底层 最左边 节点的值。

// 假设二叉树中至少有一个节点。

// 输入: root = [2,1,3]
// 输出: 1

// 输入: [1,2,3,4,null,5,6,null,null,7]
// 输出: 7

// 提示:

// 二叉树的节点个数的范围是 [1,104]
// -231 <= Node.val <= 231 - 1 
// 通过次数104,295提交次数141,346


//Definition for a binary tree node.
class TreeNode1 {
  val: number
  left: TreeNode1 | null
  right: TreeNode1 | null
  constructor(val?: number, left?: TreeNode1 | null, right?: TreeNode1 | null) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}
// 广度优先 bfs
function findBottomLeftValue(root: TreeNode1 | null) {
  let res = 0
  const queue = [root]
  while (queue.length > 0) {
    let tem = queue.shift()
    if (tem.right) {
      queue.push(tem.right)
    }
    if (tem.left) {
      queue.push(tem.left)
    }
    res = tem.val
  }
  return res
}

// 深度优先 dfs
function findBottomLeftValue1(root: TreeNode1 | null) {
  let res = 0
  let max = 0
  function dfs(node: TreeNode1, height: number) {
    if (!node) return
    if (height > max) {
      max = height
      res = node.val
    }
    height++
    dfs(node.left, height)
    dfs(node.right, height)
  }
  dfs(root, 0)
  return res
}