/**
 * Write a function that returns the number of vowels used in a string
 * Vowels are the characters 'a', 'e', 'i', 'o', and 'u'
 *
 * @param {string} str
 * @return {number}
 */
const vowels = (str) => {
    const vowels = {
        'a': true,
        'e': true,
        'i': true,
        'o': true,
        'u': true
    };

    let counter = 0;
    for (let i = 0; i < str.length; ++i) {
        vowels[str[i].toLowerCase()] && ++counter;
    }

    return counter;
};
