// In this algo we check that is the linked list has the loop/cycle present.

// It states that we have two pointer one is can be know as fast which traverse two node at a time and other one has slow.
// which traverse 1 node at a time.
// Then after some time if slow === fast it means that loop/cycle is present.
// If not then the loop is not present.

// This is know as Floyd's Cycle detect algo.

class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

const floyedDetectLoop = head => {
    if(!head) return false;
    let slowPointer = head;
    let fastPointer = head;

    while( slowPointer !== null && fastPointer !== null ){
        // fastPointer will traverse two node at a time.
        // firstly traverse one node (becuase it may be possibe that after one traversal the linked list gets finished.)
        fastPointer = fastPointer.next;
        if(fastPointer !== null) {
            fastPointer = fastPointer.next;
        }
        // slowPointer wil traverse only one node.
        slowPointer = slowPointer.next;
        // check that if slow pointer == fast pointer then the cycle is present.
        if(slowPointer === fastPointer) {
            console.log("cycle is present at node : ", slowPointer.data);
            return slowPointer;
        }
    }
    // after while loop means there is no cyecle present.
    return null;
}

// the node returned by the floyedDetectLoop function is the node which is present inside the cycle.
// Means it doesn't gurantees that the node is the starting of the loop/cycle.

// To get the starting node of the loop/cycle.
// we can use the following approach.

// This approach states that when ever there is the cycle in the linked list.
// then as the slowPointer === fastPointer (from the prev. appraoch) then ->
// step 1 - point the slowPointer to the head;
// step 2 - Now move the slowPointer and the fastPointer with the same pace i.e by 1.
// step 3 - they should be again becomes same and that point of intersection will be the startingNode.

const getStartingNodeOfTheLoop = head => {
    if(!head) return null;
    let pointOfInterSection = floyedDetectLoop(head);

    // step 1 point the slowPointer to head
    let slowPointer = head;
    
    // step 2 move both pointer by one node.
    while(slowPointer !== pointOfInterSection) {
        slowPointer = slowPointer.next;
        pointOfInterSection = pointOfInterSection.next;
    }

    // now both slowPointer and pointOfInterSection is pointing to the starting node of the cycle.
    return slowPointer;
}

// Now upto this point we detected the cycle and find out the starting node of the cycle.
// now if we want to remvoe the cycle from the linkedList then we can follow this approach.

// This is simple because what we need to do is the node whose next node is the starting ndoe of the cycle should not point to starting node. It should Point to the null.

// hence in this way the cycle will be removed.

const removeLoop = head => {
    const pointOfInterSection = floyedDetectLoop(head);
    if(!pointOfInterSection) {
        console.log("cycle is not present");
        return;
    }

    const StartingNodeOfTheLoop = getStartingNodeOfTheLoop(head);
    let tempNode = head;

    while(tempNode.next !== StartingNodeOfTheLoop) { // loop untill the next node of the temp point to the StartingNodeOfTheLoop
        tempNode = tempNode.next;
    }
    tempNode.next = null; // now change the linkage to the starting node of the cycle to null.
}