/**
 * Base Stack with Array implementation
 * @class
 * **/
class Stack {
    /**
     * Create body of stack
     * @constructor
     */
    constructor() {
        this.body = [];
    }

    /**
     * Add item in stack - O(1)
     * @param {number} value - insert value
     */
    add(value) {
        this.body.push(value);
    }
    /**
     * Remove item from stack - O(1)
     * @return {number | undefined} - last value or undefined
     */
    remove() {
        return this.body.pop();
    }
}

module.exports = {Stack};
