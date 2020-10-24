/**
 * Given a non-empty array of unique positive integers A, consider the following graph:
 *      There are A.length nodes, labelled A[0] to A[A.length - 1];
 *      There is an edge between A[i] and A[j] if and only if A[i] and A[j] share a common factor greater than 1.
 * Return the size of the largest connected component in the graph.
 *
 * Input: [20,50,9,63]
 * Output: 2
 *
 * @param {number[]} A
 * @return {number}
 */
const largestComponentSize = (A) => {
    if (!A.length) {
        return 0;
    }

    const graph = {};
    const sz = {};
    for (let i = 0; i < A.length; ++i) {
        graph[i] = i;
        sz[i] = 1;
    }

    const root = (a) => {
        while(a !== graph[a]) {
            graph[a] = graph[graph[a]];
            a = graph[a];
        }
        return a;
    };

    let result = 1;
    const union = (a, b) => {
        const a_root = root(a);
        const b_root = root(b);
        if (a_root !== b_root) {
            graph[a_root] = b_root;
            sz[b_root] += sz[a_root];
            result = Math.max(result, sz[b_root]);
        }
    };

    const hash = {};
    for (let i = 0; i < A.length; ++i) {
        const a = A[i];
        for (let j = 2; j*j <= a; ++j) {
            if (a%j === 0) {
                hash[j] !== undefined ? union(i, hash[j]) : (hash[j] = i);
                hash[a/j] !== undefined ? union(i, hash[a/j]) : (hash[a/j] = i);
            }
        }
        hash[a] !== undefined ? union(i, hash[a]) : (hash[a] = i);
    }

    return result;
}
