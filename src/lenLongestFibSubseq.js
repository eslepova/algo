/**
 * Given a strictly increasing array A
 * of positive integers forming a sequence,
 * find the length of the longest fibonacci-like subsequence of A.
 * If one does not exist, return 0.
 * For example, [3, 5, 8] is a subsequence of [3, 4, 5, 6, 7, 8]
 *
 * @param {number[]} A
 * @return {number}
 */
const lenLongestFibSubseq = (A) => {
    const set = new Set(A);

    let counter = 0;
    for (let i = 0; i < A.length - 2; ++i) {
        for (let j = i + 1; j < A.length - 1; ++j) {
            let nextCounter = 0;
            let a = A[i];
            let b = A[j];
            while (set.has(a + b)) {
                const sum = a + b;
                a = b;
                b = sum;
                ++nextCounter;
            }
            if (nextCounter > counter) {
                counter = nextCounter;
            }
        }
    }

    return counter ? counter + 2 : 0;
};

/**
* @param {number[]} A
* @return {number}
*/
const lenLongestFibSubseqDP = (A) => {
    let N = A.length;
    let index = new Map();
    A.map((v, i) => index[v] = i);

    let longest = new Map();
    let length = 0;
    for (let k = 0; k < N; ++k)
        for (let j = 0; j < k; ++j) {
            let i = index[A[k] - A[j]];
            if (i === undefined || i >= j) continue;
            if (longest[i * N + j] === undefined)
                longest[i * N + j] = 2;

            longest[j * N + k] = longest[i * N + j] + 1;
            length = Math.max(length, longest[j * N + k]);
        }

    return length >= 3 ? length : 0;
};
