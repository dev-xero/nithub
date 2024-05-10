class Stack<T> {
    private data: T[] = [];

    constructor(initialData: T[] = []) {
        this.data = initialData;
    }

    // Insert an item to the top of the stack
    push(item: T): void {
        this.data.unshift(item);
    }

    // Remove an item from the top of the stack
    pop(): T | null {
        if (this.data.length > 0) {
            return this.data.shift() ?? null;
        }
        return null;
    }

    // Returns if the stack if empty
    isEmpty(): boolean {
        return this.data.length == 0;
    }

    // Returns the topmost element without popping
    top(): T | null {
        return this.data[0] ?? null;
    }

    // Iterate items in the array
    iterate(): void {
        for (const [idx, element] of this.data.entries()) {
            console.log(`${idx + 1}. ${element}`);
        }
    }
}

const myStack = new Stack<String>(['backend']);

myStack.push('android');
myStack.push('frontend');
myStack.push('ML');

myStack.iterate();
console.log("\nTop most element:", myStack.top());
