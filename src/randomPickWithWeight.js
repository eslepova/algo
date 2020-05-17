/**
 * Given an array w of positive integers,
 * where w[i] describes the weight of index i,
 * write a function pickIndex which randomly picks an index in proportion to its weight.
 */

/**
 * @param {number[]} w
 */
const Solution = function(w) {
    const sum = w.reduce((acc, item) => acc += item, 0);

    let start = 0;
    this.ranges = w.map(item => {
        const end = start + item/sum;
        start = end;
        return end;
    });
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function() {
    // pick random
    const random = Math.random();

    // binary search in ranges
    const bs = (l, r) => {
        const md = Math.floor(l + (r - l) / 2);

        if ((!md || random >= this.ranges[md - 1]) && random < this.ranges[md]) {
            return md;
        }

        if (random < this.ranges[md]) {
            return bs(l, md - 1);
        } else {
            return bs(md + 1, r);
        }
    };

    return bs(0, this.ranges.length - 1);
};

/**
 * Your Solution object will be instantiated and called as such:
 * const obj = new Solution(w)
 * const param_1 = obj.pickIndex()
 */
