// here in this question we are given by a stack and we need to sort the stack.
// Ex - [3,1,-3,5] -> output - [-3, 1, 3, 5];

// The appraoch we are following to sort the stack is.
// Remove the top element and store it in the variable untill the stack is empty.
// As the stack becomes empty push the element back in the stack but in the sorted way.
const myStack = [3, 1, -3, 5, -7];

const sortStack = myStack => {
    // base case
    if(!myStack.length) return;

    // store the top element.
    let topEle = myStack?.pop();

    // make the recursive call.
    sortStack(myStack);

    // Now call the sortAndInsert.
    sortAndInsert(myStack, topEle);
    return myStack;
}

const sortAndInsert = (myStack, topEle) => {
    // if there is no element present the directly push the element.
    if(!myStack.length || myStack[myStack.length - 1] <= topEle) return myStack.push(topEle);

    // Now pop from the stack in recursive call untill there is any element found which is smaller then the topEle.

    let ele = myStack.pop();
    sortAndInsert(myStack, topEle);

    // And then push the ele back in the stack again.
    myStack.push(ele);
}