/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root) return [];
    let result = [];
    let q = [];
    q.push(root);
    
    while(q.length > 0) {
        let size = q.length;
        let curr = [];
        for (let i = 0; i < size; i++) {
            let head = q.shift();
            curr.push(head.val);
            if (head.left) q.push(head.left);
            if (head.right) q.push(head.right);
        }
        result.push(curr);
    }
    
    return result;
};
