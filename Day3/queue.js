class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.length= null ;
    }

    enqueue(val){
        let newNode = new Node(val);
        if(!this.first){
            this.first = this.last= newNode
        }else{
            this.last.next= newNode
            this.last= newNode
        }
        this.length++;
        return this
    }

    dequeue(){
        if(!this.first){
            return undefined
        }
        if(this.first === this.last){
            this.last = null;
        }
        let temp = this.first;
        this.first= this.first.next;
        temp.next = null ;
        this.length--;
        return this;
    }

}

let q = new Queue();

q.enqueue(10);
q.enqueue(20);
q.enqueue(30);

console.log(q.dequeue()); 
console.log(q.dequeue())