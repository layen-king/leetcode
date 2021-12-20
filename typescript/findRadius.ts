// 供暖器

// 中等

// 冬季已经来临。 你的任务是设计一个有固定加热半径的供暖器向所有房屋供暖。

// 在加热器的加热半径范围内的每个房屋都可以获得供暖。

// 现在，给出位于一条水平线上的房屋 houses 和供暖器 heaters 的位置，请你找出并返回可以覆盖所有房屋的最小加热半径。

// 说明：所有供暖器都遵循你的半径标准，加热的半径也一样。

//  

// 示例 1:

// 输入: houses = [1,2,3], heaters = [2]
// 输出: 1
// 解释: 仅在位置2上有一个供暖器。如果我们将加热半径设为1，那么所有房屋就都能得到供暖。
// 示例 2:

// 输入: houses = [1,2,3,4], heaters = [1,4]
// 输出: 1
// 解释: 在位置1, 4上有两个供暖器。我们需要将加热半径设为1，这样所有房屋就都能得到供暖。
// 示例 3：

// 输入：houses = [1,5], heaters = [2]
// 输出：3
//  

// 提示：

// 1 <= houses.length, heaters.length <= 3 * 104
// 1 <= houses[i], heaters[i] <= 109
// 通过次数34,875提交次数92,541

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/heaters
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
function findRadius(houses: number[], heaters: number[]): number {
  // heaters排序
  heaters.sort((x, y) => x - y)
  let result = 0
  for (const it of houses) {
    const k = help1(it, heaters)
    console.log(k)
    result = Math.max(k, result)
  }
  return result
}

function help(it: number, heaters: number[]) {
  const index = heaters.findIndex(k => k >= it)
  if (index > -1) {
    // 存在相等,返回0
    if (heaters[index] === it) {
      return 0
    } else {
      // 一定存在小于
      return Math.min(heaters[index] - it, it - heaters[index - 1] || Infinity)
    }
  } else {
    // 不存在大于it的情况
    return it - heaters[heaters.length - 1]
  }
}

function help1(it: number, heaters: number[]) {
  // todo
  const len = heaters.length - 1
  if (heaters[0] >= it || heaters[len] <= it) {
    return heaters[0] - it
  } else {
    let i = Math.floor(len / 2)
    while (true) {
      if (heaters[i] === it) {
        return 0
      } else {
        if (heaters[i] > it && heaters[i - 1] < it) {
          return Math.min(heaters[i] - it, it - heaters[i - 1])
        } else if (heaters[i] > it) {
          i = Math.floor(i / 2)
        } else {
          i = Math.floor(i + i / 2)
        }
      }
    }
  }
}

function testFindRadius() {
  const result = findRadius([1, 1, 1, 1, 1, 1, 999, 999, 999, 999, 999], [499, 500, 501])
  console.log(result)
}

testFindRadius()