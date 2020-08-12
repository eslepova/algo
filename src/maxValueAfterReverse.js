/**
 * You are given an integer array nums.
 * The value of this array is defined as the sum of |nums[i]-nums[i+1]| for all 0 <= i < nums.length-1.
 *
 * You are allowed to select any subarray of the given array and reverse it.
 * You can perform this operation only once.
 *
 * Find maximum possible value of the final array.
 *
 * Input: nums = [2,3,1,5,4]
 * Output: 10
 * Explanation: By reversing the subarray [3,1,5] the array becomes [2,5,1,3,4] whose value is 10.
 *
 * @param {number[]} nums
 * @return {number}
 */
const maxValueAfterReverse = (nums) => {
    let result = 0;
    let max = -Infinity;
    let min = Infinity;

    for (let i = 0; i < nums.length - 1; ++i) {
        result += Math.abs(nums[i] - nums[i+1]);
    }

    for (let i = 0; i < nums.length - 1; ++i) {
        max = Math.max(max, Math.min(nums[i], nums[i+1]));
        min = Math.min(min, Math.max(nums[i], nums[i+1]));
    }
    let diff = Math.max(0, (max-min)*2);

    for (let i = 1; i < nums.length - 1; ++i) {
        diff = Math.max(diff, Math.abs(nums[0] - nums[i+1]) - Math.abs(nums[i] - nums[i+1]));
    }

    for (let i = 0; i < nums.length - 1; ++i) {
        diff = Math.max(diff, Math.abs(nums[nums.length - 1] - nums[i]) - Math.abs(nums[i] - nums[i+1]));
    }

    return result + diff;
};
