/**
 * Given an array of integers, return the maximum sum
 * for a non-empty subarray (contiguous elements)with at most one element deletion.
 * In other words, you want to choose a subarray and
 * optionally delete one element from it so that there is still at least one element left
 * and the sum of the remaining elements is maximum possible.
 *
 * Note that the subarray needs to be non-empty after deleting one element.
 *
 * Input: arr = [1,-2,0,3]
 * Output: 4
 * Explanation: Because we can choose [1, -2, 0, 3] and drop -2,
 * thus the subarray [1, 0, 3] becomes the maximum value.
 *
 * @param {number[]} arr
 * @return {number}
 */
const maximumSum = (arr) => {
    let result = arr[0];
    const start = [];
    const end = [];

    end[0] = arr[0];
    for (let i = 1; i < arr.length; ++i) {
        end[i] = Math.max(end[i-1] + arr[i], arr[i]);
        result = Math.max(result, end[i]);
    }

    start[arr.length-1] = arr[arr.length-1];
    for (let i = arr.length-2; i >=0; --i ) {
        start[i] = Math.max(start[i+1] + arr[i], arr[i]);
        result = Math.max(result, start[i]);
    }

    for (let i = 1; i < arr.length - 1; ++i) {
        result = Math.max(result, end[i-1] + start[i+1]);
    }

    return result;
};
