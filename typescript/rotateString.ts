// 旋转字符串

// 简单

// 给定两个字符串, s 和 goal。如果在若干次旋转操作之后，s 能变成 goal ，那么返回 true 。

// s 的 旋转操作 就是将 s 最左边的字符移动到最右边。 

// 例如, 若 s = 'abcde'，在旋转一次之后结果就是'bcdea' 。
//  

// 示例 1:

// 输入: s = "abcde", goal = "cdeab"
// 输出: true
// 示例 2:

// 输入: s = "abcde", goal = "abced"
// 输出: false
//  

// 提示:

// 1 <= s.length, goal.length <= 100
// s 和 goal 由小写英文字母组成
// 通过次数33,066提交次数58,431

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/rotate-string
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
function rotateString(s: string, goal: string): boolean {
    return s.length === goal.length && (s + s).includes(goal)
}

function testRotateString(){
    const res = rotateString('abcde','cdeab')
    console.log(res)
}

testRotateString()