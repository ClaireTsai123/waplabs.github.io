class LinkedList {
    constructor() {
        this.head = null;
        this.node = new Node();
    }
   add (value) {
        // let newNode = Object.create(this.Node);
        let newNode = new Node();
        newNode.value = value;

        if (this.head === null) {
            this.head = newNode;
        } else {
            let currentNode = this.head;
            while (currentNode.next !== null) {
                currentNode = currentNode.next;
            }
            currentNode.next = newNode;
        }
    }
    remove (value) {
        if (this.head === null) {
            return;
        }
        if (this.head.value === value) {
            this.head = this.head.next;
        } else {
            let currentNode = this.head;
            let previousNode = null;

            while (currentNode !== null && currentNode.value !== value) {
                previousNode = currentNode;
                currentNode = currentNode.next;
            }

            if (currentNode !== null) {
                previousNode.next = currentNode.next;
            }
        }
    }

    print () {
        let currentNode = this.head;
        let values = [];

        while (currentNode !== null) {
            values.push(currentNode.value);
            currentNode = currentNode.next;
        }
        console.log('{' + values.join(',') +'}');
    }
}
class Node {
    constructor() {
        this.value = null;
        this.next = null;
    }
}

let linkedList = new LinkedList();
linkedList.add(1);
linkedList.add(2);
linkedList.add(3);
linkedList.print(); //{1,2,3}

linkedList.remove(2);
linkedList.print();//{1,3};