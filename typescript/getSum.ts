// 两整数之和

// 中等

// 给你两个整数 a 和 b ，不使用 运算符 + 和 - ​​​​​​​，计算并返回两整数之和。

//  

// 示例 1：

// 输入：a = 1, b = 2
// 输出：3
// 示例 2：

// 输入：a = 2, b = 3
// 输出：5
//  

// 提示：

// -1000 <= a, b <= 1000
// 通过次数58,722提交次数99,730

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/sum-of-two-integers
function getSum(a: number, b: number): number {
  while(b !== 0 ){
    const tem = (a & b) << 1
    a = a ^ b
    b = tem
  }
  return a
}

function testGetSum(){
  const result = getSum(100, 99)
  console.log(result)
}

testGetSum()