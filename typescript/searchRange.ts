// 在排序数组中查找元素的第一个和最后一个位置

// 中等

// 给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。

// 如果数组中不存在目标值 target，返回 [-1, -1]。

// 进阶：

// 你可以设计并实现时间复杂度为 O(log n) 的算法解决此问题吗？
//  

// 示例 1：

// 输入：nums = [5,7,7,8,8,10], target = 8
// 输出：[3,4]
// 示例 2：

// 输入：nums = [5,7,7,8,8,10], target = 6
// 输出：[-1,-1]
// 示例 3：

// 输入：nums = [], target = 0
// 输出：[-1,-1]
//  

// 提示：

// 0 <= nums.length <= 105
// -109 <= nums[i] <= 109
// nums 是一个非递减数组
// -109 <= target <= 109
// 通过次数519,242提交次数1,229,888

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
function searchRange(nums: number[], target: number): number[] {
  if (nums.length === 0) return [-1, -1]
  let [left, right, has] = [0, nums.length, false]
  // 取中间点
  while (right > left) {
    let mid = (right + left) / 2 >> 0
    if (nums[mid] < target) {
      // 选择的中间点小于target时,区间一定在右边,此时left最小值为mid
      left = ++mid
    } else if (nums[mid] > target) {
      // 同理,此时right最大值为mid
      right = mid
    } else {
      // 退出逻辑
      has = true
      left = right = mid
      // 可优化为 继续二分查找
      while (nums[++mid] === target) {
        right = mid
      }
      while (nums[--mid] === target) {
        left = mid
      }
      break
    }
  }
  if (!has) return [-1, -1]
  return [left, right]
}