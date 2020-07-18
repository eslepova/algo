/**
 * Print out the n-th entry in the fibonacci series.
 * The fibonacci series is an ordering of numbers where
 * each number is the sum of the preceeding two.
 * For example, the sequence
 * [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
 * forms the first ten entries of the fibonacci series.
 *
 * @param {number} n
 * @return {number}
 */
const fib1 = (n) => {
    if (n === 1) {
        return 1;
    }

    let a = 0;
    let b = 1;
    let counter = 1;
    while (counter < n) {
        const tmp = a;
        a = b;
        b = a + tmp;
        counter++;
    }

    return b;
};

const cash = {};

const fib = (n) => {
    if (cash[n]) {
        return cash[n];
    }

    let result;
    if (n < 2) {
        result = n;
    } else {
        result = fib(n - 1) + fib(n - 2);
    }

    cash[n] = result;
    return result;
};
