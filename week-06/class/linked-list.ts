type LNodeType<T> = LNode<T> | null;

/** Singly Linked List */
export class LNode<T> {
    public data: T;
    private next: LNodeType<T>;

    // Initialize the node with some data
    constructor(val: T) {
        this.data = val;
        this.next = null;
    }

    // Get the next
    get getNext(): LNodeType<T> {
        return this.next;
    }

    // Set the next
    setNext(newNext: LNodeType<T>): void {
        this.next = newNext;
    }
}