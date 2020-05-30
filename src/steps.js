/**
 * Write a function that accepts a positive number N.
 * The function should console log a step shape
 * with N levels using the # character. Make sure the
 * step has spaces on the right hand side
 *
 * @param {number} n
 */
const steps = (n) => {
    const arr = Array(n);
    for (let i = 1; i <= n; ++i) {
        arr.fill('#', 0, i);
        arr.fill(' ', i, n);
        console.log(arr.join(''));
    }
};
