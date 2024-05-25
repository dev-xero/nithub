/** Tree Node Class */
class TreeNode<T> {
    public data: T;
    public left?: TreeNode<T>;
    public right?: TreeNode<T>;

    // Initialize with some data
    constructor(data: T) {
        this.data = data;
    }
}

/** Tree Class */
class Tree<T> {
    public root?: TreeNode<T>;

    constructor(root: T) {
        this.root = new TreeNode(root);
    }

    // Traverses a tree, returns it's children in order
    public traverse(): T[] {
        if (!this.root) return [];

        const treeQueue: TreeNode<T>[] = [this.root];
        const leafs: T[] = [];

        // While there's still nodes to consider
        while (treeQueue.length != 0) {
            const newLeaf: TreeNode<T> = treeQueue.shift()!;
            // Push the data
            leafs.push(newLeaf.data);
            // Add the left and right children if present
            if (newLeaf.left) treeQueue.push(newLeaf.left);
            if (newLeaf.right) treeQueue.push(newLeaf.right);
        }

        return leafs;
    }

    // Pre-order traversal
    public preorder(subtree: TreeNode<T> | undefined, nodes: T[]): T[] {
        if (subtree) {
            nodes.push(subtree.data);
            this.preorder(subtree.left, nodes);
            this.preorder(subtree.right, nodes);
        }
        return nodes;
    }
}

const binaryTree = new Tree(1);

// Left sub-tree
binaryTree.root!.left = new TreeNode(2);
binaryTree.root!.left.left = new TreeNode(4);
binaryTree.root!.left.right = new TreeNode(5);
binaryTree.root!.left.left.left = new TreeNode(7);
binaryTree.root!.left.left.right = new TreeNode(11);

// Right sub-tree
binaryTree.root!.right = new TreeNode(3);
binaryTree.root!.right.left = new TreeNode(9);
binaryTree.root!.right.right = new TreeNode(18);
binaryTree.root!.right.right.left = new TreeNode(19);
binaryTree.root!.right.right.right = new TreeNode(21);

const nodes = binaryTree.traverse();
const preorder = binaryTree.preorder(binaryTree.root, []);
console.log("Traversal", nodes);
console.log("Pre-order", preorder);
