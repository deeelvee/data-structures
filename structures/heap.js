/**
 * Max Heap - binary tree structure with condition:
 * root is always greater than any of children
 * @class
 * **/
class MaxHeap {
    /**
     * Create heap structure
     * @param {number[]} values - array of values
     * @constructor
     */
    constructor(values = []) {
        this.heap = [];
        for(const val of values) {
            this.insert(val);
        }
    }

    /**
     * Insert val in heap - O(log(n))
     * @param {number} val - inserted val
     */
    insert(val) {
        this.heap.push(val);
        this.#heapifyUp(this.heap.length - 1);
    }

    /**
     * Remove val from the heap with this index - O(log(n))
     * @param {number} index - index of removing element
     * @return {number | undefined} - value if index in [0, heap.length], undefined otherwise
     */
    remove(index) {
        if(index > this.heap.length || index < 0) {
            return;
        }

        if(index === this.heap.length - 1) {
            return this.heap.pop();
        }

        const temp = this.heap[index];
        this.heap[index] = this.heap[this.heap.length - 1];
        this.heap[this.heap.length - 1] = temp;

        const result = this.heap.pop();
        this.#heapifyDown(index);

        return result;
    }

    /**
     * Get max val of heap - O(1)
     * @return {number | null} - value if heap.length !== 0, null otherwise
     */
    getMax() {
        if(this.heap.length !== 0) {
            return this.heap[0];
        }

        return null;
    }

    /**
     * Restore the structure of the heap from index to up - O(log(n))
     * @param {number} index - index of picked element
     */
    #heapifyUp(index) {
        if(index <= 0) {
            return;
        }

        let parentIndex = Math.floor((index - 1) / 2);
        if(this.heap[index] > this.heap[parentIndex]) {
            const temp = this.heap[parentIndex];
            this.heap[parentIndex] = this.heap[index];
            this.heap[index] = temp;
            this.#heapifyUp(parentIndex);
        }
    }

    /**
     * Restore the structure of the heap from index to down - O(log(n))
     * @param {number} index - index of picked element
     */
    #heapifyDown(index) {
        let leftChildIndex = (index * 2) + 1;
        let rightChildIndex = (index * 2) + 2;
        let largestIndex = index;

        if(this.heap[leftChildIndex] > this.heap[largestIndex]) {
            largestIndex = leftChildIndex;
        }
        if(this.heap[rightChildIndex] > this.heap[largestIndex]) {
            largestIndex = rightChildIndex;
        }

        if(largestIndex !== index) {
            const temp = this.heap[index];
            this.heap[index] = this.heap[largestIndex];
            this.heap[largestIndex] = temp;
            this.#heapifyDown(largestIndex);
        }
    }
}

/**
 * Min Heap - binary tree structure with condition:
 * root is always smaller than any of children
 * @class
 * **/
class MinHeap {
    /**
     * Create heap structure
     * @param {number[]} values - array of values
     * @constructor
     */
    constructor(values = []) {
        this.heap = [];
        for(const val of values) {
            this.insert(val);
        }
    }

    /**
     * Insert val in heap - O(log(n))
     * @param {number} val - inserted val
     */
    insert(val) {
        this.heap.push(val);
        this.#heapifyUp(this.heap.length - 1);
    }

    /**
     * Remove val from the heap with this index - O(log(n))
     * @param {number} index - index of removing element
     * @return {number | undefined} - value if index in [0, heap.length], undefined otherwise
     */
    remove(index) {
        if(index > this.heap.length || index < 0) {
            return;
        }

        if(index === this.heap.length - 1) {
            return this.heap.pop();
        }

        const temp = this.heap[index];
        this.heap[index] = this.heap[this.heap.length - 1];
        this.heap[this.heap.length - 1] = temp;

        const result = this.heap.pop();
        this.#heapifyDown(index);

        return result;
    }

    /**
     * Get min val of heap - O(1)
     * @return {number | null} - value if heap.length !== 0, null otherwise
     */
    getMin() {
        if(this.heap.length !== 0) {
            return this.heap[0];
        }

        return null;
    }

    /**
     * Restore the structure of the heap from index to up - O(log(n))
     * @param {number} index - index of picked element
     */
    #heapifyUp(index) {
        if(index <= 0) {
            return;
        }

        let parentIndex = Math.floor((index - 1) / 2);
        if(this.heap[index] < this.heap[parentIndex]) {
            const temp = this.heap[parentIndex];
            this.heap[parentIndex] = this.heap[index];
            this.heap[index] = temp;
            this.#heapifyUp(parentIndex);
        }
    }

    /**
     * Restore the structure of the heap from index to down - O(log(n))
     * @param {number} index - index of picked element
     */
    #heapifyDown(index) {
        let leftChildIndex = (index * 2) + 1;
        let rightChildIndex = (index * 2) + 2;
        let minIndex = index;

        if(this.heap[leftChildIndex] < this.heap[minIndex]) {
            minIndex = leftChildIndex;
        }
        if(this.heap[rightChildIndex] < this.heap[minIndex]) {
            minIndex = rightChildIndex;
        }

        if(minIndex !== index) {
            const temp = this.heap[index];
            this.heap[index] = this.heap[minIndex];
            this.heap[minIndex] = temp;
            this.#heapifyDown(minIndex);
        }
    }
}

module.exports = {MaxHeap, MinHeap}