// 最小K个数
// 中等
// 设计一个算法，找出数组中最小的k个数。以任意顺序返回这k个数均可。

// 示例：

// 输入： arr = [1,3,5,7,2,4,6,8], k = 4
// 输出： [1,2,3,4]
// 提示：

// 0 <= len(arr) <= 100000
// 0 <= k <= min(100000, len(arr))

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/smallest-k-lcci
// 排序取最小
function smallestK(arr: number[], k: number): number[] {
  return arr.sort((x, y) => x - y).splice(0, k)
}

function smallestK1(arr: number[], k: number): number[] {
  return arr.sort((x, y) => x - y).splice(0, k)
}

function testSmallestK() {
  const result = smallestK([1,3,5,7,2,4,6,8],4)
  console.log(result)
}

testSmallestK()