/**
 * Write a function that accepts an integer N
 * and returns a NxN spiral matrix.
 *
 * @param {number} n
 * @return {number[][]}
 */
const matrix = (n) => {
    let direction = 'lr';
    let delta = 0;

    let i = 0;
    let j = 0;
    let counter = 1;
    const matrix = new Array(n);
    for (let i = 0; i < n; ++i) {
        matrix[i] = [];
    }
    let finish = false;

    while(true) {
        if (finish) {
            break;
        }

        matrix[i][j] = counter++;
        switch (direction) {
            case 'lr':
                if (++j === n - delta) {
                    direction = 'tb';
                    ++i;
                    --j;
                    if (i === n - delta) {
                        finish = true;
                    }
                }
                break;
            case 'rl':
                if (--j === delta - 1) {
                    ++delta;
                    direction = 'bt';
                    --i;
                    ++j;
                    if (i === delta - 1) {
                        finish = true;
                    }
                }
                break;
            case 'tb':
                if (++i === n - delta) {
                    direction = 'rl';
                    --i;
                    --j;
                }
                break;
            case 'bt':
                if (--i === delta - 1) {
                    direction = 'lr';
                    ++i;
                    ++j;
                }
                break;
        }
    }

    return matrix;
};
