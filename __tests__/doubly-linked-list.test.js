const {DoublyLinkedList} = require("../main")


describe('DoublyLinkedList tests', () => {
    test('constructor',() => {
        const list = new DoublyLinkedList();
        expect(list.size).toBe(0);
        expect(list.first).toBe(null);
        expect(list.last).toBe(null);
    })
    test('addFirst', () => {
        const list = new DoublyLinkedList();
        expect(list.size).toBe(0);
        list.addFirst(1);
        list.addFirst(2);
        expect(list.size).toBe(2);
        expect(list.first.value).toBe(2);
        expect(list.last.value).toBe(1);
        expect(getLinkedListValues(list.first)).toEqual([2, 1]);
    })
    test('addLast', () => {
        const list = new DoublyLinkedList();
        expect(list.size).toBe(0);
        list.addFirst(1);
        list.addFirst(2);
        expect(list.size).toBe(2);
        expect(getLinkedListValues(list.first)).toEqual([2, 1]);
        list.addLast(3);
        expect(list.size).toBe(3);
        expect(list.last.value).toBe(3);
        expect(getLinkedListValues(list.first)).toEqual([2, 1, 3]);
    })
    test('removeFirst', () => {
        const list = new DoublyLinkedList();
        expect(list.size).toBe(0);
        list.addFirst(1);
        list.addFirst(2);
        expect(list.size).toBe(2);
        expect(getLinkedListValues(list.first)).toEqual([2, 1]);
        expect(list.removeFirst()).toBe(2);
        expect(list.size).toBe(1);
        expect(list.first.value).toBe(1);
        expect(list.last.value).toBe(1);
        expect(getLinkedListValues(list.first)).toEqual([1]);
    })
    test('removeLast', () => {
        const list = new DoublyLinkedList();
        expect(list.size).toBe(0);
        list.addFirst(1);
        list.addFirst(2);
        expect(list.size).toBe(2);
        expect(getLinkedListValues(list.first)).toEqual([2, 1]);
        expect(list.first.value).toBe(2);
        expect(list.last.value).toBe(1);
        expect(list.removeLast()).toBe(1);
        expect(list.first.value).toBe(2);
        expect(list.last.value).toBe(2);
        expect(list.size).toBe(1);
        expect(getLinkedListValues(list.first)).toEqual([2]);
    })
    test('remove', () => {
        const list = new DoublyLinkedList();
        expect(list.size).toBe(0);
        list.addFirst(1);
        list.addFirst(2);
        list.addFirst(3);
        expect(list.size).toBe(3);
        expect(list.first.value).toBe(3);
        expect(list.last.value).toBe(1);
        expect(getLinkedListValues(list.first)).toEqual([3, 2, 1]);
        expect(list.remove(1)).toBe(2);
        expect(list.first.value).toBe(3);
        expect(list.last.value).toBe(1);
        expect(list.size).toBe(2);
        expect(getLinkedListValues(list.first)).toEqual([3, 1]);
    })
    test('add', () => {
        const list = new DoublyLinkedList();
        expect(list.size).toBe(0);
        list.addFirst(1);
        list.addFirst(2);
        list.addFirst(3);
        expect(list.size).toBe(3);
        expect(list.first.value).toBe(3);
        expect(list.last.value).toBe(1);
        expect(getLinkedListValues(list.first)).toEqual([3, 2, 1]);
        list.add(4, 1)
        expect(list.size).toBe(4);
        expect(getLinkedListValues(list.first)).toEqual([3, 4, 2, 1]);
    })
    test('search', () => {
        const list = new DoublyLinkedList();
        expect(list.size).toBe(0);
        list.addFirst(1);
        list.addFirst(2);
        list.addFirst(3);
        expect(list.size).toBe(3);
        expect(getLinkedListValues(list.first)).toEqual([3, 2, 1]);
        expect(list.first.value).toBe(3);
        expect(list.last.value).toBe(1);
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