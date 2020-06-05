/**
* You are asked to cut off trees in a forest for a golf event.
* The forest is represented as a non-negative 2D map, in this map:
* 0 represents the obstacle can't be reached.
* 1 represents the ground can be walked through.
* The place with number bigger than 1 represents a tree can be walked through,
* and this positive number represents the tree's height.
* In one step you can walk in any of the four directions top, bottom,
* left and right also when standing in a point which is a tree you can decide whether or not to cut off the tree.
* You are asked to cut off all the trees in this forest in the order of tree's height -
* always cut off the tree with lowest height first. And after cutting, the original place has the tree will become a grass (value 1).
* You will start from the point (0, 0) and you should output the minimum steps you need
* to walk to cut off all the trees. If you can't cut off all the trees, output -1 in that situation.
* You are guaranteed that no two trees have the same height and there is at least one tree needs to be cut off.
* example Input:
* [
* [1,2,3],
* [0,0,4],
* [7,6,5]
* ]
* Output: 6
*
* @param {number[][]} forest
* @return {number}
*/
const cutOffTreeWithBfs = (forest) => {
    const dr = [-1, 1, 0, 0];
    const dc = [0, 0, -1, 1];
    const rCount = forest.length;
    const cCount = rCount && forest[0].length;

    const bfs = ([y1, x1], [y2, x2]) => {
        const queue = [[0, y1, x1]];
        const seen = {
            [y1 * cCount + x1]: true
        };

        while (queue.length) {
            const curr = queue.shift();
            if (curr[1] === y2 && curr[2] === x2) {
                return curr[0];
            }
            for (let i = 0; i < 4; ++i) {
                const ny = curr[1] + dr[i];
                const nx = curr[2] + dc[i];
                if (ny < rCount && ny >= 0
                    && nx < cCount && nx >=0
                    && forest[ny][nx] > 0
                    && !seen[ny * cCount + nx]) {
                    queue.push([curr[0] + 1, ny, nx])
                    seen[ny * cCount + nx] = true;
                }
            }
        }

        return -1;
    }

    const arr = [];

    for (let i = 0; i < forest.length; ++i) {
        for (let j = 0; j < forest[i].length; ++j) {
            if (forest[i][j] > 1) {
                arr.push({val: forest[i][j], coord: [i, j]});
            }
        }
    }

    arr.sort(({val: a}, {val: b}) => a - b);

    let steps = 0;
    let from = [0, 0];
    for (let i = 0; i < arr.length; ++i) {
        const step = bfs(from, arr[i].coord);
        if (step === -1) {
            return -1;
        }
        from = arr[i].coord;
        steps += step;
    }

    return steps;
};

const cutOffTreeWithAStart = (forest) => {
    const dr = [-1, 1, 0, 0];
    const dc = [0, 0, -1, 1];
    const rCount = forest.length;
    const cCount = rCount && forest[0].length;

    const addToHeap = (arr, val) => {
        if (!arr.length) {
            arr.push(val);
            return;
        }

        const deltaStart = Math.abs(arr[0][0] - val[0]);
        const deltaEnd = Math.abs(arr[arr.length-1][0] - val[0]);
        if (deltaStart < deltaEnd) {
            let i = 0;
            while(i < arr.length && val[0] > arr[i][0]) {
                ++i;
            }
            arr.splice(i, 0, val);
        } else {
            let i = arr.length - 1;
            while(i >= 0 && val[0] < arr[i][0]) {
                --i;
            }
            arr.splice(i+1, 0, val);
        }
    }

    const aStar = ([y1, x1], [y2, x2]) => {
        const heap = [[0, 0, y1, x1]];
        const cost = {
            [y1 * cCount + x1]: 0
        };

        while (heap.length) {
            const curr = heap.shift();
            if (curr[2] === y2 && curr[3] === x2) {
                return curr[1];
            }
            for (let i = 0; i < 4; ++i) {
                const ny = curr[2] + dr[i];
                const nx = curr[3] + dc[i];
                if (ny < rCount && ny >= 0
                    && nx < cCount && nx >=0
                    && forest[ny][nx] > 0) {
                    const ncost = curr[1] + 1 + Math.abs(y2-ny) + Math.abs(x2-nx);
                    if (ncost < (cost[ny * cCount + nx] === undefined ? Infinity : cost[ny * cCount + nx])) {
                        addToHeap(heap, [ncost, curr[1] + 1, ny, nx]);
                        cost[ny * cCount + nx] = ncost;
                    }
                }
            }
        }

        return -1;
    }

    const arr = [];

    for (let i = 0; i < forest.length; ++i) {
        for (let j = 0; j < forest[i].length; ++j) {
            if (forest[i][j] > 1) {
                arr.push({val: forest[i][j], coord: [i, j]});
            }
        }
    }

    arr.sort(({val: a}, {val: b}) => a - b);

    let steps = 0;
    let from = [0, 0];
    for (let i = 0; i < arr.length; ++i) {
        const step = aStar(from, arr[i].coord);
        if (step === -1) {
            return -1;
        }
        from = arr[i].coord;
        steps += step;
    }

    return steps;
};

const cutOffTreeWithHadlocksAlgo = (forest) => {
    const dr = [-1, 1, 0, 0];
    const dc = [0, 0, -1, 1];
    const rCount = forest.length;
    const cCount = rCount && forest[0].length;

    const hadlocks = ([y1, x1], [y2, x2]) => {
        const queue = [[0, y1, x1]];
        const seen = {};

        while (queue.length) {
            const curr = queue.shift();
            const y = curr[1];
            const x = curr[2];
            if (seen[y * cCount + x]) {
                continue;
            }

            seen[y * cCount + x] = true;
            if (y === y2 && x === x2) {
                return Math.abs(y1 - y2) + Math.abs(x1 - x2) + 2 * curr[0];
            }

            for (let i = 0; i < 4; ++i) {
                const ny = y + dr[i];
                const nx = x + dc[i];
                if (ny < rCount && ny >= 0 && nx < cCount && nx >=0 && forest[ny][nx] > 0) {
                    let closer = false;
                    switch(i) {
                        case 0:
                            closer = y > y2;
                            break;

                        case 1:
                            closer = y < y2;
                            break;

                        case 2:
                            closer = x > x2;
                            break;

                        case 3:
                            closer = x < x2;
                            break;
                    }
                    if (closer) {
                        queue.unshift([curr[0], ny, nx]);
                    } else {
                        queue.push([curr[0] + 1, ny, nx]);
                    }
                }
            }
        }

        return -1;
    }

    const arr = [];

    for (let i = 0; i < forest.length; ++i) {
        for (let j = 0; j < forest[i].length; ++j) {
            if (forest[i][j] > 1) {
                arr.push({val: forest[i][j], coord: [i, j]});
            }
        }
    }

    arr.sort(({val: a}, {val: b}) => a - b);

    let steps = 0;
    let from = [0, 0];
    for (let i = 0; i < arr.length; ++i) {
        const step = hadlocks(from, arr[i].coord);
        if (step === -1) {
            return -1;
        }
        from = arr[i].coord;
        steps += step;
    }

    return steps;
};
