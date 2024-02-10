const {DoublyLinkedList} = require('./doubly-linked-list');

/**
 * Queue with One Array implementation
 * @class
 * **/
class NaiveArrayQueue {
    /**
     * Create body of queue
     * @constructor
     */
    constructor() {
        this.body = [];
    }

    /**
     * Add last value in queue - O(1)
     * @param {number} value - insert value
     */
    add(value) {
        this.body.push(value);
    }

    /**
     * Remove first element from queue - O(n)
     * @return {number | undefined} - removed value or undefined
     */
    remove() {
        return this.body.shift();
    }
}
/**
 * Queue with two Array implementation
 * @class
 * **/
class ArrayQueue {
    /**
     * Create input and output of queue
     * @constructor
     */
    constructor() {
        this.input = [];
        this.output = [];
    }

    /**
     * Add last element in queue - O(1)
     * @param {number} value - insert value
     */
    add(value) {
        this.input.push(value);
    }

    /**
     * Remove first element from queue - average - O(1), worst - O(n)
     * @return {number | undefined} - removed value or undefined
     */
    remove() {
        if(!this.output.length) {
            while(this.input.length) {
                this.output.push(this.input.pop());
            }
        }
        return this.output.pop();
    }
}
/**
 * Queue with Doubly linked list implementation
 * @class
 * **/
class LinkedListQueue {
    /**
     * Create body of queue
     * @constructor
     */
    constructor() {
        this.body = new DoublyLinkedList();
    }

    /**
     * Add last element in queue - O(1)
     * @param {number} value - insert value
     */
    add(value) {
       this.body.addFirst(value);
    }

    /**
     * Remove first element from queue - O(1)
     * @return {number | undefined} - removed value or undefined
     */
    remove() {
        return this.body.removeLast();
    }

    /**
     * Get size of queue = O(1)
     * @return {number} - size of queue
     */
    get size() {
        return this.body.size;
    }
}

module.exports = {NaiveArrayQueue, ArrayQueue, LinkedListQueue};
