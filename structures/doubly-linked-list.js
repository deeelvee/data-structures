/**
 * DoublyLinkedList - list based on 2 pointers - prev and next
 * @class
 */
class DoublyLinkedList {
    /**
     * Create a fist pointer, last pointer and size
     * @constructor
     */
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    /**
     * Add first element to linkedList - O(1);
     * @param {number} value - adding value
     */
    addFirst(value) {
        let node = new DoublyLinkedListNode(value);

        if(this.first) {
            this.first.prev = node;
            node.next = this.first;
            this.first = node;
        } else {
            this.first = node;
            this.last = node;
        }

        this.size++;
    }

    /**
     * Remove first element from linkedList - O(1);
     * @return {number | undefined} - removed value or undefined
     */
    removeFirst() {
        const first = this.first;

        if(first) {
            this.first = this.first.next;
            if(this.first) {
                this.first.prev = null;
            }

            this.size--;
            return first.value;
        }
    }

    /**
     * Add last element to linkedList - O(1);
     * @param {number} value - adding value
     */
    addLast(value) {
        let node = new DoublyLinkedListNode(value);
        if(this.last) {
            this.last.next = node;
            node.prev = this.last;
            this.last = node;
        } else {
            this.first = node;
            this.last = node;
        }

        this.size++;
    }

    /**
     * Remove last element from linkedList - O(1);
     * @return {number | undefined} - removed value or undefined
     */
    removeLast() {
        let current = this.first;
        let target;

        if(current && current.next) {
            current = this.last.prev;
            this.last = current;
            target = current.next;
            current.next = null;
        } else {
            this.first = null;
            this.last = null;
            target = current;
        }

        if(target) {
            this.size--;
            return target.value;
        }
    }


    /**
     * Add element to linkedList - O(n);
     * @param {number} value - adding value
     * @param {number | undefined} index - index of new node
     */
    add(value, index= 0) {
        if(index === 0) {
            return this.addFirst(value)
        }

        for(let current = this.first, i=0; i <= this.size; i++, current = (current && current.next)) {
            if(i === index) {
                if(i === this.size) {
                    return this.addLast(value);
                }

                const node = new DoublyLinkedListNode(value);
                node.prev = current.prev;
                node.next = current;

                current.prev.next = node;
                if(current.next) {
                    current.next.prev = node;
                }
                this.size++;
            }
        }
    }

    /**
     * Remove element from linkedList - O(n);
     * @param {number | undefined} index - index of removed item
     * @return {number | undefined} - removed value or undefined
     */
    remove(index = 0) {
        if(index === 0) {
            return this.removeFirst()
        }

        for(let current = this.first, i=0; current, i < this.size; i++, current = current.next) {
            if(i === index) {
                if(i === this.size - 1) {
                    return this.removeLast();
                }

                const prev = current.prev;
                const next = current.next;

                prev.next = next;
                next.prev = prev;
                this.size--;

                return current.value;
            }
        }
    }

    /**
     * Search element in linkedList - O(n);
     * @param {number} value - value for search
     * @return {number | undefined} - index of found value or undefined
     */
    search(value) {
        for(let current = this.first, index=0; current; index++, current = current.next) {
            if(current.value === value)  {
                return index;
            }
        }
    }
}


/**
 * Base node of DoublyLinkedList
 * @class
 * **/
class DoublyLinkedListNode {
    /**
     * Create value, prev, next of a node
     * @param {number} value - The value of node
     * @constructor
     */
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

module.exports = {DoublyLinkedList, DoublyLinkedListNode };

