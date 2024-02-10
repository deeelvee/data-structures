const {PrefixTree} = require("../main")

describe('PrefixTrie tests', () => {
    test('insert word', () => {
        const trie = new PrefixTree();
        expect(trie.root.children).toEqual({});
        expect(trie.root.end).toBeFalsy();
        trie.insert('abc');
        expect(findWords(trie.root, '', [])).toEqual(['abc']);
    })
    test('search word', () => {
        const trie = new PrefixTree();
        expect(trie.root.children).toEqual({});
        expect(trie.root.end).toBeFalsy();
        trie.insert('abc');
        trie.insert('abd');
        expect(findWords(trie.root, '', [])).toEqual(['abc', 'abd']);
        expect(trie.search('abc')).toBeTruthy();
    })
    test('startsWith', () => {
        const trie = new PrefixTree();
        expect(trie.root.children).toEqual({});
        expect(trie.root.end).toBeFalsy();
        trie.insert('abc');
        expect(findWords(trie.root, '', [])).toEqual(['abc']);
        expect(trie.startsWith('a')).toBeTruthy();
    })
});

function findWords(root, prefix, array) {
    let current = root;
    if(root.end) {
        array.push(prefix);
    }
    if(!Object.keys(root.children).length) {
        return;
    }

    for(const key of Object.keys(current.children)) {
        findWords(current.children[key], prefix + key, array);
    }

    return array;
}

