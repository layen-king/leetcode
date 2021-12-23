// 最长重复子串

// 困难

// 给你一个字符串 s ，考虑其所有 重复子串 ：即，s 的连续子串，在 s 中出现 2 次或更多次。这些出现之间可能存在重叠。

// 返回 任意一个 可能具有最长长度的重复子串。如果 s 不含重复子串，那么答案为 "" 。

//  

// 示例 1：

// 输入：s = "banana"
// 输出："ana"
// 示例 2：

// 输入：s = "abcd"
// 输出：""
//  

// 提示：

// 2 <= s.length <= 3 * 104
// s 由小写英文字母组成
// 通过次数8,496提交次数33,748

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/longest-duplicate-substring
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
function longestDupSubstring(s: string): string {
  // todo 尚未测试通过
  // 字符串哈希
  const [P, n] = [1313131, s.length]
  const h: number[] = [0]
  const p: number[] = [1]
  for (let i = 0; i < n; i++) {
    p[i + 1] = p[i] * P
    h[i + 1] = h[i] * P + s.charCodeAt(i)
  }
  console.log(h,p)
  let [ans, l, r] = ['', 0, n]
  while (l < r) {
    const mid = l + r + 1 >> 1
    const tem = check(s, mid, h, p)
    if (tem.length !== 0) l = mid
    else r = mid - 1
    ans = tem.length > ans.length ? tem : ans
  }
  return ans
}

function check(s: string, len: number, h: number[], p: number[]) {
  const n = s.length
  const set = new Set()
  for (let i = 0; i <= n + 1 - len; i++) {
    const j = i + len - 1
    const cur = h[j] - h[i - 1] * p[j - i + 1]
    if(isNaN(cur)) continue
    if (set.has(cur)) return s.substring(i - 1, j)
    set.add(cur)
  }
  return ''
}

function testLongestDupSubstring() {
  const result = longestDupSubstring("zxcvdqkfawuytt")
  console.log(result)
}

testLongestDupSubstring()