const {Stack} = require("../main")

describe('Stack tests', () => {
    test('add value', () => {
        const stack = new Stack();
        expect(stack.body.length).toBe(0);
        stack.add(1);
        expect(stack.body.length).toBe(1);
        expect(stack.body).toEqual([1]);
    })
    test('remove value when stack is not empty', () => {
        const stack = new Stack();
        stack.add(1);
        expect(stack.body.length).toBe(1);
        expect(stack.remove()).toBe(1)
        expect(stack.body.length).toBe(0);
    })
    test('remove value when stack is empty', () => {
        const stack = new Stack();
        expect(stack.body.length).toBe(0);
        expect(stack.remove()).toBe(undefined)
        expect(stack.body.length).toBe(0);
    })
    test('add 3 values and remove the last one', () => {
        const stack = new Stack();
        stack.add(1);
        stack.add(2);
        stack.add(3);
        expect(stack.body).toEqual([1,2,3]);
        expect(stack.remove()).toBe(3);
        expect(stack.body.length).toBe(2);
    })
});

