/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
    // Given node is not the tail
    // Copy next node's val to curr
    node.val = node.next.val;
    // copy next node's next pointer
    node.next = node.next.next;
};