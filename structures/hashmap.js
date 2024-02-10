/**
 * HashMap with Array implementation
 * @class
 * **/
class HashMap {
    /**
     * Create buckets and collisions
     * @constructor
     */
    constructor() {
        this.buckets = [];
        this.collisions = 0;
    }

    /**
     * Set value in hashmap - O(1)
     * @param {string} key - key of value
     * @param {number} value - value
     */
    set(key, value) {
        const bucketIndex = this.getIndex(key);
        if(this.buckets[bucketIndex]) {
            this.buckets[bucketIndex].push({key, value});
            if(this.buckets[bucketIndex].length > 1) { this.collisions++; }
        } else {
            this.buckets[bucketIndex] = [{key, value}];
        }
    }

    /**
     * Get value from hashmap by key - O(1)
     * @param {string} key - key of value
     * @return {number | undefined} - value or undefined
     */
    get(key) {
        const bucketIndex = this.getIndex(key);
        for (let arrayIndex = 0; arrayIndex < this.buckets[bucketIndex].length; arrayIndex++) {
            const entry = this.buckets[bucketIndex][arrayIndex];
            if(entry.key === key) {
                return entry.value
            }
        }
    }

    /**
     * Calculate hash - O(1)
     * @param {string} key - key of value
     * @return {number} - hash key
     */
    hash(key) {
        let hashValue = 0;
        const stringTypeKey = `${key}${typeof key}`;

        for (let index = 0; index < stringTypeKey.length; index++) {
            const charCode = stringTypeKey.charCodeAt(index);
            hashValue += charCode << (index * 8);
        }

        return hashValue;
    }

    /**
     * Calculate index in buckets - O(1)
     * @param {string} key - key of value
     * @return {number} - index in buckets
     */
    getIndex(key) {
        const indexHash = this.hash(key);
        return indexHash % this.buckets.length;
    }
}

module.exports =  {HashMap};
