// 路径总和 III

// 中等

// 给定一个二叉树的根节点 root ，和一个整数 targetSum ，求该二叉树里节点值之和等于 targetSum 的 路径 的数目。

// 路径 不需要从根节点开始，也不需要在叶子节点结束，但是路径方向必须是向下的（只能从父节点到子节点）。
// 输入：root = [10,5,-3,3,2,null,11,3,-2,null,1], targetSum = 8
// 输出：3
// 解释：和等于 8 的路径有 3 条，如图所示。
// 示例 2：

// 输入：root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
// 输出：3
//  

// 提示:

// 二叉树的节点个数的范围是 [0,1000]
// -109 <= Node.val <= 109 
// -1000 <= targetSum <= 1000 
// 通过次数103,481提交次数181,892

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/path-sum-iii


// Definition for a binary tree node.
class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}


function pathSum(root: TreeNode | null, targetSum: number): number {
  let res = { sum: 0 }
  if (root) dfs1(root, res, targetSum)
  return res.sum
}

function dfs1(root: TreeNode | null, res: Record<string, number>, targetSum: number) {
  if (!root) return
  dfs2(root, root.val, res, targetSum)
  dfs1(root.left, res, targetSum)
  dfs1(root.right, res, targetSum)
}

function dfs2(root: TreeNode, val: number, res: Record<string, number>, targetSum: number) {
  if (val === targetSum) res.sum++
  if (root.left) dfs2(root.left, val + root.left.val, res, targetSum)
  if (root.right) dfs2(root.right, val + root.right.val, res, targetSum)
}

// 移除test