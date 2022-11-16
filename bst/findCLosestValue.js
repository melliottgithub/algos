class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  
}

const root = new BST(10);
root.left = new BST(5);
root.left.left = new BST(2);
root.left.left.left = new BST(1);
root.left.right = new BST(5);
root.right = new BST(15);
root.right.left = new BST(13);
root.right.left.right = new BST(14);
root.right.right = new BST(22);
//console.log(root);
/* 

                                  10
                            /            \
                           5              15
                        2     5      13      22
                      1               14

 */
function findClosestValueInBst(tree, target) {
  let closest = Infinity;
  let absDiff = 0;
  function traverse(currNode) {
    if (!currNode) return;
    //action
    absDiff = Math.abs(currNode.value - target);
    if (Math.abs(closest - target) > absDiff) {
      closest = currNode.value;
    }
    //left
    if (target < currNode.value) return traverse(currNode.left);
    //right
    else if (target > currNode.value) return traverse(currNode.right);
    else return closest
  }
  traverse(tree);
  return closest;
}

console.log(findClosestValueInBst(root, 12));

function findClosestValueInBstIter(tree, target) {
  let closest = Infinity;
  let absDiff = 0;
  let currNode = tree;
  while (currNode) {
    //action
    absDiff = Math.abs(currNode.value - target);
    if (Math.abs(closest - target) > absDiff) {
      closest = currNode.value;
    }
    //left
    if (target < currNode.value) currNode = currNode.left;
    //right
    else if (target > currNode.value) currNode = currNode.right;
    else break;
  }

  return closest;
}
console.log(findClosestValueInBstIter(root, 12));
