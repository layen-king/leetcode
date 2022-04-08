class INode {
    val: number
    children: INode[]
    constructor(val?: number) {
        this.val = (val === undefined ? 0 : val)
        this.children = []
    }
}

// N叉树的层序遍历

// 中等

// 给定一个 N 叉树，返回其节点值的层序遍历。（即从左到右，逐层遍历）。

// 树的序列化输入是用层序遍历，每组子节点都由 null 值分隔（参见示例）。

//  

// 示例 1：



// 输入：root = [1,null,3,2,4,null,5,6]
// 输出：[[1],[3,2,4],[5,6]]
// 示例 2：



// 输入：root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
// 输出：[[1],[2,3,4,5],[6,7,8,9,10],[11,12,13],[14]]
//  

// 提示：

// 树的高度不会超过 1000
// 树的节点总数在 [0, 10^4] 之间
// 通过次数82,332提交次数114,761

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/n-ary-tree-level-order-traversal
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
/**
 * bfs广度优先
 * @param root 
 * @returns 
 */
function levelOrder(root: INode | null): number[][] {
    if (!root) return []
    const ans = []
    // 存储root到队列
    const queue = [root]
    while (queue.length) {
        // 拿到同一级队列长度
        const l = queue.length
        const levelAns = []
        // 处理同级队列的所有元素
        for (let i = 0; i < l; i++) {
            // 取出一个,push值到队列数组,然后将children 压入总队列
            const tem = queue.shift()
            levelAns.push(tem.val)
            if (tem.children) queue.push(...tem.children)
        }
        // 处理完毕将此队列结果push到结果
        ans.push(levelAns)
    }
    return ans
}

/**
 * dfs深度优先
 * @param root 
 * @returns 
 */
function levelOrderDfs(root: INode | null): number[][] {
    if (!root) return []
    const ans: number[][] = []
    const dfs = (node = root, lv = 0) => {
        // 当当前层级没有时,创建一个数组并且赋值
        if (!ans[lv]) ans[lv] = [node.val]
        // 存在直接push
        else ans[lv].push(node.val)
        for(const el of node.children) {
            dfs(el, lv + 1)
        }
    }
    dfs()
    return ans
}