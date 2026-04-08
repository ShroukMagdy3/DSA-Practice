

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


class BST {
    constructor() {
        this.root = null;
    }

    insert(val) {
        let newNode = new Node(val);

        if (!this.root) {
            this.root = newNode;
        }

        let temp = this.root;
        while (temp) {
            if (temp.value > val) {
                if (temp.left === null) {
                    temp.left = newNode;
                    return 0;
                }
                temp = temp.left
            }
            if (temp.value < val) {
                if (temp.right === null) {
                    temp.right = newNode;
                    return 0;
                }
                temp = temp.right;
            }
        }

    }

    // InOrder (Left - Parent - Right)
    inOrder() {
        function printI(r) {
            if (r === null) {
                return 0;
            } else {
                printI(r.left);
                console.log(r.value);
                printI(r.right);
            }
        }
        printI(this.root)
    }
    //  preOrder (parent-left - right )
    preOrder() {
        function printI(r) {
            if (r === null) {
                return 0;
            } else {
                console.log(r.value);
                printI(r.left);
                printI(r.right);
            }
        }
        printI(this.root)
    }
    // post(left - right - parent)
    postOrder() {

        function printI(r) {
            if (r == null) {
                return 0;
            }
            printI(r.left);
            printI(r.right);
            console.log(r.value);
        }
        printI(this.root);
    }

    search(v, node = this.root) {
        if (!node) return false
        if (v === node.value) return true;

        if (v < node.value) {
            return this.search(v, node.left)
        } else {
            return this.search(v, node.right);
        }
    }

    delete(value) {
        this.root = this._deleteNode(this.root, value);
    }

    _deleteRec(node, data) {
        if (!node) return null;

        if (data < node.data) {
            node.left = this._deleteRec(node.left, data);
        } else if (data > node.data) {
            node.right = this._deleteRec(node.right, data);
        } else {
            if (!node.left && !node.right) return null;

            if (!node.left) return node.right;
            if (!node.right) return node.left;

            let minRight = this._findMin(node.right);
            node.data = minRight.data;
            node.right = this._deleteRec(node.right, minRight.data);
        }

        return node;
    }

    _findMin(node) {
        while (node.left) {
            node = node.left;
        }
        return node;
    }

    BFS() {
        if (!this.root) {
            return 0;
        } else {
            let arr = [];
            arr.push(this.root);
            while (arr.length > 0) {
                let node = arr.shift();
                console.log(node.value);
                if (node.left) {
                    arr.push(node.left)
                }
                if (node.right) {
                    arr.push(node.right)
                }

            }
        }
    }

}


let t1 = new BST();
t1.insert(50);
t1.insert(30);
t1.insert(20);
console.log(t1);
preOrder();
inOrder();
BFS()