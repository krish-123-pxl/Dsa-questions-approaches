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

