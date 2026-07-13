// In this approach we are given by a Unsorted linked list and we need to remove the duplicates from them.
// In this we can use two pointers where the first pointer is current and the second pointer will compare compare the data value of the all next values against the current pointer and delete if found any same.


const RemoveDuplicatesFromUnsortedLL = head => {
    if (!head) return head;

    // step 1 - create a loop for current element.
    let current = head;

    while (current) {
        let prevOfNextNode = current;
        let nextNode = current.next;
        while (nextNode) {
            if (current.data === nextNode.data) {
                // if value become same then delete the nextNode by just changing the prevOfNextNode.next to point to nextNode.next
                prevOfNextNode.next = nextNode.next;
                nextNode = prevOfNextNode.next;
            }
            else {
                // if the value is not same then simply update both of pointers to point to it's next node.
                prevOfNextNode = nextNode;
                nextNode = nextNode.next;
            }
        }
        current = current.next;
    }
    return head;
}