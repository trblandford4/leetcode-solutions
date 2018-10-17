/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    if (!nums) return;
    let map = {};
    let majority = 1;
    let result = nums[0];
    for (let i = 0; i < nums.length; i++) {
        let val = nums[i];
        map[val] = (map[val] || 0) + 1;
        if (map[val] > majority) {
            majority = map[val]
            result = val;
        }
    }
    return result;
};