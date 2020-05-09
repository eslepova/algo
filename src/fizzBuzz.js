/**
 * Write a program that return the array of numbers
 * from 1 to n. But for multiples of three print
 * “fizz” instead of the number and for the multiples
 * of five print “buzz”. For numbers which are multiples
 * of both three and five print “fizzbuzz”.
 *
 * @param {number} n
 * @return {Array}
 */
const fizzBuzz = (n) => {
    const result = [];

    for (let i = 1; i <= n; ++i) {
        const multiple3 = i % 3 === 0;
        const multiple5 = i % 5 === 0;

        if (multiple3 && multiple5) {
            result.push('fizzbuzz');
        } else if (multiple3) {
            result.push('fizz');
        } else if (multiple5) {
            result.push('buzz');
        } else {
            result.push(i);
        }
    }

    return result;
}
