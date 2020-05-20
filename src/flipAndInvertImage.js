/**
 * Given a binary matrix A, we want to flip the image horizontally,
 * then invert it, and return the resulting image.
 *
 * @param {number[][]} A
 * @return {number[][]}
 */
const flipAndInvertImage = (A) => {
    if (!A.length) {
        return A;
    }

    const lastIndex = A[0].length - 1;
    const halfRowLength = Math.ceil(A[0].length/2);

    for (let i = 0; i < A.length; ++i) {
        for (let j = 0; j < halfRowLength; ++j) {
            const tmp = A[i][lastIndex - j] ^ 1;
            A[i][lastIndex - j] = A[i][j] ^ 1;
            A[i][j] = tmp;
        }
    }

    return A;
};
