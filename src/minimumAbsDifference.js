/**
 * Given an array of distinct integers arr,
 * find all pairs of elements with the minimum absolute difference of any two elements.
 * Return a list of pairs in ascending order(with respect to pairs), each pair [a, b] follows:
 * a, b are from arr
 * a < b
 * b - a equals to the minimum absolute difference of any two elements in arr
 *
 * @param {number[]} arr
 * @return {number[][]}
 */
const minimumAbsDifference = (arr) => {
    arr.sort((a, b) => a - b);

    let min = Infinity;
    for (let i = 0; i < arr.length - 1; ++i) {
        const delta = Math.abs(arr[i] - arr[i + 1]);
        if (delta < min) {
            min = delta;
        }
    }

    const result = [];
    for (let i = 0; i < arr.length - 1; ++i) {
        const delta = Math.abs(arr[i] - arr[i + 1]);
        if (delta === min) {
            result.push([arr[i], arr[i + 1]]);
        }
    }

    return result;
};
