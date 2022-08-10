// 求解方程

// 中等

// 求解一个给定的方程，将x以字符串 "x=#value" 的形式返回。该方程仅包含 '+' ， '-' 操作，变量 x 和其对应系数。

// 如果方程没有解，请返回 "No solution" 。如果方程有无限解，则返回 “Infinite solutions” 。

// 题目保证，如果方程中只有一个解，则 'x' 的值是一个整数。

//  

// 示例 1：

// 输入: equation = "x+5-3+x=6+x-2"
// 输出: "x=2"
// 示例 2:

// 输入: equation = "x=x"
// 输出: "Infinite solutions"
// 示例 3:

// 输入: equation = "2x=x"
// 输出: "x=0"
//  

// 提示:

// 3 <= equation.length <= 1000
// equation 只有一个 '='.
// equation 方程由整数组成，其绝对值在 [0, 100] 范围内，不含前导零和变量 'x' 。 
// ​​​
// 通过次数16,079提交次数36,403

// 来源：力扣（LeetCode）
// 链接：https://leetcode.cn/problems/solve-the-equation
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
function solveEquation(equation: string): string {
  const [left, right] = equation.split('=')
  const q1 = help(left)
  const q2 = help(right)
  const t = [q1[0] - q2[0], q2[1] - q1[1]]
  return `x=${t[1] / t[0]}`
}

function help(str: string) {
  // 获取数字
  const nums = str.match(/(^|[-+])\d+(?=([-+]|$))/g).reduce((x, y) => {
    return x + parseInt(y)
  }, 0)
  const xs = str.match(/[-+]?(\d?)+x/g).reduce((x, y) => {
    const i = parseInt(y)
    return !isNaN(i) ? x + i : y.includes('-') ? x - 1 : x + 1
  }, 0)
  return [xs, nums]
}