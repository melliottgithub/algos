// This is the class of the input root.
// Do not edit it.
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
tree.left.left = new BinaryTree(4)
tree.left.right = new BinaryTree(5)
tree.right.left = new BinaryTree(6)
tree.right.right = new BinaryTree(7)

function branchSums(root) {
  // Write your code here.
  const sumBranches = []
  traverseBranches(sumBranches, 0, root)
  return sumBranches
}

function traverseBranches(sumBranches, sum, node){
  if(!node) return

  //condition
  const newSum = sum + node.value

  if(!node.left && !node.right) {
    sumBranches.push(newSum)
    
    return
  }
  //left branch
  traverseBranches(sumBranches,newSum,node.left)
  //right branch
  traverseBranches(sumBranches,newSum,node.right)
}
console.log(branchSums(tree))
/*

                                             1
                                          2     3
                                        4   5  6  7
                                  -----------------------
                               +      7    8  10   11
       
      //right
      if(this.right)
      
      //left
      if(this.left)
*/