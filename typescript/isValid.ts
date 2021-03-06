// 有效的括号

// 简单

// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

// 有效字符串需满足：

// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
//  

// 示例 1：

// 输入：s = "()"
// 输出：true
// 示例 2：

// 输入：s = "()[]{}"
// 输出：true
// 示例 3：

// 输入：s = "(]"
// 输出：false
// 示例 4：

// 输入：s = "([)]"
// 输出：false
// 示例 5：

// 输入：s = "{[]}"
// 输出：true
//  

// 提示：

// 1 <= s.length <= 104
// s 仅由括号 '()[]{}' 组成

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/valid-parentheses
function isValid(s: string) {
  // "([}}])"
  if (s.length % 2 === 1) return false
  const map = []
  const left = ['(', '{', '[']
  const right = [')', '}', ']']
  for (const c of s) {
    if (left.includes(c)) {
      map.push(c)
    } else {
      const index = right.findIndex(e => e === c)
      const len = map.length
      if (map[len - 1] === left[index]) map.pop()
      else return false
    }
  }
  return !map.length
}

function testIsValid() {
  const result = isValid('()[]{}')
  console.log(result)
}

testIsValid()