// 两两交换链表中的节点

// 中等

// 给你一个链表，两两交换其中相邻的节点，并返回交换后链表的头节点。你必须在不修改节点内部的值的情况下完成本题（即，只能进行节点交换）。

//  

// 示例 1：


// 输入：head = [1,2,3,4]
// 输出：[2,1,4,3]
// 示例 2：

// 输入：head = []
// 输出：[]
// 示例 3：

// 输入：head = [1]
// 输出：[1]
//  

// 提示：

// 链表中节点的数目在范围 [0, 100] 内
// 0 <= Node.val <= 100
// 通过次数418,866提交次数592,253

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/swap-nodes-in-pairs
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

class ListNode1 {
    val: number
    next: ListNode1 | null
    constructor(val?: number, next?: ListNode1 | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

/**
 * 两两交换链表中的节点,使用迭代
 * @param head 
 */
function swapPairs(head: ListNode1 | null): ListNode1 | null {
    // 设置哑节点
    let dummyHead = new ListNode1(0)
    // 设置节点关联
    dummyHead.next = head
    // 创建临时节点
    let tem = dummyHead
    while (tem.next && tem.next.next) {
        const n1 = tem.next
        const n2 = tem.next.next
        // 交换临时节点的后2个节点
        tem.next = n2
        n1.next = n2.next
        n2.next = n1
        // 交换完毕临时节点指向n1
        tem = n1
    }
    return dummyHead.next
}

/**
 * 两两交换链表中的节点,递归
 * @param head 
 * @returns 
 */
function swapPairs1(head: ListNode1 | null): ListNode1 | null {
    if(!head || !head.next){
        // 当到达末尾时,返回头节点
        return head
    }
    // 设置临时节点为下一个节点
    const tem = head.next
    // 递归操作,头节点为下一个节点
    head.next = swapPairs1(tem.next)
    // 继续交换
    tem.next = head
    return tem
}