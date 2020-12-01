/**
 * A query word matches a given pattern
 * if we can insert lowercase letters to the pattern word
 * so that it equals the query.
 * (We may insert each character at any position, and may insert 0 characters.)
 *
 * Given a list of queries, and a pattern,
 * return an answer list of booleans,
 * where answer[i] is true if and only if queries[i] matches the pattern.
 *
 * Input: queries = ["FooBar","FooBarTest","FootBall","FrameBuffer","ForceFeedBack"], pattern = "FB"
 * Output: [true,false,true,true,false]
 * Explanation:
 * "FooBar" can be generated like this "F" + "oo" + "B" + "ar".
 * "FootBall" can be generated like this "F" + "oot" + "B" + "all".
 * "FrameBuffer" can be generated like this "F" + "rame" + "B" + "uffer".
 *
 * @param {string[]} queries
 * @param {string} pattern
 * @return {boolean[]}
 */
const camelMatch = (queries, pattern) => {
    return queries.map(word => {
        let i = 0;
        let j = 0;
        let result = true;
        while (j < pattern.length) {
            let found = false;
            while (i < word.length) {
                if (word[i] === pattern[j]) {
                    found = true;
                    ++i;
                    break;
                } else if (word[i] === word[i].toUpperCase()) {
                    result = false;
                    break;
                }
                ++i;
            }
            if (!result) {
                break;
            }
            if (!found) {
                result = false;
                break;
            }
            ++j;
        }

        while (i < word.length) {
            if (word[i] === word[i].toUpperCase()) {
                result = false;
                break;
            }
            ++i;
        }

        return result;
    });
}
