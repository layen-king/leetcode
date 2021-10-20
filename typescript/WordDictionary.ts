// 添加与搜索单词 - 数据结构设计

// 中等

// 请你设计一个数据结构，支持 添加新单词 和 查找字符串是否与任何先前添加的字符串匹配 。

// 实现词典类 WordDictionary ：

// WordDictionary() 初始化词典对象
// void addWord(word) 将 word 添加到数据结构中，之后可以对它进行匹配
// bool search(word) 如果数据结构中存在字符串与 word 匹配，则返回 true ；否则，返回  false 。word 中可能包含一些 '.' ，每个 . 都可以表示任何一个字母。
//  

// 示例：

// 输入：
// ["WordDictionary","addWord","addWord","addWord","search","search","search","search"]
// [[],["bad"],["dad"],["mad"],["pad"],["bad"],[".ad"],["b.."]]
// 输出：
// [null,null,null,null,false,true,true,true]

// 解释：
// WordDictionary wordDictionary = new WordDictionary();
// wordDictionary.addWord("bad");
// wordDictionary.addWord("dad");
// wordDictionary.addWord("mad");
// wordDictionary.search("pad"); // return False
// wordDictionary.search("bad"); // return True
// wordDictionary.search(".ad"); // return True
// wordDictionary.search("b.."); // return True

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/design-add-and-search-words-data-structure
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
class WordDictionary {
  // 暴力解
  wordList: string[] = []
  constructor() {
  }
  addWord(word: string) {
    this.wordList.push(word)
  }
  search(work: string) {
    const r = new RegExp(work)
    return this.wordList.some(e => e.length === work.length && r.test(e))
  }
}

class WordDictionary1 {
  // 使用map
  wordList: Map<number, Set<string>> = new Map()
  constructor() {
  }
  addWord(word: string) {
    if (this.wordList.has(word.length)) {
      this.wordList.get(word.length).add(word)
    } else {
      this.wordList.set(word.length, new Set(word))
    }
  }
  search(word: string) {
    if (this.wordList.has(word.length)) {
      const list = Array.from(this.wordList.get(word.length))
      return list.some(e => new RegExp(word).test(e))
    }
    return false
  }
}