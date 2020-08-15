/**
 * Normally, the factorial of a positive integer n is the product of all positive integers
 * less than or equal to n.  For example, factorial(10) = 10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1.
 *
 * We instead make a clumsy factorial: using the integers in decreasing order,
 * we swap out the multiply operations for a fixed rotation of operations:
 * multiply (*), divide (/), add (+) and subtract (-) in this order.
 *
 * For example, clumsy(10) = 10 * 9 / 8 + 7 - 6 * 5 / 4 + 3 - 2 * 1.
 * However, these operations are still applied using the usual order of operations of arithmetic:
 * we do all multiplication and division steps before any addition or subtraction steps,
 * and multiplication and division steps are processed left to right.
 *
 * Additionally, the division that we use is floor division such that 10 * 9 / 8 equals 11.
 * This guarantees the result is an integer.
 *
 * @param {number} N
 * @return {number}
 */
const clumsy = (N) => {
    const getPart = (n) => {
        if (n === 0) {
            return [0, 0];
        } else if (n === 1) {
            return [1, 0];
        } else if (n === 2) {
            return [2, 0];
        } else {
            return [Math.floor(n*(n-1)/(n-2)), n-=3];
        }
    };

    let [sum, n] = getPart(N);
    let operation = true;
    while(n > 0) {
        switch(operation) {
            // +
            case true:
                sum += n;
                --n;
                break;

            // -
            case false:
                const [part, next_n] = getPart(n);
                sum -= part;
                n = next_n;
                break;

        }
        operation = !operation;
    }

    return sum;
};
