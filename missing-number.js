/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    if (!nums) return -1;
    let n = nums.length;
    let st = new Set();
    for (let i = 0; i < n; i++) {
        st.add(nums[i]);
    }
    for (let i = 0; i <= n; i++) {
        if (!st.has(i)) return i;
    }
    return -1;
};