/**
 * Given two strings representing two complex numbers.
 *
 * You need to return a string representing their multiplication.
 * Note i2 = -1 according to the definition.
 *
 * Input: "1+1i", "1+1i"
 * Output: "0+2i"
 * Explanation: (1 + i) * (1 + i) = 1 + i2 + 2 * i = 2i, and you need convert it to the form of 0+2i.
 *
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const complexNumberMultiply = (a, b) => {
    let [x, y] = a.split('+');
    let [u, v] = b.split('+');
    y = y.substring(0, y.length-1);
    v = v.substring(0, v.length-1);

    return `${x*u - y*v}+${x*v + y*u}i`;
};
