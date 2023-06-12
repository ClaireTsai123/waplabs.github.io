
//use Constructor Function
function LinkedList() {
    this.head = null;
    //  function Node(value) {
    //     this.value = value;
    //     this.next = null;
    // }
    this.node = new Node();
}
function Node() {
    this.value = null;
    this.next = null;
}

LinkedList.prototype.add = function (value) {
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
};


LinkedList.prototype.remove = function(value) {

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

};

LinkedList.prototype.print = function () {
    let currentNode = this.head;
    let values = [];

    while (currentNode !== null) {
        values.push(currentNode.value);
        currentNode = currentNode.next;
    }

    console.log('{' + values.join(',') +'}');

}
// Example usage
let linkedList = new LinkedList();
linkedList.add(1);
linkedList.add(2);
linkedList.add(3);
linkedList.print(); //{1,2,3}

linkedList.remove(2);
linkedList.print();//{1,3};