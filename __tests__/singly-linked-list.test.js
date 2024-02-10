const {SinglyLinkedList} = require("../main")


describe('SinglyLinkedList tests', () => {
    test('addFirst', () => {
        const list = new SinglyLinkedList();
        expect(list.size).toBe(0);
        list.addFirst(1);
        list.addFirst(2);
        expect(list.size).toBe(2);
        expect(getLinkedListValues(list.root)).toEqual([2, 1]);
    })
    test('addLast', () => {
        const list = new SinglyLinkedList();
        expect(list.size).toBe(0);
        list.addFirst(1);
        list.addFirst(2);
        expect(list.size).toBe(2);
        expect(getLinkedListValues(list.root)).toEqual([2, 1]);
        list.addLast(3);
        expect(list.size).toBe(3);
        expect(getLinkedListValues(list.root)).toEqual([2, 1, 3]);
    })
    test('removeFirst', () => {
        const list = new SinglyLinkedList();
        expect(list.size).toBe(0);
        list.addFirst(1);
        list.addFirst(2);
        expect(list.size).toBe(2);
        expect(getLinkedListValues(list.root)).toEqual([2, 1]);
        expect(list.removeFirst()).toBe(2);
        expect(list.size).toBe(1);
        expect(getLinkedListValues(list.root)).toEqual([1]);
    })
    test('removeLast', () => {
        const list = new SinglyLinkedList();
        expect(list.size).toBe(0);
        list.addFirst(1);
        list.addFirst(2);
        expect(list.size).toBe(2);
        expect(getLinkedListValues(list.root)).toEqual([2, 1]);
        expect(list.removeLast()).toBe(1);
        expect(list.size).toBe(1);
        expect(getLinkedListValues(list.root)).toEqual([2]);
    })
    test('remove', () => {
        const list = new SinglyLinkedList();
        expect(list.size).toBe(0);
        list.addFirst(1);
        list.addFirst(2);
        list.addFirst(3);
        expect(list.size).toBe(3);
        expect(getLinkedListValues(list.root)).toEqual([3, 2, 1]);
        expect(list.remove(2)).toBe(1);
        expect(list.size).toBe(2);
        expect(getLinkedListValues(list.root)).toEqual([3, 2]);
    })
    test('search', () => {
        const list = new SinglyLinkedList();
        expect(list.size).toBe(0);
        list.addFirst(1);
        list.addFirst(2);
        list.addFirst(3);
        expect(list.size).toBe(3);
        expect(getLinkedListValues(list.root)).toEqual([3, 2, 1]);
        expect(list.search(2)).toBe(1);
    })
})

function getLinkedListValues(root) {
    const values = [];
    let cur = root;
    while(cur) {
        values.push(cur.value);
        cur = cur.next;
    }

    return values;
}