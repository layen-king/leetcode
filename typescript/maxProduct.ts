// 最大单词长度乘积

// 中等

// 给定一个字符串数组 words，找到 length(word[i]) * length(word[j]) 的最大值，并且这两个单词不含有公共字母。你可以认为每个单词只包含小写字母。如果不存在这样的两个单词，返回 0。

//  

// 示例 1:

// 输入: ["abcw","baz","foo","bar","xtfn","abcdef"]
// 输出: 16 
// 解释: 这两个单词为 "abcw", "xtfn"。
// 示例 2:

// 输入: ["a","ab","abc","d","cd","bcd","abcd"]
// 输出: 4 
// 解释: 这两个单词为 "ab", "cd"。
// 示例 3:

// 输入: ["a","aa","aaa","aaaa"]
// 输出: 0 
// 解释: 不存在这样的两个单词。
//  

// 提示：

// 2 <= words.length <= 1000
// 1 <= words[i].length <= 1000
// words[i] 仅包含小写字母
// 通过次数29,262提交次数40,833

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/maximum-product-of-word-lengths
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
function maxProduct(words: string[]): number {
  let res = 0
  words.sort((x, y) => y.length - x.length)
  for (let i = 0; i < words.length; i++) {
    for (let j = i + 1; j < words.length; j++) {
      const tem = words[j].length * words[i].length
      if (tem > res && help(words[i], words[j])) res = tem
    }
  }
  return res
}

function help(str1: string, str2: string): boolean {
  for (let i = 0; i < str2.length; i++) {
    if (str1.indexOf(str2[i]) > -1) {
      return false
    }
  }
  return true
}

function testMaxProduct() {
  const res = maxProduct(["eae", "ea", "aaf", "bda", "fcf", "dc", "ac", "ce", "cefde", "dabae"])
  console.log(res)
}

testMaxProduct()