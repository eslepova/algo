/**
 * Given an array nums with n integers,
 * your task is to check if it could become non-decreasing by modifying at most 1 element.
 *
 * We define an array is non-decreasing
 * if nums[i] <= nums[i + 1] holds for every i (0-based) such that (0 <= i <= n - 2).
 *
 * Input: nums = [4,2,3]
 * Output: true
 * Explanation: You could modify the first 4 to 1 to get a non-decreasing array.
 *
 * @param {number[]} nums
 * @return {boolean}
 */
const checkPossibility = (nums) => {
    let modified = false;
    let i = 0;
    while (i < nums.length - 1) {
        if (nums[i] > nums[i+1]) {
            if (modified) {
                return false;
            }
            if (i !== 0 && nums[i-1] > nums[i+1]) {
                if (i < nums.length - 2 && nums[i] < nums[i+2]
                    || i === nums.length - 2) {
                    i = i + 2;
                    modified = true;
                    continue;
                }
                return false;
            }
            modified = true;
        }
        ++i;
    }

    return true;
};
