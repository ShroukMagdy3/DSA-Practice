class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DDL {
    constructor() {
        this.tail = null;
        this.head = null;
    }

    push(val) {
        let newNode = new Node(val);

        if (!this.head) {
            this.head = this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }



    display() {
        let temp = this.head;
        while (temp) {
            console.log(temp.data);
            temp = temp.next;
        }
    }
    pop() {
        if (!this.head) return undefined;

        let temp = this.tail;

        if (this.length === 1) {
            this.head = this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
            temp.prev = null;
        }

        this.length--;
        return temp;
    }

    shift() {
        if (!this.head) return undefined;

        let temp = this.head;

        if (this.length === 1) {
            this.head = this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
            temp.next = null;
        }

        this.length--;
        return temp;
    }
    unshift(val) {
        let newNode = new Node(val);

        if (!this.head) {
            this.head = this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }

        this.length++;
        return this;
    }

    get(index){
        if (index < 0 || index >= this.length) return null;
        let temp = this.head;
        for(let i=0; i<index ; i++){
            temp= temp.next
        }
        return temp;
    }

    set(index, val) {
        let node = this.get(index);
        if (node) {
            node.data = val;
            return true;
        }
        return false;
    }

    insert(index, val) {
        if (index < 0 || index > this.length) return false;

        if (index === 0) return !!this.unshift(val);
        if (index === this.length) return !!this.push(val);

        let newNode = new Node(val);
        let prevNode = this.get(index - 1);
        let nextNode = prevNode.next;

        prevNode.next = newNode;
        newNode.prev = prevNode;

        newNode.next = nextNode;
        nextNode.prev = newNode;

        this.length++;
        return true;
    }

    remove(index) {
        if (index < 0 || index >= this.length) return undefined;

        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();

        let temp = this.get(index);
        temp.prev.next = temp.next;
        temp.next.prev = temp.prev;
        temp.next = temp.prev = null;

        this.length--;
        return temp;
    }

}



let d1= new DDL();
d1.push(20)
d1.push(30)
d1.push(40)
console.log(d1.get(2));

d1.display();