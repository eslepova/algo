/**
 * There are n people that are split into some unknown number of groups.
 * Each person is labeled with a unique ID from 0 to n - 1.
 *
 * You are given an integer array groupSizes,
 * where groupSizes[i] is the size of the group that person i is in.
 * For example, if groupSizes[1] = 3, then person 1 must be in a group of size 3.
 *
 * Return a list of groups such that each person i is in a group of size groupSizes[i].
 *
 * Each person should appear in exactly one group, and every person must be in a group.
 * If there are multiple answers, return any of them.
 * It is guaranteed that there will be at least one valid solution for the given input.
 *
 * Input: groupSizes = [2,1,3,3,3,2]
 * Output: [[1],[0,5],[2,3,4]]
 *
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
const groupThePeople = (groupSizes) => {
    const groups = {};

    groupSizes.forEach((groupId, index) => {
        const group = groups[groupId];
        if (group) {
            if (group[group.length - 1].length < groupId) {
                group[group.length - 1].push(index);
            } else {
                group.push([index]);
            }
        } else {
            groups[groupId] = [[index]];
        }
    });

    const result = [];
    Object.keys(groups).forEach(groupId => result.push(...groups[groupId]));

    return result;
};
