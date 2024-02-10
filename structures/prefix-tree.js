/**
 * PrefixTree
 * @class
 * **/
class PrefixTree {
    /**
     * Create base PrefixTree structure
     * @constructor
     */
    constructor() {
        this.root = new PrefixTreeNode();
    }

    /**
     * Insert word in tree - O(n)
     * @param {string} word - word
     */
    insert(word) {
        let current = this.root;
        for(let i=0; i<word.length; i++) {
            if(!current.children[word[i]]) {
                current.children[word[i]] = new PrefixTreeNode();
            }
            current = current.children[word[i]];
        }
        current.end = true;
    }

    /**
     * Search word in tree - O(n)
     * @param {string} word - word
     * @return {boolean} - does this word exist in the tree
     */
    search(word) {
        let current = this.root;
        for(let i=0; i<word.length; i++) {
            if(!current.children[word[i]]) {
                return false;
            }
            current = current.children[word[i]];
        }

        return current.end;
    }

    /**
     * Search word in tree - O(n)
     * @param {string} prefix - searchable prefix
     * @return {boolean} - do words start with this prefix exist in the tree
     */
    startsWith(prefix) {
        let current = this.root;
        for(let i=0; i<prefix.length; i++) {
            if(!current.children[prefix[i]]) {
                return false;
            }
            current = current.children[prefix[i]];
        }

        return true;
    }
}

/**
 * Base node of PrefixTree
 * @class
 * **/
class PrefixTreeNode {
    constructor() {
        this.children = {};
        this.end = false;
    }
}

module.exports = {PrefixTree, PrefixTreeNode};
