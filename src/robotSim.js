/**
 * A robot on an infinite grid starts at point (0, 0) and faces north.
 * The robot can receive one of three possible types of commands:
 * -2: turn left 90 degrees
 * -1: turn right 90 degrees
 * 1 <= x <= 9: move forward x units
 *
 * Some of the grid squares are obstacles.
 *
 * The i-th obstacle is at grid point (obstacles[i][0], obstacles[i][1])
 *
 * If the robot would try to move onto them,
 * the robot stays on the previous grid square instead
 * (but still continues following the rest of the route.)
 *
 * Return the square of the maximum Euclidean distance that the robot will be from the origin.
 *
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
const robotSim = (commands, obstacles) => {
    const set = {};
    obstacles.forEach(item => set[`${item[0]}#${item[1]}`] = true);

    let pos = [0, 0];
    // 0 - north, 1 - west, 2 - south, 3 - east
    let direction = 0;

    const getNext = () => {
        switch (direction) {
            case 0:
                return [pos[0], pos[1] + 1];

            case 1:
                return [pos[0] - 1, pos[1]];

            case 2:
                return [pos[0], pos[1] - 1];

            case 3:
                return [pos[0] + 1, pos[1]];
        }
    };

    let res = 0;
    commands.forEach(command => {
        if (command === -2) {
            direction += 1;
            direction %= 4;
        } else if (command === -1) {
            direction += 3;
            direction %= 4;
        } else {
            while (command-- > 0) {
                const next = getNext();
                if (!set[`${next[0]}#${next[1]}`]) {
                    pos = next;
                    res = Math.max(res, pos[0]*pos[0] + pos[1]*pos[1]);
                }
            }
        }
    });

    return res;
};
