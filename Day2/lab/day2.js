// fibonacci
function fib(n) {
    if (n == 0) {
        return 0;
    }
    if (n == 1) {
        return 1;
    }
    return fib(n - 1) + fib(n - 2);
}
console.log(fib(5));

// iterative
function fibonacci(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    let pre = 0;
    let curr = 1;
    for (let i = 2; i <= n; i++) {
        let next = pre + curr;
        pre = curr;
        curr = next;
    }
    return curr;
}
console.log(fibonacci(5));


// implementation
// single linkedList



class Node {
    constructor(data) {
        this.data = data;
        this.next = null
    }
}

class SSL {
    constructor() {
        this.head = this.tail = null;
        this.length = 0;
    }
    // O(1)
    push(val) {
        // empty
        let newNode = new Node(val);
        if (!this.head) {
            this.head = this.tail = newNode;
        }
        else {
            // there is vals
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++;
    }
    // O(1)
    display() {
        let temp = this.head
        while (temp) {
            console.log(temp.data);
            temp = temp.next;
        }
    }
    // O(n)
    pop() {
        let temp = this.tail;
        // empty
        if (!this.head) {
            return undefined
        }
        // one node
        if (this.head === this.tail) {
            this.head = this.tail = null;
        } else {
            // more than one node
            let pre = this.head;
            while (pre.next != this.tail) {
                pre = pre.next;
            }
            this.tail = pre
            pre.next = null;
        }

        this.length--;
        return temp
    }

    shift() {
        // no ele
        if (!this.head) {
            return undefined
        }
        var temp = this.head;
        if (this.head === this.tail) {
            this.head = this.tail = null
        }
        else {
            this.head = this.head.next;
            temp.next = null
        }
        this.length--;
        return temp;
    }

    unshift(val) {
        if (!this.head) {
            return this.push(val)
        } else {
            let newNode = new Node(val);
            newNode.next = this.head;
            this.head = newNode;
            this.length++;
        }
        return this;
    }

    get(index) {
        if (index < 0 || index >= this.length) return null;
        let temp = this.head;
        for (let i = 0; i < index; i++) {
            temp = temp.next
        }
        return temp

    }

    set(i, val) {
        let temp = this.get(i);
        if (temp) {
            temp.data = val;
            return true;
        } else {
            return false;
        }
    }

    remove(index) {
        if (index < 0 || index >= this.length) {
            return undefined;
        }
        if (index === this.length - 1) {
            return this.pop()
        }
        if (index === 0) {
            return this.shift();
        }
        let preDeleted = this.get(index - 1);
        let temp = preDeleted.next;
        preDeleted.next = temp.next;
        temp.next = null;
        this.length--;
        return temp
    }

    insert(index, val) {
        if (index < 0 || index >= this.length) {
            return undefined;
        }
        if (index === 0) {
            return this.unshift(val);
        }
        if (index === this.length) {
            return this.push(val);
        }
        let newNode = new Node(val);
        let pre = this.get(index - 1);
        newNode.next = pre.next;
        pre.next = newNode;






    }

    reverse() {
        var temp = this.head;
        this.head = this.tail;
        this.tail = temp
        var pre = null;
        var nx = temp.next;
        while (temp) {
            nx = temp.next;
            temp.next = pre;
            pre = temp;
            temp = nx;
        }
    }


    findMiddleNode() {
        let slow = this.head;
        let fast = this.head;

        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow;
    }

    hashLoop() {
        let slow = this.head;
        let fast = this.head;
        while (fast !== null && fast.next !== null) {
            slow = slow.next;
            fast = fast.next.next;
            if (slow === fast) {
                return true;
            }
        }
        return false;
    }

    findKthFromEnd(k) {
        let slow = this.head;
        let fast = this.head;

        for (let i = 0; i < k; i++) {
            if (fast === null) return null;
            fast = fast.next;
        }

        while (fast !== null) {
            slow = slow.next;
            fast = fast.next;
        }

        return slow;
    }


}

let l1 = new SSL()
l1.push(12);
l1.push(15);
// l1.set(0, 11)
// l1.insert(1,40);
// console.log(l1.remove(0))
// l1.display()
// l1.shift();
// l1.unshift(33)
// l1.pop()
// l1.get(0)
l1.reverse();
l1.display();


