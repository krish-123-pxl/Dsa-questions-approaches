// In this question we need to insert an element at bottom.
// Means we know that when we insert an element then it goes on the top but in this question we need to insert at bottom.

// The appraoch is simple that we firstly remove the all element untill the stack become empty then as it become then we insert the element.

const myStack = [1, 3, 2, 6, 29, 30];
const elementToInsert = 6;

const insertAtBottom = (myStack, elementToInsert) => {
    // if as the stack is empty then directly insert the element.
    if(!myStack.length) return myStack.push(elementToInsert);

    // if there is element already present then pop the element and store it in a variable.
    let num = myStack.pop();

    // Now make the recursive call.
    insertAtBottom(myStack, elementToInsert);

    // Now add the remaining value back to myStack array.
    myStack.push(num);
    return myStack;
}