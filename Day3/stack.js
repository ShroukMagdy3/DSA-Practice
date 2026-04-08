
class Node {
    constructor(data) {
        this.data = data;
        this.next = null
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.length = 0;
    }


    push(val) {
        let newNode = new Node(val);
        if (!this.top) {
            this.top = newNode
        } else {
            newNode.next = this.top;
            this.top = newNode
        }
        this.length++;
        return this;
    }

    pop() {
        if (!this.top) {
            return undefined
        }
        let temp = this.top
        this.top = this.top.next;
        temp.next = null

        this.length--;
        return temp.data;
    }

    peek() {
        return this.top ? this.top.data : null;
    }

    isEmpty() {
        return this.length === 0;
    }




}


let s1 = new Stack();
s1.push(10000);
console.log(s1.isEmpty());



function precedence(op) {
    if (op === '+' || op === '-') return 1;
    if (op === '*' || op === '/') return 2;
    return 0;
}

function applyOp(a, b, op) {
    if (op === '+') return a + b;
    if (op === '-') return a - b;
    if (op === '*') return a * b;
    if (op === '/') return a / b;
}

function evaluate(exp) {
    let values = new Stack();
    let operators = new Stack();

    for (let i = 0; i < exp.length; i++) {
        let ch = exp[i];

        if (ch === ' ') continue;

        if (!isNaN(ch)) {
            values.push(Number(ch));
        }


        else if (ch === '(') {
            operators.push(ch);
        }

        else if (ch === ')') {
            while (operators.peek() !== '(') {
                let b = values.pop();
                let a = values.pop();
                let op = operators.pop();
                values.push(applyOp(a, b, op));
            }
            operators.pop();
        }

        else {
            while (
                !operators.isEmpty() &&
                precedence(operators.peek()) >= precedence(ch)
            ) {
                let b = values.pop();
                let a = values.pop();
                let op = operators.pop();
                values.push(applyOp(a, b, op));
            }

            operators.push(ch);
        }
    }

    while (!operators.isEmpty()) {
        let b = values.pop();
        let a = values.pop();
        let op = operators.pop();
        values.push(applyOp(a, b, op));
    }

    return values.pop();
}

console.log(evaluate("1 + 2 * (3 + 4) - 5"))