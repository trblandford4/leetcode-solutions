/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (s == null) return 0;
    if (s.length <= 1) return s.length
    
    let map = new Map();
    let max = 0;
    let start = 0;
    
    for (let i = 0; i < s.length; i++) {
        let c = s.charAt(i)
        if (map.has(c) && map.get(c) >= start) {
            start = map.get(c) + 1;
        }
        map.set(c, i);
        max = Math.max(max, i - start + 1);
        
    }
    return max;  
};