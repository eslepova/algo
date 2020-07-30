/**
 * We distribute some number of candies, to a row of n = num_people people in the following way:
 *
 * We then give 1 candy to the first person, 2 candies to the second person,
 * and so on until we give n candies to the last person.
 *
 * Then, we go back to the start of the row,
 * giving n + 1 candies to the first person, n + 2 candies to the second person,
 * and so on until we give 2 * n candies to the last person.
 *
 * This process repeats (with us giving one more candy each time,
 * and moving to the start of the row after we reach the end) until we run out of candies.
 * The last person will receive all of our remaining candies (not necessarily one more than the previous gift).
 *
 * Return an array (of length num_people and sum candies) that represents the final distribution of candies.
 *
 * Input: candies = 10, num_people = 3
 * Output: [5,2,3]
 * Explanation:
 * On the first turn, ans[0] += 1, and the array is [1,0,0].
 * On the second turn, ans[1] += 2, and the array is [1,2,0].
 * On the third turn, ans[2] += 3, and the array is [1,2,3].
 * On the fourth turn, ans[0] += 4, and the final array is [5,2,3].
 *
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
const distributeCandies = (candies, num_people) => {
    const result = new Array(num_people);
    result.fill(0);

    const numPeopleForCandies = Math.floor((Math.sqrt(1 + 8*candies) - 1)/2);
    const rowCount = numPeopleForCandies > 0 ? Math.floor(numPeopleForCandies / num_people) : 0;
    const numPeopleInCompleteRows = rowCount*num_people;
    const candiesInCompleteRows = (1 + numPeopleInCompleteRows)*numPeopleInCompleteRows/2;
    let remains = candies - (numPeopleInCompleteRows > 0 ? candiesInCompleteRows : 0);

    let k = 0;
    for (let i = 0; i < rowCount; ++i) {
        k += i;
    }

    for (let i = 0; i < num_people; ++i) {
        const lastRowCandies = i + 1 + rowCount*num_people;
        let toAdd = 0;
        if (lastRowCandies > remains) {
            toAdd = remains;
            remains = 0;
        } else {
            toAdd = lastRowCandies;
            remains -= lastRowCandies;
        }
        result[i] = rowCount*(i + 1) + num_people*k + toAdd;
    }


    return result;
};
