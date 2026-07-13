class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

const print = head => {
    while(head){
        console.log(head.data);
        head = head.next;
    }
}

const insertAtHead = (head, value) => {
    const newNode = new Node(value);
    newNode.next = head;
    return newNode;
}

let head = new Node(2);
head = insertAtHead(head, 4);
head = insertAtHead(head, 6);
head = insertAtHead(head, 8);
print(head);
console.log("------1st print completed------")

const reverseInKGroup = (head, K) => {
    let prevRef = null;
    if(!head || head.next === null) return head;
    let current = head;
    let endNode = head;
    let count = 1;
    while(count !== K && endNode) {
        endNode = endNode.next;
        count++;
    }
    if(!endNode) return head;
    let restListHead = endNode.next;
    let forwardRef = null;
    while(current !== restListHead) {
        forwardRef = current.next;
        current.next = prevRef;
        prevRef = current;
        current = forwardRef;
    }
    
    head.next = reverseInKGroup(restListHead, K);
    return prevRef;
}

head = reverseInKGroup(head, 2);
print(head);


// ------------------ another method--------------
const KReverse = (head, k) => {
    // base case
    if(!head) return null;

    let prevRef = null;
    let current = head;
    let forwardRef = null;
    let count = 0;
    // step 1 reverse first k nodes
    while(current && count < k) {
        forwardRef = current.next;
        current.next = prevRef;
        prevRef = current;
        current = forwardRef;
        count++;
    }

    if(forwardRef) {
        head.next = KReverse(forwardRef, k);
    }
}