// In this question we are given two different sorted linked lists and we have to merge them in sorted order.

// firstly we check that who's first element is smaller it may be either of first LL or the second LL.

const mergeLL = (firstLL, secondLL) => {
    if(!firstLL) return secondLL;
    if(!secondLL) return firstLL;

    if(firstLL.data <= secondLL.data) return merge(firstLL, secondLL);
    else return merge(secondLL, firstLL);
}

const merge = (firstLL, secondLL) => {
    // firstly check that if the firstLL has exactly of one element.
    if(firstLL.next === null) {
        // in this case simply add the entire secondLL in next pointer of the firstLL.next
        firstLL.next = secondLL;
        return firstLL;
    }
    let currentOfLLOne = firstLL;
    let nextOfLLOne = firstLL.next;
    let currentOfLLTwo = secondLL;
    let nextOfLLTwo = secondLL.next;

    while(nextOfLLOne && currentOfLLTwo) {
        // Now check that is the value of secondLL can be inserted in between the first two elements.
        if(
            (currentOfLLTwo.data >= currentOfLLOne.data) && 
            (currentOfLLTwo.data <= nextOfLLOne.data)
        ) {
            // Now if it can be inserted then insert in between the currentOfLLOne and nextOfLLOne.
            currentOfLLOne.next = currentOfLLTwo;
            currentOfLLTwo.next = nextOfLLOne;
            // update the pointers
            currentOfLLOne = currentOfLLTwo;
            nextOfLLOne = currentOfLLOne.next;
            currentOfLLTwo = nextOfLLTwo;
            nextOfLLTwo = currentOfLLTwo ? currentOfLLTwo.next : null;
        }
        else {
            // if the currentOfLLTwo.data can'be inserted in between them.
            // then simply update the pointers of firstLL.
            currentOfLLOne = nextOfLLOne;
            nextOfLLOne = nextOfLLOne.next;

            // and now also check that if the nextOfLLOne data is null then simply add the secondLL in the next of firstLL.
            if(!nextOfLLOne) {
                currentOfLLOne.next = currentOfLLTwo;
                return firstLL;
            }
        }
    }
    return firstLL;

}