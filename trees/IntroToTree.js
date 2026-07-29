// A tree in data structure is a non-linear data structure which follows a hierarchy like structure looking alike tree.
// Example -
//          50
//        /    \
//      30      70
//     /  \    /  \
//   20   40 60   80

// Now there are some terminologies which we need clear before jumping to any implementation.


// NODE - Each individual element is a NODE. Ex - 50, 20, 40 etc.
// Parent Node - The Node which have further nodes connected. Ex - 50, 30 and 70.
// Children Node - Every Node whose parent are available. Ex - 30, 20, 60 etc. 50 is note a Children because there is no any parent present.

// Leaf Node - The last nodes where no any further chindrens are present. Ex - 20, 40, 60 and 80.

// Siblings - The nodes whose parent are same. Ex - 20 and 40 are siblings to each other.
// Edge - the connection between parent to children is edge.
// Depth - Distance from root node to last node.
// Note - root node is present at Depth = 0.
// Height - Logest path from parent to children.

// ------------------------Types of Trees---------------------
// 1. General tree - The tree in which there is any numbers of childrens are allowed.
//        A
//      / | \
//     B  C  D
//       / \
//      E   F

// 2. Binary Tree - In which the tree can have maximum of 2 childrens.
    //     A
    //   / | \
    //  B  C  D
    //    / \
    //   E   F

// 3. Full Binary Tree - In which the tree either have only 0 or 2 childrens.
//        A
//       / \
//      B   C
//     / \
//    D   E

// 4. Perfect Binary Tree - Every level is completely filled.
//         A
//       /   \
//      B     C
//     / \   / \
//    D  E  F  G

// ---------------------The Most Important Tree-------------------
// Binary search Tree - In which Left < Root < Right
//           50
//         /    \
//       30      70
//      /  \    /  \
//    20   40 60   80


