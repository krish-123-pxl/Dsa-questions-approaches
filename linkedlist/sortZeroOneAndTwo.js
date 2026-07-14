// In this question we need to sort the linked list which only contains 0s, 1s and 2s but at random position.

// Ex:- 1 -> 2 -> 0 -> 2 -> 1 -> 0 -> 2 -> null

// Output - 0 -> 0 -> 1 -> 1 -> 2 -> 2 -> 2

// first approach is -
// we know that the question will contain three elements which is 0s, 1s and 2s.

// So, now we can simply take 3 count variables one for each and traverse the whole linked list to determine the number of occurance of each and every element.

// Like in above example zeroCount = 2, oneCount = 2, and twoCount = 3
// And then we again traverse the linked list but at this time we simply update the value according to there occurance.

const sortZeoOneAndTwo = head => {
    if(!head) return null;

    // create thre count variables.
    let zeroCount = 0;
    let oneCount = 0;
    let twoCount = 0;

    // now traverse through whole linked list and increase the appropriate count.
    let temp = head;
    while(temp) {
        if(temp.data === 0) zeroCount++;
        else if(temp.data === 1) oneCount++;
        else if(temp.data === 2) twoCount++;

        temp = temp.next;
    }

    // Now we have the actual occurance of each and every element.
    // re-init the temp to head.
    temp = head;
    // Now traverse again through whole linked list with updating the value.
    while(temp) {
        if(zeroCount !== 0) {
            temp.data = 0;
            zeroCount--;
        }
        else if(oneCount !== 0) {
            temp.data = 1;
            oneCount--;
        }
        else if(twoCount !== 0) {
            temp.data = 2;
            twoCount--;
        }

        temp = temp.next;
    }
    return head;
}