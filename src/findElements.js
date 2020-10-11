/**
 * Given a binary tree with the following rules:
 *
 * root.val == 0
 * If treeNode.val == x and treeNode.left != null, then treeNode.left.val == 2 * x + 1
 * If treeNode.val == x and treeNode.right != null, then treeNode.right.val == 2 * x + 2
 *
 * Now the binary tree is contaminated, which means all treeNode.val have been changed to -1.
 * You need to first recover the binary tree and then implement the FindElements class:
 *
 * FindElements(TreeNode* root) Initializes the object with a contamined binary tree, you need to recover it first.
 * bool find(int target) Return if the target value exists in the recovered binary tree.
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 */
var FindElements = function(root) {
    const replace = (node, val) => {
        node.val = val;
        node.left && replace(node.left, 2 * val + 1);
        node.right && replace(node.right, 2 * val + 2);
    }

    this.root = root;
    if (root && root.val === -1) {
        replace(root, 0);
    }
};

/**
 * @param {number} target
 * @return {boolean}
 */
FindElements.prototype.find = function(target) {
    if (target === 0 && this.root) {
        return true;
    }

    let val = target;
    const stack = [];
    while (val !== 0) {
        if (val % 2 === 0) {
            stack.push('right');
            val = (val - 2)/2;
        } else {
            stack.push('left');
            val = (val - 1)/2;
        }
    }
    let curr = this.root;
    while(stack.length && curr) {
        curr = curr[stack.pop()];
    }

    return !!curr && !stack.length;
};

/**
 * Your FindElements object will be instantiated and called as such:
 * var obj = new FindElements(root)
 * var param_1 = obj.find(target)
 */
