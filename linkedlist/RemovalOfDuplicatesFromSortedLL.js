// I this approach we need to remoe the duplicates from the linked list.
// ex - 1 -> 3 -> 3 -> 5 -> 5
// Output should be 1 -> 3 -> 5.

// Now we can do it via the approach of -
// step 1 

// Create a loop unitll the current pointer becomes null
// compare the data vlue of the current pointer from the next pointer data.
// Which can be obtained via current.data and current.next.data

// Now if the next pointer's data value is same as the current pointer data then remove the next node.
// If it's not equal then simply update the current pointer to the next pointer.

const RemoveDuplicates = head => {
     if (!head) return head;
    let current = head;
    let forwardRef = current.next;

    while(current && forwardRef) {
        if(current.data === forwardRef.data) {
            current.next = forwardRef.next;
            forwardRef = current.next;
        }
        else {
            current = forwardRef;
            forwardRef = current.next;
        }
    }

    return head;
}