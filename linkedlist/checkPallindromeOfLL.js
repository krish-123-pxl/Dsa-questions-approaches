// In this question we are give by a LinkedList and we need to check is the linked list is pallindrome or not.
// We know the approach to check is the ARRAY or STRING is Pallindrome or not.

// So first appraoch is can be by converting the whole LL in an array and then check is the array is pallindrome or not.
// If the array is pallindrome then it means the LL is pallindrome if not then LL is not pallindrome.

const checkPallindromeThroughArray = head => {
    if(!head) return null;

    // traverse the whole LL and push in to an array.
    let temp = head;
    let array = [];
    while(temp) {
        array.push(temp.data);
        temp = temp.next;
    }

    // Now the all elements are in the pallindrome.
    // Now we can check is it a pallindrome or not through two pointers method.
    // In which the first pointer will start from starting of the ll while other will starts from the ending of the LL.
    // And the moment where the data of first pointer is not equals to the data of ending pointer then we will can say the array/ll is not a pallindrome.

    let start = 0;
    let end = array.length - 1;
    while(start <= end) {
        if(array[start] !== array[end]) return 0;
        start++;
        end--;
    }
    return 1
}

// But here the space complexity is O(n) because we are using an extra array to solve the question.
// We can solve this with an another method.
// 1 -> 2 -> 3 -> 3 -> 2 -> 1
// In this appraoch firstly we find the middle of the LL and then reverse the LL from next of the middle to the end of the ll.
// And then compares the corresponding element and where the values don't match there we can return 0/false.

const checkPallindromeThroughReverse = head => {
    if(!head) return null;

    let temp = head;
    const middle = getMid(head);

    // Now reverse the LL from next element of middle to end of the LL.
    let prevRef = null;
    let current = middle.next;
    let forwardRef = current.next;

    while(current) {
        forwardRef = current.next;
        current.next = prevRef;
        prevRef = current;
        current = forwardRef;
    }
    // after reverse the next of the middle points to the null.
    // so conect the middle.next to prevRef element.
    middle.next = prevRef;

    // after reversing comparing the corresponding element.
    let first = head;
    let second = middle.next; // start from the first element of reverse sorted.
    while(first && second) {
        if(first.data !== second.data) return false;
        
        // Now update the both pointers.
        first = first.next;
        second = second.next;
    }

    // Now reverse back to obtain the original LL.
    prevRef = null;
    current = middle.next;
    forwardRef = current.next;

    while(current) {
        forwardRef = current.next;
        current.next = prevRef;
        prevRef = current;
        current = forwardRef;
    }
    middle.next = prevRef;
    return true;
}

// here we find the middle of the LL.
const getMid = head => {
    // we use two pointers appraoch one is slowPointer and second is fastPointer.
    // When the fastPointer traverse the whole LL then then slowPointer will be present at the middle of LL.
    let slowPointer = head;
    let fastPointer = head.next;

    while(fastPointer) {
        slowPointer = slowPointer.next;
        fastPointer = fastPointer.next;

        if(fastPointer) {
            fastPointer = fastPointer.next;
        }
    }

    return slowPointer;
}