// 亲密字符串

// 简单

// 给你两个字符串 s 和 goal ，只要我们可以通过交换 s 中的两个字母得到与 goal 相等的结果，就返回 true ；否则返回 false 。

// 交换字母的定义是：取两个下标 i 和 j （下标从 0 开始）且满足 i != j ，接着交换 s[i] 和 s[j] 处的字符。

// 例如，在 "abcd" 中交换下标 0 和下标 2 的元素可以生成 "cbad" 。
//  

// 示例 1：

// 输入：s = "ab", goal = "ba"
// 输出：true
// 解释：你可以交换 s[0] = 'a' 和 s[1] = 'b' 生成 "ba"，此时 s 和 goal 相等。
// 示例 2：

// 输入：s = "ab", goal = "ab"
// 输出：false
// 解释：你只能交换 s[0] = 'a' 和 s[1] = 'b' 生成 "ba"，此时 s 和 goal 不相等。
// 示例 3：

// 输入：s = "aa", goal = "aa"
// 输出：true
// 解释：你可以交换 s[0] = 'a' 和 s[1] = 'a' 生成 "aa"，此时 s 和 goal 相等。
// 示例 4：

// 输入：s = "aaaaaaabc", goal = "aaaaaaacb"
// 输出：true
//  

// 提示：

// 1 <= s.length, goal.length <= 2 * 104
// s 和 goal 由小写英文字母组成
// 通过次数32,196提交次数103,047

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/buddy-strings
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
function buddyStrings(s: string, goal: string): boolean {
  if (s.length !== goal.length) return false
  if (s === goal) {
    // 存在重复即返回true
    return new Set(Array.from(s)).size !== goal.length
  } else {
    const tem1 = []
    const tem2 = []
    for (let i = 0; i < s.length; i++) {
      if (s[i] !== goal[i]) {
        tem1.push(s[i])
        tem2.push(goal[i])
      }
      if (tem1.length > 2) return false
    }
    if (tem1[0] === tem2[1] && tem1[1] === tem2[0]) return true
    return false
  }
}

function testBuddyStrings() {
  const result = buddyStrings('aa', 'aa')
  console.log('aa & aa is :', result)
  const result1 = buddyStrings('ab', 'ab')
  console.log('ab & ab is :', result1)
  const result2 = buddyStrings('aaaaaaabc', 'aaaaaaacb')
  console.log('aaaaaaabc is :', result2)
}
testBuddyStrings()