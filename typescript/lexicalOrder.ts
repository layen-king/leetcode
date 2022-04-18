// 字典序排数

// 中等

// 给你一个整数 n ，按字典序返回范围 [1, n] 内所有整数。

// 你必须设计一个时间复杂度为 O(n) 且使用 O(1) 额外空间的算法。

//  

// 示例 1：

// 输入：n = 13
// 输出：[1,10,11,12,13,2,3,4,5,6,7,8,9]
// 示例 2：

// 输入：n = 2
// 输出：[1,2]
//  

// 提示：

// 1 <= n <= 5 * 104
// 通过次数34,218提交次数45,006

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/lexicographical-numbers
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
function lexicalOrder(n: number): number[] {
    // 设计一个时间复杂度为 O(n) 且使用 O(1) 额外空间的算法。
    // 不能使用循环然后排序
    const res = []
    let cur = 1
    for (let i = 0; i < n; i++) {
        res.push(cur)
        // 当cur * 10 <= n的时候,优先添加cur * 10
        if (cur * 10 <= n) {
            cur *= 10
        } else {
            // 否则判断 cur > n - 1 或者 cur为9的尾数时,须回退,从新判断
            // 如109,11,110
            while (cur % 10 === 9 || cur > n - 1) {
                cur = cur / 10 >> 0
            }
            cur++
        }
    }
    return res
}