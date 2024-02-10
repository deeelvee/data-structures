const {BinaryTree} = require("../main")

describe('BinaryTree tests', () => {
    test('create binaryTree test', () => {
        const children = [3,9,20,null,null,15,7];
        const preorderChildren = [3,9,null,null,20, 15,7];
        const trie = new BinaryTree(children);

        expect(arrayTraverse(trie.root)).toEqual(preorderChildren);
    })
    test('preOrder traverse test', () => {
        const children = [3,9,20,null,null,15,7];
        const preorderChildren = [3,9,null,null,20, 15,7];
        const trie = new BinaryTree(children);
        const arr = [];
        trie.preOrder(trie.root, arr);
        expect(arr).toEqual(preorderChildren);
    })
    test('inOrder traverse test', () => {
        const children = [3,9,20,null,null,15,7];
        const inOrderChildren = [null, 9 ,null, 3, 15, 20, 7];
        const trie = new BinaryTree(children);

        const arr = [];
        trie.inOrder(trie.root, arr);
        expect(arr).toEqual(inOrderChildren);
    })
    test('postOrder traverse test', () => {
        const children = [3,9,20,null,null,15,7];
        const postOrderChildren = [null,null, 9, 15, 7, 20, 3];
        const trie = new BinaryTree(children);

        const arr = [];
        trie.postOrder(trie.root, arr);
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

