/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    if(!nums1 || !nums2) return [];
    
    nums1.sort(ascending);
    nums2.sort(ascending);
    
    let res = [];
    let i = 0;
    let j = 0;
    
    while (i < nums1.length && j < nums2.length) {
        let x = nums1[i], y = nums2[j];
        if (x === y) {
            res.push(x);
            i++;
            j++;
        } 
        else if (x > y) {
            j++;
        } 
        else {
            i++;
        }
    }
    return res;
};

let ascending = function (a, b) { 
    return a-b 
};