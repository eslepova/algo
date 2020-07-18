/**
 * We have a string S of lowercase letters, and an integer array shifts.
 * Call the shift of a letter, the next letter in the alphabet, (wrapping around so that 'z' becomes 'a').
 * For example, shift('a') = 'b', shift('t') = 'u', and shift('z') = 'a'.
 * Now for each shifts[i] = x, we want to shift the first i+1 letters of S, x times.
 * Return the final string after all such shifts to S are applied.
 *
 * @param {string} S
 * @param {number[]} shifts
 * @return {string}
 */
const shiftingLetters = (S, shifts) => {
    const aCode = 'a'.charCodeAt(0);
    const zCode = 'z'.charCodeAt(0);
    const alphabetLength = zCode - aCode + 1;
    const arr = S.split('');

    for (let i = shifts.length - 1; i >= 0; --i) {
        shifts[i] += i + 1 < shifts.length && shifts[i + 1] || 0;

        arr[i] = String.fromCharCode((arr[i].charCodeAt(0) + shifts[i] - aCode) % alphabetLength + aCode);
    }

    return arr.join('');
};
