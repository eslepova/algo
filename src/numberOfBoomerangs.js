/**
 * You are given n points in the plane that are all distinct,
 * where points[i] = [xi, yi].
 * A boomerang is a tuple of points (i, j, k)
 * such that the distance between i and j equals the distance between i and k
 * (the order of the tuple matters).
 * Return the number of boomerangs.
 *
 * Input: [[0,0],[1,0],[2,0]]
 * Output: 2
 * The two boomerangs are [[1,0],[0,0],[2,0]] and [[1,0],[2,0],[0,0]].
 *
 * @param {number[][]} points
 * @return {number}
 */
const numberOfBoomerangs = (points) => {
    let result = 0;

    for (let i = 0; i < points.length - 2; ++i) {
        for (let j = i + 1; j < points.length - 1; ++j) {
            for (let k = j + 1; k < points.length; ++k) {
                const a = Math.pow(points[i][0] - points[j][0], 2) + Math.pow(points[i][1] - points[j][1], 2);
                const b = Math.pow(points[i][0] - points[k][0], 2) + Math.pow(points[i][1] - points[k][1], 2);
                const c = Math.pow(points[k][0] - points[j][0], 2) + Math.pow(points[k][1] - points[j][1], 2);
                if (a === b) {
                    result += 2;
                }
                if (a === c) {
                    result += 2;
                }
                if (b === c) {
                    result += 2;
                }
            }
        }
    }

    return result;
}

const numberOfBoomerangs = (points) => {
    let result = 0;

    for (let i = 0; i < points.length; ++i) {
        const map = {};
        for (let j = 0; j < points.length; ++j) {
            if (i === j) {
                continue;
            }

            const dist = Math.pow(points[i][0] - points[j][0], 2) + Math.pow(points[i][1] - points[j][1], 2);
            map[dist] = (map[dist] || 0) + 1;
        }

        Object.keys(map).map(dist => result += map[dist]*(map[dist]-1));
    }

    return result;
}
