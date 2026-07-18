// In this question we are given a question of addition of two LL.
// ex - LLOne - 5 -> 6
// LLTwo - 2 -> 4.
// OUtput LL - 8 -> 0.

// here one approach that we can use by reversing the both of the LL and start adding from head of new reversed LL.
// this reverse is because the addition start from end.

class Node {
    constructor(value) {
        this.data = value;
        this.next = null;
    }
}
const AddTwoLL = (headOne, headTwo) => {
    if (!headOne) return headTwo;
    if (!headTwo) return headOne;

    // Now firstly reverse the first LL.
    let newReversedHeadOne = reverseLL(headOne);
    let tempOfOne = newReversedHeadOne;
    let newReversedHeadTwo = reverseLL(headTwo);
    let tempOfTwo = newReversedHeadTwo;

    // store the output in LL.
    let headOfResult = null;
    let tailOfResult = null;

    // store the carry of addition.
    let carry = 0;

    while (tempOfOne || tempOfTwo || carry) {
        let x = tempOfOne ? tempOfOne.data : 0;
        let y = tempOfTwo ? tempOfTwo.data : 0;

        let resultOfAdd = x + y + carry;
        carry = (Math.floor(resultOfAdd / 10));

        const newNode = new Node((Math.floor(resultOfAdd % 10)));

        if (!headOfResult) {
            headOfResult = newNode;
            tailOfResult = newNode;
        }
        else {
            tailOfResult.next = newNode;
            tailOfResult = newNode;
        }

        // update the both pointers.
        tempOfOne = tempOfOne ? tempOfOne.next : null;
        tempOfTwo = tempOfTwo ? tempOfTwo.next : null;
    }

    // Now reverse the final head of the resultant LL because the ans ll we get is opposite i.e - 0 -> 8.

    return reverseLL(headOfResult);
}

const reverseLL = head => {
    let prevRef = null;
    let current = head;

    while (current) {
        let forwardRef = current.next;
        // update the next of the current node.
        current.next = prevRef;
        // update the pointers.
        prevRef = current;
        current = forwardRef;
    }

    // return the last node.
    return prevRef;
}