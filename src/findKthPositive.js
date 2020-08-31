/**
 * Given an array arr of positive integers sorted in a strictly increasing order, and an integer k.
 * Find the kth positive integer that is missing from this array.
 *
 * Input: arr = [2,3,4,7,11], k = 5
 * Output: 9
 * Explanation: The missing positive integers are [1,5,6,8,9,10,12,13,...].
 * The 5th missing positive integer is 9.
 *
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
const findKthPositive = (arr, k) => {
    if (!arr.length) {
        return k;
    }

    const copy = k;
    k -= arr[0] - 1;
    if (k <= 0) {
        return copy;
    }

    for (let i = 1; i < arr.length; ++i) {
        const diff = arr[i] - arr[i-1];
        if (diff !== 1 && diff > k) {
            return arr[i-1] + k;
        }
        if (diff > 1) {
            k -= diff - 1;
        }
    }

    return arr[arr.length - 1] + k;
};
