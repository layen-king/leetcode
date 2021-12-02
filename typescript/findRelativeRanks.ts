// 相对名次

// 简单

// 给你一个长度为 n 的整数数组 score ，其中 score[i] 是第 i 位运动员在比赛中的得分。所有得分都 互不相同 。

// 运动员将根据得分 决定名次 ，其中名次第 1 的运动员得分最高，名次第 2 的运动员得分第 2 高，依此类推。运动员的名次决定了他们的获奖情况：

// 名次第 1 的运动员获金牌 "Gold Medal" 。
// 名次第 2 的运动员获银牌 "Silver Medal" 。
// 名次第 3 的运动员获铜牌 "Bronze Medal" 。
// 从名次第 4 到第 n 的运动员，只能获得他们的名次编号（即，名次第 x 的运动员获得编号 "x"）。
// 使用长度为 n 的数组 answer 返回获奖，其中 answer[i] 是第 i 位运动员的获奖情况。

//  

// 示例 1：

// 输入：score = [5,4,3,2,1]
// 输出：["Gold Medal","Silver Medal","Bronze Medal","4","5"]
// 解释：名次为 [1st, 2nd, 3rd, 4th, 5th] 。
// 示例 2：

// 输入：score = [10,3,8,9,4]
// 输出：["Gold Medal","5","Bronze Medal","Silver Medal","4"]
// 解释：名次为 [1st, 5th, 3rd, 2nd, 4th] 。
//  

// 提示：

// n == score.length
// 1 <= n <= 104
// 0 <= score[i] <= 106
// score 中的所有值 互不相同
// 通过次数36,434提交次数58,814

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/relative-ranks
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
function findRelativeRanks(score: number[]): string[] {
  const map = ["Gold Medal", "Silver Medal", "Bronze Medal"]
  const s = new Set<number>()
  score.forEach((e)=>{
    s.add(e)
  })
  score.sort((x, y) => y - x)
  const res: string[] = []
  s.forEach(e=>{
    const index = score.findIndex(k => k ==e)
    res.push(index <=2 ? map[index] : String(index + 1))
  })
  return res
}

function testFindRelativeRanks() {
  const result = findRelativeRanks([4536,4658,2036,4322,1869,52,5085,1504,2493,3231,1041,3699,2443,4406,4989,2089,1782,5428,960,4882,1481,1673,1244,2801,1814,1893,3552,1277,2308,3425,4407,1647,561,])
  console.log(result,result.length)
}

testFindRelativeRanks()