// 优势洗牌

// 中等

// 给定两个大小相等的数组 nums1 和 nums2，nums1 相对于 nums 的优势可以用满足 nums1[i] > nums2[i] 的索引 i 的数目来描述。

// 返回 nums1 的任意排列，使其相对于 nums2 的优势最大化。

//  

// 示例 1：

// 输入：nums1 = [2,7,11,15], nums2 = [1,10,4,11]
// 输出：[2,11,7,15]
// 示例 2：

// 输入：nums1 = [12,24,8,32], nums2 = [13,25,32,11]
// 输出：[24,32,8,12]
//  

// 提示：

// 1 <= nums1.length <= 105
// nums2.length == nums1.length
// 0 <= nums1[i], nums2[i] <= 109


// 来源：力扣（LeetCode）
// 链接：https://leetcode.cn/problems/advantage-shuffle
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
function advantageCount(nums1: number[], nums2: number[]) {
  // 对于第一个数组排序
  nums1.sort((x, y) => x - y)
  const res = []

  for (let i = 0; i < nums2.length; i++) {
    // 从nums1取出第一个比nums2[i]更大的数,若不存在,取出第一个
    // todo: 可以使用二分查找,速度更快
    let index = nums1.findIndex(k => k > nums2[i])
    if (index === -1) index = 0
    res.push(nums1[index])
    nums1.splice(index, 1)
  }
  return res
}