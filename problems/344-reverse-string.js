/**
 * * 344. 反转字符串
 * * 递归
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
    function helper(left, right) {
        if (left < right) {
            [s[left], s[right]] = [s[right], s[left]];
            helper(left + 1, right - 1);
        }
    }
    s.length && helper(0, s.length - 1);
};
// const str = ['h', 'e', 'l', 'l', 'o'];
const str = [
    'A',
    ' ',
    'm',
    'a',
    'n',
    ',',
    ' ',
    'a',
    ' ',
    'p',
    'l',
    'a',
    'n',
    ',',
    ' ',
    'a',
    ' ',
    'c',
    'a',
    'n',
    'a',
    'l',
    ':',
    ' ',
    'P',
    'a',
    'n',
    'a',
    'm',
    'a',
];
const result = [
    'a',
    'm',
    'a',
    'n',
    'a',
    'P',
    ' ',
    ':',
    'l',
    'a',
    'n',
    'a',
    'c',
    ' ',
    'a',
    ' ',
    ',',
    'n',
    'a',
    'l',
    'p',
    ' ',
    'a',
    ' ',
    ',',
    'n',
    'a',
    'm',
    ' ',
    'A',
];
reverseString(str);
str.join('') === result.join('');
