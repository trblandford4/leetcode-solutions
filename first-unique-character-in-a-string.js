/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    if (!s) return -1;
    let map = {};
    for (let i = 0; i < s.length; i++) {
        let c = s.charAt(i)
        map[c] = (map[c] || 0) + 1;
    }
    
    for (let i = 0; i < s.length; i++) {
        let c = s.charAt(i)
        if (map[c] === 1) return i;
    }
    return -1;
};