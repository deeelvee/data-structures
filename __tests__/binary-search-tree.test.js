const {BinarySearchTree} = require("../main")

describe('BinaryTree tests', () => {
    test('create BST test', () => {
        const children = [4,2,7,1,3];
        const preorderChildren = [4, 2, 1, 3, 7];
        const trie = new BinarySearchTree(children);

        expect(arrayTraverse(trie.root)).toEqual(preorderChildren);
    })
    test('insert BST test', () => {
        const trie = new BinarySearchTree();
        trie.insert(2);
        trie.insert(3);
        trie.insert(1);

        expect(arrayTraverse(trie.root)).toEqual([2,1,3]);
    })
    test('search BST test', () => {
        const trie = new BinarySearchTree([4,2,7,1,3]);
        expect(trie.search(1).val).toBe(1);
        expect(trie.search(10)).toBe(null);
    })
    test('remove BST test', () => {
        const trie = new BinarySearchTree([4,2,7,1,3]);
        trie.remove(1);
        expect(arrayTraverse(trie.root)).toEqual([4, 2, 3, 7]);
    })
    test('preOrder traverse test', () => {
        const children = [4,2,7,1,3];
        const preorderChildren = [4, 2, 1, 3, 7];
        const trie = new BinarySearchTree(children);
        const arr = [];
        trie.preOrder(trie.root, (val) => arr.push(val));
        expect(arr).toEqual(preorderChildren);
    })
    test('inOrder traverse test', () => {
        const children = [4,2,7,1,3];
        const inOrderChildren = [1, 2, 3, 4, 7];
        const trie = new BinarySearchTree(children);

        const arr = [];
        trie.inOrder(trie.root, (val) => arr.push(val));
        expect(arr).toEqual(inOrderChildren);
    })
    test('postOrder traverse test', () => {
        const children = [4,2,7,1,3];
        const postOrderChildren = [1, 3, 2, 7, 4];
        const trie = new BinarySearchTree(children);

        const arr = [];
        trie.postOrder(trie.root, (val) => arr.push(val));
        expect(arr).toEqual(postOrderChildren);
    })
});

function arrayTraverse(root) {

    let ans = [];

    if (root === null) return ans;

    // push root into stack
    let stack = [root];

    // loop while stack is not empty
    while (stack.length) {

        let cur = stack.pop();

        // push the node data to ans
        ans.push(cur.val);

        // push right node into stack
        if (cur.right) {
            stack.push(cur.right);
        }

        // push left node into stack
        // as it pushed last so will be pop first
        // i.e this ensures data left right ordering
        if (cur.left) {
            stack.push(cur.left);
        }

    }

    return ans;
}

