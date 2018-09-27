/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    if (!head) return;
    let list = [];
    let curr = head;
    while (curr) {
        list.push(curr);
        curr = curr.next;
    }
    
    let i = 0;
    let n = list.length - 1;
    while (i < Math.ceil(n / 2)) {
        curr = list[i];
        curr.next = list[n - i];
        i++;
        curr.next.next = list[i];
    }
    list[i].next = null;
};