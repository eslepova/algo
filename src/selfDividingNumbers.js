/**
 * Given a lower and upper number bound,
 * output a list of every possible self dividing number,
 * including the bounds if possible.
 *
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
const selfDividingNumbers = (left, right) => {
    const result = [];

    for(let num = left; num <= right; ++num) {
        const digits = num.toString().split('');
        digits.every(digit => num % digit === 0)
        && result.push(num);
    }

    return result;
};
