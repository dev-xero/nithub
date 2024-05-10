class Queue<T> {
    private data: T[] = [];

    constructor(initialData: T[]) {
        this.data = initialData;
    }

    // Enqueue an element
    enqueue(element: T): void {
        this.data.push(element);
    }

    // Check if the queue is empty
    isEmpty(): boolean {
        return this.data.length == 0;
    }
}
