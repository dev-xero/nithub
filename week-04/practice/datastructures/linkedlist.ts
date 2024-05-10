type NodeType<T> = NodeItem<T> | null;

// Node Item
class NodeItem<T> {
    key: T;
    next: NodeType<T>;

    constructor(key: T, next: NodeType<T> = null) {
        this.key = key;
        this.next = next;
    }
}

// Linked List
class LinkedList<T> {
    head: NodeType<T> = null;

    // LinkedList class constructor
    constructor(initial: T[]) {
        if (initial.length > 0) {
            this.head = new NodeItem(initial[0]);

            if (initial.length > 1) {
                let curr = this.head;
                for (let i = 1; i < initial.length; i++) {
                    curr.next = new NodeItem(initial[i]);
                    curr = curr.next;
                }
            }
        }
    }

    // Insert a node to the beginning of a list: O(1)
    insertAtHead(element: T): LinkedList<T> {
        const newNode = new NodeItem(element);

        if (newNode != null) {
            if (!this.head) {
                this.head = newNode;
                return this;
            }
            newNode.next = this.head;
            this.head = newNode;
        }

        return this;
    }

    // Insert a node to the end of the list: O(n)
    insertAtTail(element: T): LinkedList<T> {
        const newNode = new NodeItem(element);

        if (!this.head) {
            this.head = newNode;
            return this;
        }

        let curr = this.head;

        while (curr.next != null) {
            curr = curr.next;
        }

        curr.next = newNode;

        return this;
    }

    // Delete tail element
    removeTail(): NodeType<T> {
        if (this.head) {
            let prevNode: NodeType<T> = null;

            // there is only one element
            if (this.head.next == null) {
                prevNode = this.head;
                this.head = null;

                return prevNode;
            }

            let curr = this.head;

            // while the second to last element isn't null
            while (curr.next && curr.next.next) {
                curr = curr.next;
            }

            prevNode = curr.next;
            curr.next = null;

            return prevNode;
        }

        return null;
    }

    // Remove from an index
    removeFromMiddle(idx: number): NodeType<T> {
        if (this.head) {
            if (idx == 0) {
                let oldHead = this.head;
                this.head = this.head?.next ?? null;
                oldHead.next = null;

                return oldHead;
            }

            let i = 0;
            let curr: NodeType<T> = this.head;

            while (curr) {
                if (i + 1 == idx) {
                    let oldNode: NodeType<T> = curr.next;

                    if (oldNode) {
                        curr.next = oldNode.next;
                        oldNode.next = null;

                        return oldNode;
                    }
                }

                i += 1;
                curr = curr.next;
            }
        }

        return null;
    }

    // Prints out a linked list: O(n)
    iterate(): void {
        console.log('\nLINKS:');
        let curr = this.head;
        let list = '';

        while (curr != null) {
            list += `${curr.key} -> `;
            curr = curr?.next;
        }

        list += 'NULL';
        console.log(list);
    }
}

// Testing
const steps = new LinkedList<string>(['instantiate with new data']);
const target = 0;

steps
    .insertAtTail('define insert method')
    .insertAtTail('test edge cases')
    .insertAtHead('create class')
    .iterate();

console.log('\nremoved tail:', steps.removeTail());
console.log('\nremoved tail:', steps.removeTail());

steps.iterate();

console.log(`\nremoved middle at ${target}:`, steps.removeFromMiddle(target));

steps.iterate();
