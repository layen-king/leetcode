// 乘积小于 K 的子数组

// 中等

// 给你一个整数数组 nums 和一个整数 k ，请你返回子数组内所有元素的乘积严格小于 k 的连续子数组的数目。
//  

// 示例 1：

// 输入：nums = [10,5,2,6], k = 100
// 输出：8
// 解释：8 个乘积小于 100 的子数组分别为：[10]、[5]、[2],、[6]、[10,5]、[5,2]、[2,6]、[5,2,6]。
// 需要注意的是 [10,5,2] 并不是乘积小于 100 的子数组。
// 示例 2：

// 输入：nums = [1,2,3], k = 0
// 输出：0
//  

// 提示: 

// 1 <= nums.length <= 3 * 104
// 1 <= nums[i] <= 1000
// 0 <= k <= 106
// 通过次数49,282提交次数107,552

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/subarray-product-less-than-k
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
function numSubarrayProductLessThanK(nums: number[], k: number): number {
  // 无优化
  let res = 0
  const n = nums.length
  for (let i = 0; i < n; i++) {
    let cur = nums[i]
    let j = i
    while (cur < k && j < n) {
      res++
      cur *= nums[++j]
    }
  }
  return res
}
function numSubarrayProductLessThanK1(nums: number[], k: number): number {
  // 优化,保存乘结果
  let [n, res, cur, j] = [nums.length, 0, 1, 0]
  for (let i = 0; i < n; i++) {
    // 向后阶乘
    cur *= nums[i]
    while (j <= i && cur >= k) {
      // 当结果大于等于目标时, 除以第一个数 ,下次遍历还可以继续使用
      cur /= nums[j]
      j++
    }
    // 加上符合条件的结果
    res += i - j + 1
  }
  return res
}
