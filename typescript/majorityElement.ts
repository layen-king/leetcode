// 求众数 II

// 中等

// 给定一个大小为 n 的整数数组，找出其中所有出现超过 ⌊ n/3 ⌋ 次的元素。

//  

//  

// 示例 1：

// 输入：[3,2,3]
// 输出：[3]
// 示例 2：

// 输入：nums = [1]
// 输出：[1]
// 示例 3：

// 输入：[1,1,1,3,3,2,2,2]
// 输出：[1,2]
//  

// 提示：

// 1 <= nums.length <= 5 * 104
// -109 <= nums[i] <= 109
//  

// 进阶：尝试设计时间复杂度为 O(n)、空间复杂度为 O(1)的算法解决此问题。

// 通过次数51,393提交次数101,223

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/majority-element-ii
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
function majorityElement(nums: number[]): number[] {
  const map = new Map()
  const ans = []
  for (const i of nums) {
    const k = map.get(i) || 1
    if (k > nums.length / 3) {
      ans.push(i)
      continue
    }
    map.set(i, k + 1)
  }
  return Array.from(new Set(ans))
}

function testMajorityElement(){
  const res = majorityElement([2,2])
  console.log(res)
}

testMajorityElement()