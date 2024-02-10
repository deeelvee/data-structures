const {NaiveArrayQueue, ArrayQueue, LinkedListQueue} = require("../main")

describe('NaiveArrayQueue tests', () => {
    test('add value', () => {
        const queue = new NaiveArrayQueue();
        expect(queue.body.length).toBe(0);
        queue.add(1);
        expect(queue.body.length).toBe(1);
        expect(queue.body).toEqual([1]);
    })
    test('remove value when queue is not empty', () => {
        const queue = new NaiveArrayQueue();
        queue.add(1);
        expect(queue.body.length).toBe(1);
        expect(queue.remove()).toBe(1)
        expect(queue.body.length).toBe(0);
    })
    test('remove value when queue is empty', () => {
        const queue = new NaiveArrayQueue();
        expect(queue.body.length).toBe(0);
        expect(queue.remove()).toBe(undefined)
        expect(queue.body.length).toBe(0);
    })
    test('add 3 values and remove the last one', () => {
        const queue = new NaiveArrayQueue();
        queue.add(1);
        queue.add(2);
        queue.add(3);
        expect(queue.body).toEqual([1,2,3]);
        expect(queue.remove()).toBe(1);
        expect(queue.body.length).toBe(2);
    })
});

describe('ArrayQueue tests', () => {
    test('add value', () => {
        const queue = new ArrayQueue();
        expect(queue.input.length).toBe(0);
        expect(queue.output.length).toBe(0);
        queue.add(1);
        expect(queue.input.length).toBe(1);
        expect(queue.output.length).toBe(0);
        expect(queue.input).toEqual([1]);
    })
    test('remove value when queue is not empty', () => {
        const queue = new ArrayQueue();
        queue.add(1);
        expect(queue.input.length).toBe(1);
        expect(queue.output.length).toBe(0);
        expect(queue.remove()).toBe(1)
        expect(queue.input.length).toBe(0);
        expect(queue.output.length).toBe(0);
    })
    test('remove value when queue is empty', () => {
        const queue = new ArrayQueue();
        expect(queue.input.length).toBe(0);
        expect(queue.output.length).toBe(0);
        expect(queue.remove()).toBe(undefined)
        expect(queue.input.length).toBe(0);
        expect(queue.output.length).toBe(0);
    })
    test('add 3 values and remove the last one', () => {
        const queue = new ArrayQueue();
        queue.add(1);
        queue.add(2);
        queue.add(3);
        expect(queue.input).toEqual([1,2,3]);
        expect(queue.output).toEqual([]);
        expect(queue.remove()).toBe(1);
        expect(queue.input).toEqual([]);
        expect(queue.output).toEqual([3, 2]);
    })
});

describe('LinkedListQueue tests', () => {
    test('add value', () => {
        const queue = new LinkedListQueue();
        expect(queue.size).toBe(0);
        queue.add(1);
        expect(queue.size).toBe(1);
        expect(queue.body.search(1)).toEqual(0);
    })
    test('remove value when queue is not empty', () => {
        const queue = new LinkedListQueue();
        queue.add(1);
        expect(queue.size).toBe(1);
        expect(queue.remove()).toBe(1)
        expect(queue.size).toBe(0);
    })
    test('remove value when queue is empty', () => {
        const queue = new LinkedListQueue();
        expect(queue.size).toBe(0);
        expect(queue.remove()).toBe(undefined)
        expect(queue.size).toBe(0);
    })
    test('add 3 values and remove the last one', () => {
        const queue = new LinkedListQueue();
        queue.add(1);
        queue.add(2);
        queue.add(3);
        expect(queue.body.first.value).toBe(3);
        expect(queue.body.last.value).toBe(1);
        expect(queue.remove()).toBe(1);
        expect(queue.size).toBe(2);
        expect(queue.body.first.value).toBe(3);
        expect(queue.body.last.value).toBe(2);
    })
});
