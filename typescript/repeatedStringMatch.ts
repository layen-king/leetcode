// 重复叠加字符串匹配

// 中等

// 给定两个字符串 a 和 b，寻找重复叠加字符串 a 的最小次数，使得字符串 b 成为叠加后的字符串 a 的子串，如果不存在则返回 -1。

// 注意：字符串 "abc" 重复叠加 0 次是 ""，重复叠加 1 次是 "abc"，重复叠加 2 次是 "abcabc"。

//  

// 示例 1：

// 输入：a = "abcd", b = "cdabcdab"
// 输出：3
// 解释：a 重复叠加三遍后为 "abcdabcdabcd", 此时 b 是其子串。
// 示例 2：

// 输入：a = "a", b = "aa"
// 输出：2
// 示例 3：

// 输入：a = "a", b = "a"
// 输出：1
// 示例 4：

// 输入：a = "abc", b = "wxyz"
// 输出：-1
//  

// 提示：

// 1 <= a.length <= 104
// 1 <= b.length <= 104
// a 和 b 由小写英文字母组成
// 通过次数22,007提交次数59,024

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/repeated-string-match
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
function repeatedStringMatch(a: string, b: string): number {
  // 解题思路,若存在匹配, 重复次数为b.length /a.length 向上取整, 或此数加1
  // 因为完全覆盖的情况下,还不能匹配,继续重复也不会匹配
  const count = Math.ceil(b.length / a.length)
  for (let i = count; i <= count + 1; i++) {
    const tem = a.repeat(i)
    if (tem.includes(b)) {
      return i
    }
  }
  return -1
}

function testRepeatedStringMatch(){
  const result = repeatedStringMatch("abc","cabcabca")
  console.log(result)
}

testRepeatedStringMatch()