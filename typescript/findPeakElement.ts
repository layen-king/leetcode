// 寻找峰值

// 中等

// 峰值元素是指其值严格大于左右相邻值的元素。

// 给你一个整数数组 nums，找到峰值元素并返回其索引。数组可能包含多个峰值，在这种情况下，返回 任何一个峰值 所在位置即可。

// 你可以假设 nums[-1] = nums[n] = -∞ 。

// 你必须实现时间复杂度为 O(log n) 的算法来解决此问题。

//  

// 示例 1：

// 输入：nums = [1,2,3,1]
// 输出：2
// 解释：3 是峰值元素，你的函数应该返回其索引 2。
// 示例 2：

// 输入：nums = [1,2,1,3,5,6,4]
// 输出：1 或 5 
// 解释：你的函数可以返回索引 1，其峰值元素为 2；
//      或者返回索引 5， 其峰值元素为 6。
//  

// 提示：

// 1 <= nums.length <= 1000
// -231 <= nums[i] <= 231 - 1
// 对于所有有效的 i 都有 nums[i] != nums[i + 1]
// 通过次数129,191提交次数260,146

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/find-peak-element
function findPeakElement(nums: number[]): number {
  // 取中间朝大的递增
  let index = nums.length / 2 >> 0
  while(true) {
    if (nums[index] > helper(nums, index - 1) && nums[index] > helper(nums, index + 1)) {
      return index
    } else {
      if (nums[index] < helper(nums, index - 1)) {
        index--
      } else {
        index++
      }
    }
  }
}

function helper(nums: number[], i: number): number {
  if (i >= 0 && i < nums.length) {
    return nums[i]
  }
  return - Infinity
}


function testFindPeakElement() {
  const start = +new Date()
  const result = findPeakElement([1,2,1,3,5,6,4])
  console.log(result)
  const end = + new Date()
  console.log('using time:', end-start , 'ms')
}

testFindPeakElement()