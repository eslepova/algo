/**
 * Given a string, return the character that is most
 * commonly used in the string.
 *
 * @param {string} str
 * @return {string}
 */

const maxChar = (str) => {
    if (!str) {
        return str;
    }

    const charMap = {};
    for(let ch of str) {
        charMap[ch] = (charMap[ch] || 0) + 1
    }

    let maxChar;
    let maxValue = 0;
    for(let ch in charMap) {
        if(charMap[ch] > maxValue) {
            maxValue = charMap[ch];
            maxChar = ch;
        }
    }

    return maxChar;
};
