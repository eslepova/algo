/**
 * Given a binary tree, return the postorder traversal of its nodes' values.
 * Input: [1,null,2,3]
 * 1
 *  \
 *   2
 *  /
 * 3
 * Output: [3,2,1]
 *
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 *
 * @param {TreeNode} root
 * @return {number[]}
 */
const postorderTraversal = (root) => {
    if (!root) {
        return [];
    }

    const result = [];
    const stack = [];
    let node = root;
    while(true) {
        if (node.left) {
            stack.push(node);
            node = node.left;
        } else if (node.right) {
            stack.push(node);
            node = node.right;
        } else {
            result.push(node.val);
            let prev_node = stack.pop();

            while (prev_node && (node === prev_node.right
                || node === prev_node.left && !prev_node.right)) {
                result.push(prev_node.val);
                node = prev_node;
                prev_node = stack.pop();
            }

            if (!prev_node) {
                break;
            }

            if (node === prev_node.left) {
                stack.push(prev_node);
                node = prev_node.right;
            }
        }
    }

    return result;
};
