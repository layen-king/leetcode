// 合并两个有序链表

// 简单

// 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的

// 示例 2：

// 输入：l1 = [], l2 = []
// 输出：[]
// 示例 3：

// 输入：l1 = [], l2 = [0]
// 输出：[0]
//  

// 提示：

// 两个链表的节点数目范围是 [0, 50]
// -100 <= Node.val <= 100
// l1 和 l2 均按 非递减顺序 排列

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/merge-two-sorted-lists


class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const head = new ListNode(-1)
  let tem = head
  let [p1, p2] = [l1, l2]
  while (p1 && p2) {
    if (p1.val <= p2.val) {
      tem.next = p1
      p1 = p1.next
    } else {
      tem.next = p2
      p2 = p2.next
    }
    tem = tem.next
  }
  if (p1) {
    tem.next = p1
  }
  if (p2) {
    tem.next = p2
  }
  return head.next
}

function testMergeTwoLists() {
  
}

testMergeTwoLists()
