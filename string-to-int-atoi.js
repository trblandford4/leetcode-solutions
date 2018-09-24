/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    let res = parseInt(str);
    if (res > 2147483647)
        return 2147483647;
    if (res < -2147483648)
        return -2147483648;
    return isNaN(res) ? 0 : res;
};