/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
export const wildcardMatchingRecursion = (s, p) => {
    let i = 0;
    let j = 0;

    const match = (i, j) => {
        let hasAnySymbBefore = false;
        while (j < p.length && i < s.length) {
            if (p[j] === '*') {
                hasAnySymbBefore = true;
                ++j;
            } else if (p[j] === '?') {
                ++i;
                ++j;
            } else {
                if (hasAnySymbBefore) {
                    hasAnySymbBefore = false;
                    let nextWord = p[j];
                    while (j+1 < p.length && p[j + 1] !== '*' && p[j + 1] !== '?') {
                        ++j;
                        nextWord += p[j];
                    }

                    // match "abab" "a*b"
                    if (j === p.length - 1) {
                        return i + nextWord.length <= s.length ? s.endsWith(nextWord) : false;
                    }

                    let foundNextSymbIndex = s.indexOf(nextWord, i);
                    const hasQuestionNext = j+1 < p.length && p[j + 1] === '?';

                    while (foundNextSymbIndex !== -1) {
                        if (match(foundNextSymbIndex + nextWord.length, j + 1)) {
                            return true;
                        }
                        if (hasQuestionNext) {
                            foundNextSymbIndex = s.indexOf(nextWord, foundNextSymbIndex + nextWord.length);
                        } else {
                            return false;
                        }
                    }

                    return false;

                } else if (s[i++] !== p[j++]) {
                    return false;
                }
            }
        }

        // match "hi" "*?"
        if (hasAnySymbBefore && j === p.length) {
            return true;
        }

        while (p[j] === '*') {
            ++j;
        }

        return i >= s.length && j >= p.length;
    };

    return match(i, j);
};

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
export const wildcardMatchingDP = (s, p) => {
    const matrix = [];

    for (let i = 0; i <= s.length; ++i) {
        matrix[i] = [];
        matrix[i][0] = false;
    }

    matrix[0][0] = true;

    for (let j = 1; j <= p.length; ++j) {
        matrix[0][j] = p[j-1] === '*' ? matrix[0][j-1] : false;
    }

    for (let i = 1; i <= s.length; ++i) {
        for (let j = 1; j <= p.length; ++j) {
            if (p[j-1] === '?' || s[i-1] === p[j-1]) {
                matrix[i][j] = matrix[i-1][j-1];
            } else if (p[j-1] === '*') {
                matrix[i][j] = matrix[i][j-1] || matrix[i-1][j];
            } else {
                matrix[i][j] = false;
            }
        }
    }

    return matrix[s.length][p.length];
};
