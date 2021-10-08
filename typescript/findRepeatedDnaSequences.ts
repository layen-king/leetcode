// 重复的DNA序列

// 中等

// 所有 DNA 都由一系列缩写为 'A'，'C'，'G' 和 'T' 的核苷酸组成，例如："ACGAATTCCG"。在研究 DNA 时，识别 DNA 中的重复序列有时会对研究非常有帮助。

// 编写一个函数来找出所有目标子串，目标子串的长度为 10，且在 DNA 字符串 s 中出现次数超过一次。

//  

// 示例 1：

// 输入：s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
// 输出：["AAAAACCCCC","CCCCCAAAAA"]
// 示例 2：

// 输入：s = "AAAAAAAAAAAAA"
// 输出：["AAAAAAAAAA"]
//  

// 提示：

// 0 <= s.length <= 105
// s[i] 为 'A'、'C'、'G' 或 'T'
// 通过次数46,188提交次数93,980

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/repeated-dna-sequences
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
function findRepeatedDnaSequences(s: string): string[] {
  // 使用set存放结果
  const res = new Set<string>()
  // 使用set存放所有不同的集
  const map = new Set<string>()
  for (let i = 0; i <= s.length - 10; i++) {
    const tem = s.substring(i, i + 10)
    if (map.has(tem)) {
      // 若map存在,表明重复,添加到结果内
      res.add(tem)
    }
    map.add(tem)
  }
  return Array.from(res)
}

function testFindRepeatedDnaSequences() {
  const result = findRepeatedDnaSequences("AAAAAAAAAAA")
  console.log(result)
}

testFindRepeatedDnaSequences()