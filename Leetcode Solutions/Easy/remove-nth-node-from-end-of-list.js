/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let start = new ListNode(-1);
    start.next = head;
    let i = 0, curr = start, nFromEnd = start;
    // move n spaces ahead
    while (curr && i <= n) {
        curr = curr.next;
        i++;
    }
    // move both to end of list
    while (curr) {
        curr = curr.next;
        nFromEnd = nFromEnd.next;
    }
    // slow pointer is n spaces from end
    nFromEnd.next = nFromEnd.next.next;
    return start.next;
};