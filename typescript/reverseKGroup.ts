// K个一组翻转链表

// 困难

// 给你一个链表，每 k 个节点一组进行翻转，请你返回翻转后的链表。

// k 是一个正整数，它的值小于或等于链表的长度。

// 如果节点总数不是 k 的整数倍，那么请将最后剩余的节点保持原有顺序。

// 进阶：

// 你可以设计一个只使用常数额外空间的算法来解决此问题吗？
// 你不能只是单纯的改变节点内部的值，而是需要实际进行节点交换。
//  

// 示例 1：


// 输入：head = [1,2,3,4,5], k = 2
// 输出：[2,1,4,3,5]
// 示例 2：


// 输入：head = [1,2,3,4,5], k = 3
// 输出：[3,2,1,4,5]
// 示例 3：

// 输入：head = [1,2,3,4,5], k = 1
// 输出：[1,2,3,4,5]
// 示例 4：

// 输入：head = [1], k = 1
// 输出：[1]
// 提示：

// 列表中节点的数量在范围 sz 内
// 1 <= sz <= 5000
// 0 <= Node.val <= 1000
// 1 <= k <= sz

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/reverse-nodes-in-k-group
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * 判断链表是否还存在k数的节点
 * @param head 
 * @param k 
 */
function helpReverseKGroup(head: ListNode, k: number): boolean {
    while (k--) {
        head = head.next
        if (!head) return false
    }
    return true
}

function getListLengh(head: ListNode): number {
    let index = 0
    while (head.next) {
        index++
    }
    return index
}

function getListNodeByIndex(head: ListNode, index: number): ListNode | null {
    while (index--) {
        head = head.next
        if (!head) return null
    }
    return head
}

// #[test]
function testGetListNodeByIndex(){
    const list = new ListNode(0)
    let tem = list
    for (let i = 1; i <9;i++){
        tem.next = new ListNode(i)
        tem = tem.next
    }
    console.log(list)
}

testGetListNodeByIndex()

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
    if (!head || !head.next || k === 1) return head
    // 获取翻转次数
    const count = getListLengh(head) / k >> 0
    // 若翻转次数为0, 直接返回头节点
    if (count === 0) return head
    // 设置哑节点
    const dummyHead = new ListNode(0)
    dummyHead.next = head
    for (let i = 0; i < count; i++) {
        // 取临时头
        let temHead = getListNodeByIndex(dummyHead, i * k)
        let index = k
        // 取要变化的下一个节点
        let next = temHead.next
        let begin = next
        let end = begin.next
        while (--index) {
            // 移除end节点
            begin.next = end.next
            // 将end插入第二个
            temHead.next = end
            // 调整end的指向,为下一个节点
            end.next = begin
            // 向下执行
            next = next.next
        }
    }

    // 0 1 2 3  -> 0 2 1 3  -> 0 3 2 1

    return dummyHead.next

}

/**
 * 翻转列表辅助函数,迭代
 * @param head 
 */
function reverseListNode4(head: ListNode | null): ListNode {
    if (!head || !head.next) return head
    let begin: ListNode | null = null
    let [mid, end] = [head, head.next]
    while (true) {
        if (!end) break
        mid.next = begin
        // 整体向后移
        begin = mid
        mid = end
        end = end.next
    }
    return head
}
/**
 * 翻转列表辅助函数,递归
 * @param head 
 * @returns 
 */
function reverseListNode1(head: ListNode | null): ListNode {
    if (!head || !head.next) return head
    // 递归查找最后一个节点
    const newHead = reverseListNode1(head.next)
    head.next.next = head
    head.next = null
    return newHead
}
/**
 * 翻转列表辅助函数,头插法
 * @param head 
 * @returns 
 */
function reverseListNode2(head: ListNode | null): ListNode {
    if (!head || !head.next) return head
    let newHead = new ListNode(null)
    let tem: ListNode = null
    while (head) {
        // 临时存储第一个头节点
        tem = head
        // 将头节点从链表移除
        head = head.next
        // 将头节点添加到新链表头部
        tem.next = newHead
        // 设置新链表头节点
        newHead = tem
    }
    return newHead
}

/**
 * 翻转列表辅助函数,就地逆置法
 * @param head 
 * @returns 
 */
function reverseListNode(head: ListNode | null): ListNode {
    if (!head || !head.next) return head
    let begin = head
    let end = head.next
    while (end) {
        // 将end从链表摘除
        begin.next = end.next
        // 将end插入到表头
        end.next = head
        // 重新设置新的表头
        head = end
        // 调整end的指向,为下一个节点
        end = begin.next
    }
    return head
}