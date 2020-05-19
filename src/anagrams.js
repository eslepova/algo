/**
* Check to see if two provided strings are anagrams of each other
* Only consider characters, not spaces or punctuation
* Consider capital letters to be the same as lower case
*
* @param {string} stringA
* @param {string} stringB
* @return {boolean}
*/
const anagrams1  = (stringA, stringB) => {
    const a = stringA.replace(/\W/g, '').toLowerCase();
    const b = stringB.replace(/\W/g, '').toLowerCase();

    if (a.length !== b.length) {
        return false;
    }

    const charMapA = {};
    for(let ch of a) {
        charMapA[ch] = (charMapA[ch] || 0) + 1;
    }
    const charMapB = {};
    for(let ch of b) {
        charMapB[ch] = (charMapB[ch] || 0) + 1;
    }

    for (let ch in charMapA) {
        if (charMapA[ch] !== charMapB[ch]) {
            return false;
        }
    }

    return true;
};

/**
* @param {string} stringA
* @param {string} stringB
* @return {boolean}
*/
const anagrams2  = (stringA, stringB) => {
    const a = stringA.replace(/\W/g, '').toLowerCase().split('').sort().join('');
    const b = stringB.replace(/\W/g, '').toLowerCase().split('').sort().join('');

    return a === b;
};
