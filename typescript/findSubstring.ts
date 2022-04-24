// 串联所有单词的子串

// 困难

// 给定一个字符串 s 和一些 长度相同 的单词 words 。找出 s 中恰好可以由 words 中所有单词串联形成的子串的起始位置。

// 注意子串要与 words 中的单词完全匹配，中间不能有其他字符 ，但不需要考虑 words 中单词串联的顺序。

//  

// 示例 1：

// 输入：s = "barfoothefoobarman", words = ["foo","bar"]
// 输出：[0,9]
// 解释：
// 从索引 0 和 9 开始的子串分别是 "barfoo" 和 "foobar" 。
// 输出的顺序不重要, [9,0] 也是有效答案。
// 示例 2：

// 输入：s = "wordgoodgoodgoodbestword", words = ["word","good","best","word"]
// 输出：[]
// 示例 3：

// 输入：s = "barfoofoobarthefoobarman", words = ["bar","foo","the"]
// 输出：[6,9,12]
//  

// 提示：

// 1 <= s.length <= 104
// s 由小写英文字母组成
// 1 <= words.length <= 5000
// 1 <= words[i].length <= 30
// words[i] 由小写英文字母组成
// 通过次数104,021提交次数281,492

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/substring-with-concatenation-of-all-words
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
function findSubstring(s: string, words: string[]): number[] {
  const hashMap = new Map<string, number>()
  const [wordsLen, len] = [words.reduce((acc, word) => acc + word.length, 0), words[0].length]
  for (const word of words) {
    if (hashMap.has(word)) {
      hashMap.set(word, hashMap.get(word) + 1)
    } else {
      hashMap.set(word, 1)
    }
  }
  const res = []
  for (let i = 0; i < s.length; i++) {
    const map = new Map<string, number>()
    // 以3个为一组开始遍历,遍历到words.length
    for (let j = i; j < wordsLen + i; j += len) {
      const tem = s.substring(j, j + len)
      if (!words.includes(tem)) {
        break
      } else {
        if (map.has(tem)) {
          map.set(tem, map.get(tem) + 1)
        } else {
          map.set(tem, 1)
        }
      }
    }
    if (map.size === hashMap.size) {
      let flag = true
      hashMap.forEach((v, k) => {
        if (map.get(k) !== v) {
          flag = false
        }
      })
      if (flag) res.push(i)
    }
  }
  return res
}