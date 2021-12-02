// 第 N 位数字

// 中等 

// 给你一个整数 n ，请你在无限的整数序列 [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ...] 中找出并返回第 n 位数字。

//  

// 示例 1：

// 输入：n = 3
// 输出：3
// 示例 2：

// 输入：n = 11
// 输出：0
// 解释：第 11 位数字在序列 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ... 里是 0 ，它是 10 的一部分。
//  

// 提示：

// 1 <= n <= 231 - 1
// 通过次数31,649提交次数70,585

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/nth-digit
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
function findNthDigit(n: number): number {
  let d = 1, count = 9;
    while (n > d * count) {
        n -= d * count;
        d++;
        count *= 10;
    }
    const index = n - 1;
    const start = Math.floor(Math.pow(10, d - 1));
    const num = start + Math.floor(index / d);
    const digitIndex = index % d;
    const digit = Math.floor(num / Math.floor(Math.pow(10, d - digitIndex - 1))) % 10;
    return digit;
}

function testFindNthDigit() {
  const result = findNthDigit(3)
  console.log(result)
  const result1 = findNthDigit(11)
  console.log(result1)
}

testFindNthDigit()