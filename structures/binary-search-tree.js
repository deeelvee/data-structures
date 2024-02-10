const {BinaryTreeNode} = require('./binary-tree')

/**
 * BinarySearchTree (BST) - binary tree that
 * only allows you to store nodes with lesser value on the left side and nodes with greater value on the right
 * NOTE - it is unbalanced
 * @class
 * **/
class BinarySearchTree {
    /**
     * Create BST structure
     * @param {number[]} values - array of values
     * @constructor
     */
    constructor(values = []) {
        this.root = null;
        for(const val of values) {
            this.insert(val)
        }
    }

    /**
     * Insert node in BST ~ O(logN)
     * @param {number} val - insert val
     */
    insert(val) {
        if(this.root === null) {
            this.root = new BinaryTreeNode(val);
        } else {
            this.insertNode(this.root, val)
        }
    }

    /**
     * Search node in BST ~ O(logN)
     * @param {number} val - search val
     */
    search(val) {
        if(this.root.val === val) {
            return this.root;
        }

        return this.searchNode(this.root, val);
    }

    /**
     * Remove node from BST ~ O(logN)
     * @param {number} val - remove val
     */
    remove(val) {
        this.root = this.removeNode(this.root, val);
    }

    /**
     * Traverse BST in direction root-left-right - O(n)
     * @param {BinaryTreeNode} node - node of BST
     * @param {function} callback - function that get node.val
     */
    preOrder(node, callback) {
        if(!node) return;

        callback(node.val);
        this.preOrder(node.left, callback);
        this.preOrder(node.right, callback)
    }

    /**
     * Traverse BST in direction left-root-right - O(n)
     * @param {BinaryTreeNode} node - node of BST
     * @param {function} callback - function that get node.val
     */
    inOrder(node, callback) {
        if(!node) return;

        this.inOrder(node.left, callback);
        callback(node.val);
        this.inOrder(node.right, callback)
    }

    /**
     * Traverse BST in direction left-right-root - O(n)
     * @param {BinaryTreeNode} node - node of BST
     * @param {function} callback - function that get node.val
     */
    postOrder(node, callback) {
        if(!node) return;

        this.postOrder(node.left, callback);
        this.postOrder(node.right, callback)
        callback(node.val);
    }

    /**
     * Insert node in BST helper ~ O(logN)
     * @param {BinaryTreeNode} node - node of BST
     * @param {number} val - insert val
     * @private
     */
    insertNode(node, val) {
        if(val < node.val) {
            if(node.left === null) {
                node.left = new BinaryTreeNode(val);
            } else {
                this.insertNode(node.left, val)
            }
        } else {
            if(node.right === null) {
                node.right = new BinaryTreeNode(val);
            } else {
                this.insertNode(node.right, val);
            }
        }
    }

    /**
     * Search node in BST ~ O(logN)
     * @param {BinaryTreeNode} node - node of BST
     * @param {number} val - search val
     * @return {BinaryTreeNode} - found node
     * @private
     */
    searchNode(node, val) {
        if(node === null) {
            return null;
        }
        if(val < node.val) {
            return this.searchNode(node.left, val);
        }
        if(val > node.val) {
            return this.searchNode(node.right, val);
        }

        return node;
    }

    /**
     * Remove node from BST ~ O(logN)
     * @param {BinaryTreeNode} node - node of BST
     * @param {number} val - remove val
     * @private
     */
    removeNode(node, val) {
        if(node === null) {
            return null;
        }
        // if data to be deleted is less than the root's data, move to the left subtree
        if(val < node.val) {
            node.left = this.removeNode(node.left, val);
            return node;
        }
        // if data to be deleted is greater than the root's data, move to the right subtree
        if(val > node.val) {
            node.right = this.removeNode(node.right, val);
            return node;
        }
        // if data is similar to the root's data, delete the node

        // delete node with no children (leaf node)
        if(node.left === null && node.right === null) {
            node = null;
            return node;
        }
        // delete node with one child
        if(node.left === null) {
            node = node.right;
            return node;
        }
        if(node.right === null) {
            node = node.left;
            return node;
        }

        let newNode = this.minNode(node.right);
        node.val = newNode.val;
        node.right = this.removeNode(node.right, newNode.val);
        return node;
    }

    /**
     * Find min node in BST ~ O(logN)
     * @param {BinaryTreeNode} node - node of BinaryTree
     * @return {BinaryTreeNode} - found node
     * @private
     */
    minNode(node) {
        if(node.left) {
            return this.minNode(node.left);
        }

        return node;
    }

}

module.exports = {BinarySearchTree};
