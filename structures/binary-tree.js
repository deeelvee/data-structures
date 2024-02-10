/**
 * Binary Tree with node = {val: number | null, left: BinaryTreeNode | null, right: BinaryTreeNode | null}
 * @class
 * **/
class BinaryTree {
    /**
     * Create binary tree structure
     * @param {number[]} values - array of values
     * @constructor
     */
    constructor(values) {
        function buildNode(index) {
            if(index >= values.length) return null;
            const node = new BinaryTreeNode(values[index]);
            node.left = buildNode((index + 1) * 2 - 1);
            node.right = buildNode((index + 1) * 2);
            return node;
        }
        this.root = buildNode(0);
    }

    /**
     * Traverse tree in direction root-left-right - O(n)
     * @param {BinaryTreeNode} node - node of BinaryTree
     * @param {number[]} arr - result array of nodes
     */
    preOrder(node, arr) {
        if(!node) return;

        arr.push(node.val);
        this.preOrder(node.left, arr);
        this.preOrder(node.right, arr)
    }

    /**
     * Traverse trie in direction left-root-right - O(n)
     * @param {BinaryTreeNode} node - node of BinaryTree
     * @param {number[]} arr - result array of nodes
     */
    inOrder(node, arr) {
        if(!node) return;

        this.inOrder(node.left, arr);
        arr.push(node.val);
        this.inOrder(node.right, arr)
    }

    /**
     * Traverse trie in direction left-right-root - O(n)
     * @param {BinaryTreeNode} node - node of BinaryTree
     * @param {number[]} arr - result array of nodes
     */
    postOrder(node, arr) {
        if(!node) return;

        this.postOrder(node.left, arr);
        this.postOrder(node.right, arr)
        arr.push(node.val);
    }
}

/**
 * Base node of BinaryTree
 * @class
 * **/
class BinaryTreeNode {
    /**
     * Create node with value
     * @param {number} value - node value
     * @constructor
     */
    constructor(value) {
        this.val = value;
        this.left = null;
        this.right = null;
    }
}

module.exports = {BinaryTree, BinaryTreeNode};
