/**
 * * 202. 快乐数
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    let set = new Set(),
        sum = 0;
    n += '';
    while (sum !== 1) {
        sum = n.split('').reduce((prev, cur) => prev + cur ** 2, 0);
        n = sum + '';
        if (set.has(sum)) return false;
        set.add(sum);
    }
    return true;
};
console.log(isHappy(19));
