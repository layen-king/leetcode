// 统计各位数字都不同的数字个数

// 中等

// 给你一个整数 n ，统计并返回各位数字都不同的数字 x 的个数，其中 0 <= x < 10n 。
//  

// 示例 1：

// 输入：n = 2
// 输出：91
// 解释：答案应为除去 11、22、33、44、55、66、77、88、99 外，在 0 ≤ x < 100 范围内的所有数字。 
// 示例 2：

// 输入：n = 0
// 输出：1
//  

// 提示：

// 0 <= n <= 8
// 通过次数34,856提交次数63,392

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/count-numbers-with-unique-digits
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
function countNumbersWithUniqueDigits(n: number): number {
    // 当 n == 0 时，返回 1。
    if (n === 0) return 1
    // 当 n == 1 时，_ 可以将 10以下的任何数字 放在唯一的位置，[0, ... , 9]。返回 10。
    if (n === 1) return 10
    // 当 n === 2 时， 第一个数字有 9 个选项 [1, ..., 9]，第二个数字有 9 个选项。不包括已经选择的选项。共有 9 * 9 = 81。返回 10 + 81 = 91。
    // 当 n === 3 时， 总的选择数是 9 * 9 * 8 = 684。返回 10 + 81 + 648 = 739。
    // 当 n === 4 时， 总的选择数是 9 * 9 * 8 * 7。
    // 依此类推, n === 8时, 应该是 9 * 9 * 8 * 7 * 6 * 5 * 4 * 3
    let [res, cur] = [10, 9]
    for (let i = 0; i < n - 1; i++) {
        cur *= 9 - i
        res += cur
    }
    return res
}

function testCountNumbersWithUniqueDigits() {
    const result = countNumbersWithUniqueDigits(8)
    console.log(result)
}

testCountNumbersWithUniqueDigits()