// In this question we have two trees and we need to check and confirm whether the both trees are identical or not.

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BSTTree {
    constructor(){
        this.root = null;
    }

    // first write the function for inserting the element in tree.
    insert = value => {
        const newNode = new Node(value);

        // if there is no element in the tree then assign the root to that new Node.
        if(!this.root) {
            this.root = newNode;
            return;
        }

        let currentNode = this.root;
        // Now compare the values.
        // if value is lesser than the current element then go to left subtree.
        if(newNode.data < currentNode.data) {
            if(!currentNode.left) {
                currentNode.left = newNode;
                return;
            }

            currentNode = currentNode.left;
        }
        else {
            // else go to right subtree.
            if(!currentNode.right) {
                currentNode.right = newNode;
                return;
            }

            currentNode = currentNode.right;
        }
    }

    isIdentical = (current1, current2) => {
        // Base case.
        // If in both of the trees there is no element present then return true
        if(!current1 && !current2) return true;

        // if one of any root is null but another one is not null then return false.
        if(!current1 || !current2) return false;

        // if the values of both is not same at any time then return false.
        if(current1.data !== current2.data) return false;

        // now all the conditions have run and it means the valus of both tree at the current point is identical now make a recursive call simltaneously for both trees.
        return (
            this.isIdentical(current1.left, current2.left) && this.isIdentical(current1.right, current2.right)
        )
    }
}

// create two trees with same values.
const Tree1 = new BSTTree();
const Tree2 = new BSTTree();

const values = [50, 30, 70, 20, 40, 60, 80];

for (const value of values) {
    Tree1.insert(value);
    Tree2.insert(value);
}

// Now we need to compare the identicality of these two trees.
const root1 = Tree1.root;
const root2 = Tree2.root;

// Now make the call for isIdentical check.
console.log("checking is the Tree1 and Tree2 are identical or not");
const resutOfIsIdentical = Tree1.isIdentical(root1, root2);
console.log("resutOfIsIdentical ---> ", resutOfIsIdentical)