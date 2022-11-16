
// This is the class of the input binary tree.

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
const tree = new BinaryTree(1)
tree.left = new BinaryTree(2)
tree.right = new BinaryTree(3)
// tree.left.left = new BinaryTree(4)
// tree.left.right = new BinaryTree(5)
// tree.right.left = new BinaryTree(6)
// tree.right.right = new BinaryTree(7)
/*
                                                              depth
                                             1                0
                                          2     3             1
                                        4   5  6  7           2
                                  -----------------------
                                      2     2   2  2  = 8
       
      //right
      if(this.right)
      
      //left
      if(this.left)
*/
console.log(nodeDepths(tree));

function nodeDepths(root) {
  // Write your code here.
  let sum = 0
  return traverseTree(0, root, sum)

}

function traverseTree(depth, node, sum) {
  if (!node) return 0

  const newSum = sum + depth

  //left
  traverseTree(depth + 1, node.left, newSum)
  //right
  traverseTree(depth + 1, node.right, newSum)
  return newSum 
}