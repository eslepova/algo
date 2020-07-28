/**
 * Given the array houses and an integer k.
 * where houses[i] is the location of the ith house along a street,
 * your task is to allocate k mailboxes in the street.
 * Return the minimum total distance between each house and its nearest mailbox.
 *
 * Input: houses = [2,3,5,12,18], k = 2
 * Output: 9
 * Explanation: Allocate mailboxes in position 3 and 14.
 * Minimum total distance from each houses to nearest mailboxes is |2-3| + |3-3| + |5-3| + |12-14| + |18-14| = 9.
 *
 * @param {number[]} houses
 * @param {number} k
 * @return {number}
 */
const minDistance = (houses, k) => {
    houses.sort((a, b) => a - b);

    const dp = [];

    const findDist = (i, k) => {
        if (dp[i] && dp[i][k]) {
            return dp[i][k];
        }

        if (i === houses.length && k === 0) {
            return 0;
        }
        if (i === houses.length || k === 0) {
            return Infinity;
        }

        let res = Infinity;
        for (let j = i; j < houses.length; ++j) {
            let total = 0;
            const median = houses[Math.round((j - i)/2) + i];
            for (let t = i; t <= j; ++t) {
                total += Math.abs(houses[t] - median);
            }
            const nextDist = findDist(j + 1, k - 1);
            if (nextDist !== Infinity) {
                res = Math.min(res, total + nextDist);
            }
        }
        if (!dp[i]) {
            dp[i] = [];
        }
        dp[i][k] = res;
        return res;
    }

    return findDist(0, k);
};
