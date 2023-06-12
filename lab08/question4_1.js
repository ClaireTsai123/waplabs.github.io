// object literal
let linkedList = {
    head: null,
    Node: {
        value: null,
        next: null
    }
}

linkedList.add = function (value) {
    let newNode = Object.create(this.Node);
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


linkedList.remove = function(value) {

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

linkedList.print = function () {
        let currentNode = this.head;
        let values = [];

        while (currentNode !== null) {
            values.push(currentNode.value);
            currentNode = currentNode.next;
        }

        console.log('{' + values.join(',') +'}');

}
// Example usage
linkedList.add(1);
linkedList.add(2);
linkedList.add(3);
linkedList.print(); //{1,2,3}

linkedList.remove(2);
linkedList.print();//{1,3};
