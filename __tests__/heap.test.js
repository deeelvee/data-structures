const {MaxHeap, MinHeap} = require("../main")

describe('MaxHeap tests', () => {
    test('insert test', () => {
        const maxHeap = new MaxHeap()
        maxHeap.insert(1);
        maxHeap.insert(2);
        maxHeap.insert(3);
        maxHeap.insert(4);
        expect(maxHeap.heap).toEqual([4, 3, 2, 1]);
    })
    test('getMax test', () => {
        const maxHeap = new MaxHeap([1, 2, 3, 4])
        expect(maxHeap.heap).toEqual([4, 3, 2, 1]);
        expect(maxHeap.getMax()).toBe(4);
    })
    test('remove item with index <= 0 test', () => {
        const maxHeap = new MaxHeap([1, 2, 3, 4])
        expect(maxHeap.remove(-1)).toEqual(undefined);
        expect(maxHeap.heap).toEqual([4, 3, 2, 1]);
    })
    test('remove item with index > heap.length test', () => {
        const maxHeap = new MaxHeap([1, 2, 3, 4])
        expect(maxHeap.remove(5)).toEqual(undefined);
        expect(maxHeap.heap).toEqual([4, 3, 2, 1]);
    })
    test('remove root item test', () => {
        const maxHeap = new MaxHeap([1, 2, 3, 4])
        expect(maxHeap.heap).toEqual([4, 3, 2, 1]);
        expect(maxHeap.remove(0)).toBe(4);
        expect(maxHeap.heap).toEqual([3, 1, 2]);
    })
    test('remove some item test', () => {
        const maxHeap = new MaxHeap([1, 2, 3, 4])
        expect(maxHeap.heap).toEqual([4, 3, 2, 1]);
        expect(maxHeap.remove(2)).toBe(2);
        expect(maxHeap.heap).toEqual([4, 3, 1 ]);
    })
});

describe('MinHeap tests', () => {
    test('insert test', () => {
        const minHeap = new MinHeap()
        minHeap.insert(1);
        minHeap.insert(2);
        minHeap.insert(3);
        minHeap.insert(4);
        expect(minHeap.heap).toEqual([1, 2, 3, 4]);
    })
    test('getMin test', () => {
        const minHeap = new MinHeap([1, 2, 3, 4])
        expect(minHeap.heap).toEqual([1, 2, 3, 4]);
        expect(minHeap.getMin()).toBe(1);
    })
    test('remove item with index <= 0 test', () => {
        const minHeap = new MinHeap([1, 2, 3, 4])
        expect(minHeap.remove(-1)).toEqual(undefined);
        expect(minHeap.heap).toEqual([1, 2, 3, 4]);
    })
    test('remove item with index > heap.length test', () => {
        const minHeap = new MinHeap([1, 2, 3, 4])
        expect(minHeap.remove(5)).toEqual(undefined);
        expect(minHeap.heap).toEqual([1, 2, 3, 4]);
    })
    test('remove root item test', () => {
        const minHeap = new MinHeap([1, 2, 3, 4])
        expect(minHeap.heap).toEqual([1, 2, 3, 4]);
        expect(minHeap.remove(0)).toBe(1);
        expect(minHeap.heap).toEqual([2, 4, 3]);
    })
    test('remove some item test', () => {
        const minHeap = new MinHeap([1, 2, 3, 4])
        expect(minHeap.heap).toEqual([1, 2, 3, 4]);
        expect(minHeap.remove(2)).toBe(3);
        expect(minHeap.heap).toEqual([1, 2, 4]);
    })
});

