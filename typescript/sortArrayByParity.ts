// 按奇偶排序数组

// 简单

// 给你一个整数数组 nums，将 nums 中的的所有偶数元素移动到数组的前面，后跟所有奇数元素。

// 返回满足此条件的 任一数组 作为答案。

//  

// 示例 1：

// 输入：nums = [3,1,2,4]
// 输出：[2,4,3,1]
// 解释：[4,2,3,1]、[2,4,1,3] 和 [4,2,1,3] 也会被视作正确答案。
// 示例 2：

// 输入：nums = [0]
// 输出：[0]
//  

// 提示：

// 1 <= nums.length <= 5000
// 0 <= nums[i] <= 5000
// 通过次数75,205提交次数106,471

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/sort-array-by-parity
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
function sortArrayByParity(nums: number[]): number[] {
  // 暴力过滤排序
  return nums.filter(e => e % 2 === 0).concat(nums.filter(e => e % 2 === 1))
}

/**
 * 按奇偶排序数组:就地排序
 * @param nums 
 * @returns 
 */
function sortArrayByParity1(nums: number[]): number[] {
  let oddLeft = -1
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 !== 0) {
      // 记录第一个奇数
      if (oddLeft < 0) oddLeft = i
    } else {
      if (oddLeft >= 0) {
        // 不停的与第一个奇数替换,重新保存替换位置
        const tem = nums[i]
        nums[i] = nums[oddLeft]
        nums[oddLeft] = tem
        oddLeft = i
      }
    }
  }
  return nums
}