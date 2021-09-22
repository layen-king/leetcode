// 括号生成

// 中等

// 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。

// 有效括号组合需满足：左括号必须以正确的顺序闭合。

//  

// 示例 1：

// 输入：n = 3
// 输出：["((()))","(()())","(())()","()(())","()()()"]
// 示例 2：

// 输入：n = 1
// 输出：["()"]
//  

// 提示：

// 1 <= n <= 8
// 通过次数348,060提交次数450,572

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/generate-parentheses
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
function generateParenthesis(n: number): string[] {
  const res: string[] = []
  if (n <= 0) return res
  const dfs = (path: string, open: number, close: number) => {
    if (open > n || close > open) return
    if (path.length == 2 * n) {
      res.push(path)
      return
    }
    dfs(path + "(", open + 1, close)
    dfs(path + ")", open, close + 1)
  }

  dfs("", 0, 0)
  return res
}

function testGenerateParenthesis() {
  const result = generateParenthesis(3)
  console.log(result)
}

testGenerateParenthesis()