// 数组中的 k-diff 数对

// 中等 

// 给你一个整数数组 nums 和一个整数 k，请你在数组中找出 不同的 k-diff 数对，并返回不同的 k-diff 数对 的数目。

// k-diff 数对定义为一个整数对 (nums[i], nums[j]) ，并满足下述全部条件：

// 0 <= i, j < nums.length
// i != j
// nums[i] - nums[j] == k
// 注意，|val| 表示 val 的绝对值。

//  

// 示例 1：

// 输入：nums = [3, 1, 4, 1, 5], k = 2
// 输出：2
// 解释：数组中有两个 2-diff 数对, (1, 3) 和 (3, 5)。
// 尽管数组中有两个 1 ，但我们只应返回不同的数对的数量。
// 示例 2：

// 输入：nums = [1, 2, 3, 4, 5], k = 1
// 输出：4
// 解释：数组中有四个 1-diff 数对, (1, 2), (2, 3), (3, 4) 和 (4, 5) 。
// 示例 3：

// 输入：nums = [1, 3, 1, 5, 4], k = 0
// 输出：1
// 解释：数组中只有一个 0-diff 数对，(1, 1) 。
//  

// 提示：

// 1 <= nums.length <= 104
// -107 <= nums[i] <= 107
// 0 <= k <= 107
// 通过次数43,724提交次数102,039

// 来源：力扣（LeetCode）
// 链接：https://leetcode.cn/problems/k-diff-pairs-in-an-array
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
function findPairs(nums: number[], k: number) {
  if (nums.length === 1) return 0
  // 排序
  const sort = nums.sort((x, y) => x - y)
  // 设立2个游标
  let [l, r, tem, res] = [0, 1, new Set<number>(), 0]
  while (l < sort.length && r < sort.length) {
    const [a, b] = [sort[l], sort[r]]
    if (b - a === k) {
      if (!tem.has(a)) {
        res++
        tem.add(a)
      }
      l++
      r++
    } else {
      r++
      if (r === sort.length) {
        // 搜寻完毕重置left和right
        l += 1
        r = l + 1
      }
    }
  }
  return res
}

// 二分
function findPairs1(nums: number[], k: number) {
  nums.sort((a, b) => a - b)
  let n = nums.length, y = 0, res = 0
  for (let x = 0; x < n; x++) {
    if (x === 0 || nums[x] !== nums[x - 1]) {
      while (y < n && (nums[y] < nums[x] + k || y <= x)) {
        y++
      }
      if (y < n && nums[y] === nums[x] + k) {
        res++
      }
    }
  }
  return res
}

function testFindPairs() {
  const res = findPairs([3, 1, 4, 1, 5], 2)
  console.log(res)
}