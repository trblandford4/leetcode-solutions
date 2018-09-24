/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    if (s.length < 1 || s == null) return 0;
    const map = new Map();
    map.set("I", 1);
    map.set("V", 5);
    map.set("X", 10);
    map.set("L", 50);
    map.set("C", 100);
    map.set("D", 500);
    map.set("M", 1000);
    
    let res = 0;
    let i = s.length;
    while (i--) {
        let curr = map.get(s.charAt(i));
        let prev = map.get(s.charAt(i - 1));
        
        res += curr;
        if (prev < curr) {
            res -= prev;
            i--;
        } 
    }
    return res;    
};