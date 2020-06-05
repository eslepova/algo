/**
 * Write a function that accepts a positive number N.
 * The function should console log a pyramid shape
 * with N levels using the # character.  Make sure the
 * pyramid has spaces on both the left *and* right hand sides
 *
 * @param {number} n
 */
const pyramid = (n) => {
    const width = (n - 1) * 2 + 1;
    const arr = new Array(width);
    for (let i = 0; i < n; ++i) {
        const middle = 2 * i + 1;
        const side = (width - middle)/2;
        arr.fill(' ', 0, side);
        arr.fill('#', side, side + middle);
        arr.fill(' ', side + middle);
        console.log(arr.join(''));
    }
};
