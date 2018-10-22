/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    let res = [];
    inorder(root, res);
    return res;
};

// Recursive helper method
function inorder(root, res) {
    if (root !== null) {
        inorder(root.left, res);
        res.push(root.val);
        inorder(root.right, res);
    }
}