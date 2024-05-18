import { CNode, CNodeType } from "./circular-linked-list.ts";

export default function reverseLinkedList<T>(head: CNodeType<T>) {
    if (!head) return head;  // head is null
    if (!head.getNext) return head; // there's just one node

    let currNode: CNodeType<T> = head;
    let prevNode: CNodeType<T> = null;
    let nextNode: CNodeType<T> = null;

    while (currNode) {
        nextNode = currNode.getNext;
        currNode.setNext(prevNode); // reverse pointer

        prevNode = currNode;
        currNode = nextNode;
    }
    
    return prevNode;
}