/**
 * Given an integer, return an integer that is the reverse
 * ordering of numbers.
 *
 * @param {number} n
 * @return {number}
 */
const reverseInt = (n) => {
    const result = n.toString().split('').reverse().join('');

    return parseInt(result) * Math.sign(n);
};
