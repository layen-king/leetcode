// 面试题 01.05. 一次编辑

// 中等

// 字符串有三种编辑操作:插入一个字符、删除一个字符或者替换一个字符。 给定两个字符串，编写一个函数判定它们是否只需要一次(或者零次)编辑。

//  

// 示例 1:

// 输入: 
// first = "pale"
// second = "ple"
// 输出: True
//  

// 示例 2:

// 输入: 
// first = "pales"
// second = "pal"
// 输出: False
// 通过次数58,834提交次数170,316

// 来源：力扣（LeetCode）
// 链接：https://leetcode.cn/problems/one-away-lcci
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
function oneEditAway(first: string, second: string): boolean {
  // 比较获取长的字符串
  [first, second] = first.length > second.length ? [first, second] : [second, first]
  const [m, n] = [first.length, second.length]
  // 当长度差异大于1,肯定不能通过一次编辑
  if (m - n > 1) return false
  let [i, j, step] = [0, 0, 0]
  // 遍历长的那个
  for (; i < m; i++) {
    // 若2个字符串长度相等,指针同步
    j = m === n ? i : i - step
    if (first[i] !== second[j]) {
      // 当2个字符串不等于时,step+1,同时跳过当前字符
      step += 1
    }
    if (step > 1) {
      // 此时有2处不相等,返回false
      return false
    }
  }
  return true
}