/**
 * Given an array A of 0s and 1s, consider N_i:
 * the i-th subarray from A[0] to A[i] interpreted as a binary number
 * (from most-significant-bit to least-significant-bit.)
 * Return a list of booleans answer,
 * where answer[i] is true if and only if N_i is divisible by 5.
 *
 * @param {number[]} A
 * @return {boolean[]}
 */
const prefixesDivBy5 = (A) => {
    if (!A.length) {
        return [];
    }

    const result = [];
    let curr = 0;
    for (let num of A) {
        curr = (curr*2 + num)%5
        result.push(curr === 0);
    }

    return result;
};
