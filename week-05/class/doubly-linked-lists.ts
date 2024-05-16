type DNodeType<T> = DoubleNode<T> | null;

// Double node for doubly linked lists
class DoubleNode<T> {
    public data: T;
    public prev: DNodeType<T>;
    public next: DNodeType<T>;

    // Initialize the double node with some data
    constructor(data: T) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }

    // Set the previous node
    public setPrev(node: DNodeType<T>): void {
        this.prev = node;
    }

    // Set the next node
    public setNext(node: DNodeType<T>): void {
        this.next = node;
    }
}

// Implementation of a doubly linked list
class DoublyLinkedList<T> {
    public head: DNodeType<T>;
    public tail: DNodeType<T>;

    // Initialize the doubly linked list with some data
    constructor(dataList: T[] = []) {
        if (dataList.length > 0) {
            this.head = new DoubleNode(dataList[0]);

            // Iterate through from the second item and build a linked list
            let currNode = this.head;
            let i = 1;

            for (i; i < dataList.length; i++) {
                let nextNode = new DoubleNode(dataList[i]);

                // Set the next node's prev to the curr, and the curr's next to the next node
                nextNode.setPrev(currNode);
                currNode.setNext(nextNode);

                // Set the tail if this is the last item
                if (i + 1 == dataList.length)
                    this.tail = nextNode

                // Move to the next node
                currNode = nextNode;
            }
        }
    }

    // Adds a node to the tail
    public append(item: T) {
        const newTail = new DoubleNode(item);
        
        // Set the new tail's prev to the curr tail, and curr tail's next to new tail
        newTail.setPrev(this.tail);
        this.tail?.setNext(newTail);

        this.tail = newTail;
    }

    // Adds a node to the head
    public prepend(item: T) {
        const newHead = new DoubleNode(item);

        // Set the new head's next to the old head, and old to new prev
        newHead.setNext(this.head);
        this.head?.setPrev(newHead);

        this.head = newHead;
    }

    // Iterate through the doubly linked list
    public iterate(): void {
        let currNode = this.head;
        let listSt = 'DOUBLY LINKED LIST:\n';

        // Append the node's prev, data and next to the list string
        while (currNode != null) {
            listSt += ` ${currNode.prev?.data ?? 'NULL'} <- ${
                currNode.data
            } -> ${currNode.next?.data ?? 'NULL'} | `;
            currNode = currNode.next;
        }

        console.log(listSt);
    }
}

const nodes = ['this', 'seems', 'interesting'];
const dLinkedList = new DoublyLinkedList(nodes);

dLinkedList.append('actually');
dLinkedList.prepend('ok');

console.log('HEAD:', dLinkedList.head, '\nTAIL:', dLinkedList.tail);
dLinkedList.iterate();
