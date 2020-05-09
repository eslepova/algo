/**
 * Given a string, return a new string with the reversed order of characters
 *
 * @param {string} str
 * @return {string}
 */
const reverseString = (str) => {
    let result = '';

    for (let i = str.length - 1; i >= 0; --i) {
        result += str[i];
    }

    return result;
};
