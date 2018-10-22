/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let reversed = 0;
    let neg = x < 0;
    let num = Math.abs(x)
    while (num > 0) {
        reversed *= 10;
        reversed += num % 10;
        num -= num % 10;
        num /= 10;
    }
    if (reversed > 2147483647) 
        return 0;
    if (neg) 
        reversed *= -1;
    return reversed;
};