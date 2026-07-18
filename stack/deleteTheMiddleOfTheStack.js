// In this question we need to remove the element which is present in the middle of the stack.
// Ex - stack - [1,3,2,6,29, 30];
// Let's we want to remvoe the 6 element from the stack which is in middle.
// The appraoch we are following is pop and store the element untill we don't reach to that element that we want to remvoe.
// Then pop the element and then push back the element again.
// In this question we using the standard built in method ie. push, pop, length.


const myStack = [1, 3, 2, 6, 29, 30];
const elementToRemove = 6;

const removeElement = (myStack, elementToRemove) => {
    // return back if there is no element.
    if(!myStack.length) return console.log({error: "STACK_UNDERFLOW", message: "can not pop!" });
    
    // Now pop the top value and store it in variable.
    let num = myStack.pop();

    // Now remove the further element if the element that we want to remove don't reach.
    if(num === elementToRemove) return;

    // Now make a recursive call with the updated stack.
    removeElement(myStack, elementToRemove);

    myStack.push(num);
    return myStack;
}