/**
 * Given a binary tree, find its maximum depth.
 * The maximum depth is the number of nodes
 * along the longest path from the root node down to the farthest leaf node.
 * A leaf is a node with no children.
 *
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 *
 *
 * @param {TreeNode} root
 * @return {number}
 */
const maxDepth = (root, count = 1) => {
    if (!root) {
        return 0;
    }

    let leftMax = count;
    let rightMax = count;
    if (root.left) {
        leftMax = maxDepth(root.left, count + 1);
    }
    if (root.right) {
        rightMax = maxDepth(root.right, count + 1);
    }


    return Math.max(leftMax, rightMax);
};
