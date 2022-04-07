// 删除链表的倒数第 N 个结点

// 中等

// 给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。

//  

// 示例 1：


// 输入：head = [1,2,3,4,5], n = 2
// 输出：[1,2,3,5]
// 示例 2：

// 输入：head = [1], n = 1
// 输出：[]
// 示例 3：

// 输入：head = [1,2], n = 1
// 输出：[1]
//  

// 提示：

// 链表中结点的数目为 sz
// 1 <= sz <= 30
// 0 <= Node.val <= 100
// 1 <= n <= sz

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
// Definition for singly-linked list.
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    let [first, second] = [head, head]
    while(n--){
        first = first.next
    }
    if(!first)return head.next
    while(first.next){
        second = second.next
        first = first.next
    }
    second.next = second.next.next
    return head
}





