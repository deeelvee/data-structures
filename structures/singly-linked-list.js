/**
 * LinkedList based on node {val: number | null, next: SinglyLinkedListNode | null}
 * @class
 * **/
class SinglyLinkedList {
    /**
     * Create a root pointer and size
     * @constructor
     */
    constructor() {
        this.root = null;
        this.size = 0;
    }

    /**
     * Add last element to linkedList - O(n);
     * @param {number} value - adding value
     */
    addLast(value) {
        const node = new SinglyLinkedListNode(value);
        if(this.root) {
            let currentNode = this.root;
            while(currentNode && currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = node;
        } else {
            this.root = node;
        }
        this.size++;
    }
    /**
     * Remove last element from linkedList - O(n);
     * @return {number | undefined} value - removed value or undefined
     */
    removeLast() {
        let currentNode = this.root;
        let target;

        if(currentNode && currentNode.next) {
            while(currentNode && currentNode.next && currentNode.next.next) {
                currentNode = currentNode.next;
            }
            target = currentNode.next;
            currentNode.next = null;
        } else {
            this.root = null;
            target = currentNode;
        }

        if(target) {
            this.size--;
            return target.value;
        }
    }
    /**
     * Add first element to linkedList - O(1);
     * @param {number} value - adding value
     */
    addFirst(value) {
        let node = new SinglyLinkedListNode(value);
        if(this.root) {
            node.next = this.root;
        }
        this.root = node;
        this.size++;
    }

    /**
     * Remove first element from linkedList - O(1);
     * @return {number | undefined} - removed value or undefined
     */
    removeFirst() {
        let target = this.root;
        if(this.root.next) {
            this.root = this.root.next;
        }

        if(target) {
            this.size--;
            return target.value;
        }
    }

    /**
     * Remove element from linkedList - O(n);
     * @param {number| undefined} index - index of removed element
     * @return {number | undefined} - removed value or undefined
     */
    remove(index = 0) {
        if(index === 0) {
            return this.removeFirst();
        }

        for(let current = this.root, i=0; current, i < this.size; i++, current = current.next) {
            if(i === index - 1) {
               let target = current.next;
               if(!target) {
                   return this.removeLast();
               }
               current.next = target.next;
               current = current.next;

               this.size--;
               return target.value;
            }
        }
    }

    /**
     * Search element in linkedList - O(n);
     * @param {number} value - value for search
     * @return {number | undefined} - index of found element or undefined
     */
    search(value) {
        for(let current = this.root, index=0; current; index++, current = current.next) {
            if(current.value === value)  {
                return index;
            }
        }
    }
}


/**
 * Base node of SinglyLinkedListNode
 * @class
 * **/
class SinglyLinkedListNode {
    /**
     * Create base structure of node
     * @param {number} value = value of node
     * @constructor
     */
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

module.exports = {SinglyLinkedList, SinglyLinkedListNode};