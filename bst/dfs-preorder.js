class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const root = new BST(4);
root.left = new BST(2);
root.left.left = new BST(1);
root.left.right = new BST(3);
root.right = new BST(5);
root.right.right = new BST(7);
root.right.right.left = new BST(6);
root.right.right.right = new BST(8);
//console.log(root);

function dfsPreOrder(tree) {
  const result = []

  function traverse(curr) {
    if (!curr) return;

    // preorder === alr
    //action
    result.push(curr.value);
    //left
    traverse(curr.left);
    //right
    traverse(curr.right);
  }
  traverse(tree);
  return result;
}

console.log(dfsPreOrder(root));