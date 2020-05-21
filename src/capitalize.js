/**
 * Write a function that accepts a string. The function should
 * capitalize the first letter of each word in the string then
 * return the capitalized string.
 *
 * @param {string} str
 * @return {string}
 */
const capitalize = (str) => {
    return str.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
};
