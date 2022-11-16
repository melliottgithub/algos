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

function bfs(root) {
  const queue = [];
  const result = [];

  if (!root) return null;

  queue.push(root);

  while (queue.length > 0) {
    const currNode = queue.shift();

    if (currNode.left) queue.push(currNode.left);
    if (currNode.right) queue.push(currNode.right);

    result.push(currNode.value);
  }
  return result;
}

console.log(bfs(root));