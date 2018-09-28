/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
    let max = -Number.MAX_VALUE;
    getMaxPathSum(root);
    return max;
    function getMaxPathSum(root) {
        if(!root) return 0;
        // recursively get max sum of left path
        let left = getMaxPathSum(root.left);
        // recursively get max sum of right path
        let right = getMaxPathSum(root.right);
        // update max with greatest path sum (including parent)
        max = Math.max(max, root.val + left + right);
        // return greatest path direction
        return Math.max(0, root.val + left, root.val + right);
    }  
};