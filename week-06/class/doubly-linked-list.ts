type DNodeType<T> = DNode<T> | null;

/** Doubly Linked List Node */
class DNode<T> {
    public data: T;
    public next: DNodeType<T>;
    public prev: DNodeType<T>;

    // Initializes a node with a value
    constructor(val: T) {
        this.data = val;
    }

    public setNext(newNode: DNodeType<T>) {
        this.next = newNode;
    }

    public setPrev(newNode: DNodeType<T>) {
        this.prev = newNode;
    }
}

/** Doubly Linked List */
class DLinkedList<T> {
    public head: DNodeType<T>;
    public tail: DNodeType<T>;
    public size: number;

    // Initialize the doubly linked list with some data
    // [1, 2, 3]
    constructor(initial: T[]) {
        this.size = initial.length;
        this.head = new DNode(initial[0]);

        let curr: DNode<T> = this.head;

        for (let i = 1; i < initial.length; i++) {
            let nextNode = new DNode(initial[i]);

            nextNode.setPrev(curr);
            curr.setNext(nextNode);

            curr = nextNode;
        }

        this.tail = curr;
    }

    public add(val: T, pos: number = this.size): void {
        const newNode = new DNode(val);

        // Just prepend to the head if pos <= 0
        if (pos <= 0) {
            // The head exists
            if (this.head != null) {
                newNode.setNext(this.head);
                this.head.setPrev(newNode);
                this.head = newNode;

                return;
            }

            this.head = newNode;
            this.tail = newNode;
            this.size += 1;

            return;
        }

        // Just append to the tail if pos >= size
        if (pos >= this.size) {
            // A tail exists
            if (this.tail != null) {
                newNode.setPrev(this.tail);
                this.tail.setNext(newNode);
                this.tail = newNode;

                return;
            }

            this.head = newNode;
            this.tail = newNode;
            this.size += 1;

            return;
        }

        // Edge cases handled
        let currNode: DNodeType<T> = this.head;
        let idx = 0;

        // Keep iterating just before getting to the target
        while (currNode != null && idx < pos - 1) {
            currNode = currNode.next;
            idx += 1;
        }

        if (currNode != null && currNode.next != null) {
            // Set the new node's next to the target's next
            newNode.setNext(currNode.next);
            // Set the new node's previous to the target
            newNode.setPrev(currNode);
            // Set the curr node's next to the new node
            currNode.setNext(newNode);
            // Set the curr node's next's prev to the new node...
            currNode.next.setPrev(newNode);

            this.size += 1;
        }
    }

    public delete(pos: number): T | null {
        if (pos < 0 || pos >= this.size) return null;

        let currNode = this.head;
        let idx = 0;

        // Iterate just until the pos
        while (currNode != null && idx < pos) {
            currNode = currNode.next;
            idx += 1;
        }

        if (currNode != null) {
            // If deleting the head, update head            
            if (pos == 0) {
                this.head = currNode.next;
                if (this.head) this.head.setPrev(null);
            } else {
                currNode.prev?.setNext(currNode.next);
                if (!currNode.next) this.tail = currNode.prev;
                else currNode.next.setPrev(currNode.prev);
            }

            this.size -= 1;
            return currNode.data;
        }

        return null;
    }

    public iterate() {
        const list: T[] = [];
        let curr = this.head;

        while (curr != null) {
            list.push(curr.data);
            curr = curr.next;
        }

        console.log(list);
    }
}

const dll = new DLinkedList(['some', 'new', 'linked']);

dll.add('list', 3); // some <-> new <-> linked <-> list
dll.add('this is', -1); // this is <-> some <-> new <-> linked <-> list
dll.add('somewhere', -1); // somewhere <-> this is <-> some <-> new <-> linked <-> list
dll.add('new-second', 1); // somewhere <-> new-second <-> this is <-> some <-> new <-> linked <-> list

dll.iterate();

dll.delete(0);
dll.delete(0);
dll.delete(1); // removes 'some'

dll.iterate();
