/**
 * Given n points on a 2D plane, find the maximum number of points that lie on the same straight line
 *
 * @param {number[][]} points
 * @return {number}
 */
const maxPointsOnLine = (points) => {
    if (points.length < 3) {
        return points.length;
    }

    const maxDiv = (a, b) => {
        let i = Math.min(Math.abs(a), Math.abs(b));
        while (i > 0) {
            if (a % i === 0 && b % i === 0) {
                return i;
            }
            --i;
        }
        return 1;
    }

    let hash = {};
    let max = 0;
    let same = 0;

    for (let i = 0; i < points.length - 1; ++i) {
        for (let j = i + 1; j < points.length; ++j) {
            let key = '';
            if (points[j][0] === points[i][0]) {
                if (points[j][1] === points[i][1]) {
                    ++same;
                    continue;
                }
                key = points[j][0];
            } else if (points[j][1] === points[i][1]) {
                key = '0'
            } else {
                const a = points[j][1] - points[i][1];
                const b = points[j][0] - points[i][0];
                const div = maxDiv(a, b);
                const sign = Math.sign(a) !== Math.sign(b) ? '-' : '+';
                key = sign + Math.abs(a/div) + '/' + Math.abs(b/div);
            }

            if (!hash[key]) {
                hash[key] = 1;
            }

            hash[key] += 1;
        }

        const max_i = Object.values(hash).reduce((max, i) => {
            max = Math.max(max, i);

            return max;
        }, 0);

        if (!max_i && same) {
            ++same;
        }

        max = Math.max(max, max_i + same);
        hash = {};
        same = 0;
    }

    return max;
};
