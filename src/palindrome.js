/**
 * Given a string, return true if the string is a palindrome
 * or false if it is not.
 *
 * @param {string} str
 * @return {boolean}
 */
const palindrome = (str) => {
    let i = 0;
    let j = str.length - 1;
    while (i < j) {
        if (str[i++] !== str[j--]) {
            return false;
        }
    }

    return true;
};
