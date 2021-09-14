// 通过删除字母匹配到字典里最长单词

// 中等

// 给你一个字符串 s 和一个字符串数组 dictionary 作为字典，找出并返回字典中最长的字符串，该字符串可以通过删除 s 中的某些字符得到。

// 如果答案不止一个，返回长度最长且字典序最小的字符串。如果答案不存在，则返回空字符串。

//  

// 示例 1：

// 输入：s = "abpcplea", dictionary = ["ale","apple","monkey","plea"]
// 输出："apple"
// 示例 2：

// 输入：s = "abpcplea", dictionary = ["a","b","c"]
// 输出："a"
//  

// 提示：

// 1 <= s.length <= 1000
// 1 <= dictionary.length <= 1000
// 1 <= dictionary[i].length <= 1000
// s 和 dictionary[i] 仅由小写英文字母组成

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/longest-word-in-dictionary-through-deleting
function findLongestWord(s: string, dictionary: string[]): string {
  let ans:string[] = []
  for (const s2 of dictionary) {
    if (help(s, s2)) {
      if(ans.length ===0 || ans[0].length === s2.length) ans.push(s2)
      if(ans[0].length < s2.length){
        ans = []
        ans.push(s2)
      }
    }
  }
  ans.sort()
  return ans[0] || ''
}

function help(s1: string, s2: string) {
  let [index1, index2, sum] = [0, 0, 0]
  while (index2 < s2.length && index1 < s1.length) {
    if (s2[index2] === s1[index1]) {
      index2++
      sum++
    }
    index1++
  }
  return sum === s2.length
}

function testFindLongestWord() {
  const result = findLongestWord('abce', ["abe", "abc",])
  console.log(result)
}

testFindLongestWord()