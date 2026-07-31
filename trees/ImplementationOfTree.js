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

    // 1. Preorder Traversal (DFS)
    // In this traversal the traversal is something like Root -> Left -> Right
    // First visit the current node then go left and then right.

    PreOrderTraversal = node => {
        if(!node) return;

        console.log(node.data);
        // Traverse left subtree.
        if(node.left) this.PreOrderTraversal(node.left);

        // Now traverse right subtree.
        if(node.right) this.PreOrderTraversal(node.right);
    }
    
    // In-Order Traversal (DFS)
    // In this traversal the traversal is something like Left -> Root -> Right
    InOrderTraversal = node => {
        if(!node) return;

        // First go to the left part of the tree.
        if(node.left) this.InOrderTraversal(node.left);
        
        // now print the data.
        console.log(node.data);

        // Now go to right sub-tree.
        if(node.right) this.InOrderTraversal(node.right);
    }

    // Post-Order Traversal (DFS).
    // In this traversal the traversal is something like Left -> Right -> Root.
    PostOrderTraversal = node => {
        if(!node) return;

        // First go to left subtree.
        if(node.left) this.PostOrderTraversal(node.left);

        // Now go to right sub tree.
        if(!node.right) this.PostOrderTraversal(node.right);

        // Now print the node.
        console.log(node?.data);
    }

    // In level-By-Order Traversal.
    // We first cover all the nodes of that row.
    // then go to the next level from left part.

    levelByOrder = node => {
        if(!node) return;
        
        // create a queue array.
        let queue = [];
        // Push the root element.
        queue.push(node);
        
        // create a loop untill the queue is not empty.
        while(queue.length) {
            const current = queue.shift();
            console.log(current.data);
            
            // Now start from the left part again.
            if(current.left) queue.push(current.left);
            
            // Now push the right node.
            if(current.right) queue.push(current.right);
        }
    }

    // the height of the tree is defined as the maximum number of node present in depth. Either in left subtree or right subtree.
    heightOfTheTree = (node = this.root) => {
        // base case for empty tree.
        // return -1 because Math.max(-1, -1) return 0 and after it add 1 while final return statement. Else each time it will get 0 as max.
        if(!node) return -1;

        // Now call for the left part of the tree.
        const leftHeight = this.heightOfTheTree(node.left);

        // Now call for the right part of the tree.
        const rightHeight = this.heightOfTheTree(node.right);

        // Now return the maximum from these height.
        return Math.max(leftHeight, rightHeight) + 1;
    }
}

// Now to call and create the tree.
const Tree = new BSTTree();
const values = [50, 30, 70, 20, 40, 60, 80];

for(const value of values) {
    Tree.insert(value);
}


// Now let's understand how to traverse a Tree.
// There are mainly 2 types of tree traversal.
// 1. BFS - Breadth First Search.
// 2. DFS - Depth First Search

// DFS is sub divided into 3 main types.
// a. Pre-Order Traversal.
// b. In-Order Traversal.
// c. Post-Order Traversal.

console.log("printing pre order")
Tree.PreOrderTraversal(Tree.root);

console.log("printing In order")
Tree.InOrderTraversal(Tree.root);

console.log("printing post order");
Tree.PostOrderTraversal(Tree.root);

console.log("printing level by order");
Tree.levelByOrder(Tree.root);

