class TreeNode {
    left?: TreeNode;
    parent?: TreeNode;
    right?: TreeNode;
    
    value: number;

    constructor(value: number) {
        this.value = value;
    }

    // pretty print tree structure to console for debugging
    printTree(): void {
        console.log(`Tree:`);
        this.printTreeNode(this, 0);
    }

    // recursive helper to print tree structure
    private printTreeNode(node: TreeNode, level: number): void {
        if (!node) {
            return;
        }
        let indent = '';
        for (let i = 0; i < level; i++) {
            indent += '  ';
        }
        console.log(`${indent}${node.value}`);
        if(node.left) {
            this.printTreeNode(node.left, level + 1);
        }
        if(node.right) {
            this.printTreeNode(node.right, level + 1);
        }
    }

    setParent(parent: TreeNode): void {
        this.parent = parent;
    }

    setRight(right: TreeNode): void {
        this.right = right;
    }

    setLeft(left: TreeNode): void {
        this.left = left;
    }
}

let _1 = new TreeNode(1);
let _2 = new TreeNode(2);
let _3 = new TreeNode(3);
let _4 = new TreeNode(4);
let _5 = new TreeNode(5);
let _6 = new TreeNode(6);
let _7 = new TreeNode(7);
let _8 = new TreeNode(8);
let _9 = new TreeNode(9);
let _10 = new TreeNode(10);
let _11 = new TreeNode(11);
let _12 = new TreeNode(12);
let _13 = new TreeNode(13);
let _14 = new TreeNode(14);
let _15 = new TreeNode(15);
let _16 = new TreeNode(16);
let _17 = new TreeNode(17);
let _18 = new TreeNode(18);
let _19 = new TreeNode(19);
let _20 = new TreeNode(20);

_1.setLeft(_2);
_1.setRight(_3); _3.setParent(_1);
_2.setLeft(_4); _4.setParent(_2);
_2.setLeft(_5); _5.setParent(_2);
_5.setLeft(_6); _6.setParent(_5);
_5.setRight(_6);

console.log(_1.printTree());

function sumLeftLeaves(root: TreeNode): number {
    if (!root) {
        return 0;
    }
    
    let sum = 0;

    if (root.left) {
        sum += root.left.value;
        sum += sumLeftLeaves(root.left);
    }
    if (root.right) {
        sum += sumLeftLeaves(root.right);

    }
    return sum;
}   // O(n) time, O(n) space

console.log(sumLeftLeaves(_1));