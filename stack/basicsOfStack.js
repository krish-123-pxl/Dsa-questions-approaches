// the stack is a type of data structure which follows the rule of - LIFO means the element which is entered in last will out first.
// Just like a stack of plates.

// The stack has basically 4 main utility functions.
// 1. push - used to insert in the stack (In js it can be done using array.push() method).
// 2. pop - used to remove the top most element. (In js it can be done using the array.pop() method).
// 3. Empty - used to determine whether the stack is empty or not.
// 4. peek - used to see the top most element without removing it from stack.

// Let's try to implement how the push method works.
const array = [];
const SIZE_OF_STACK = 10; // SIZE_OF_STACK contains the max number of value that can be inserted.
let TOP = -1;

const push = (array, value) => {
    // firstly check that is TOP is equals to the SIZE_OF_STACK - 1 (because the array start from 0.)
    if(TOP === SIZE_OF_STACK - 1) return console.log({error: "STACK_OVERFLOW", message: "can not insert!" });
    // now increment the TOP value and assign the value at that position.
    array[++TOP] = value;
}

// Noe let's try to implement the pop method of the stack.
const pop = array => {
    // first check that is a single element is present or not.
    // if the value of the TOP is -1 it means there is no any element present.
    if(TOP === -1) return console.log({error: "STACK_UNDERFLOW", message: "can not pop!" });
    // Now decrement the value of TOP by one.
    TOP--;
 }

 // Now let's try to implement isEmpty function.
 // It's so simple we need to just check that whether the TOP is at -1 or not.
 // If the TOP is at -1 it means the stack is empty other wise no empty.
 const isEmpty = TOP => TOP === -1 ? true : false;
 
 // Now let's try to implement the peek() method.
 // in this we need simply return the top value of stack.
 const peek = array => TOP === -1 ? console.log({error: "STACK_UNDERFLOW", message: "can not pop!" }) : array[TOP];