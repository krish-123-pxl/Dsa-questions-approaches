// Now In this we gonna create tree.

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

// By using this approach either we can follow this below approach.
const root = new Node("A");
const b = new Node("B");
const c = new Node("C");
const d = new Node("D");
const e = new Node("E");
const f = new Node("F");
const g = new Node("G");

// Till now we've created nodes of the trees. 
// Now we just need to provide the linking between them. Means we need bind left and right subtrees.

root.left = b;
root.right = c;

b.left = d;
b.right = e;

c.left = f;
c.right = g;

// Tree is something like
//         A
//       /   \
//      B     C
//     / \   / \
//    D   E F   G

// Now in above example we have created a static tree.
class BSTTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);

        // if there is no any root element is present then assign the newNode to root and return back.
        if(!this.root) {
            this.root = newNode;
            return;
        }

        let current = this.root;
        while(true) {
            // If the value is smaller than the current value then it will go to the left subtree.
            if(value < current.data) {
                //  If there is no any left value then insert at there and return back.
                if(!current.left) {
                    current.left = newNode;
                    return;
                }
                // else update the current pointer to the left subtree.
                current = current.left;
            }
            else {
                // check in the right subtree.
                //  If there is no any right value then insert at there and return back.
                if(!current.right) {
                    current.right = newNode;
                    return;
                }
                // else update the current pointer to the left subtree.
                current = current.right;
            }
        }

    }
}

// Now to call and create the tree.
const Tree = new BSTTree();
const values = [50, 30, 70, 20, 40, 60, 80];

for(const value of values) {
    Tree.insert(value);
}

console.log("--------tree-------")
console.log(JSON.stringify(Tree));


