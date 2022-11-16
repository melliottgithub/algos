function robotPaths(matrix) {
  // Write your code here
  let result = 0;

  const traverse = (row, col) => {
    if (row < 0 || col < 0 || row >= matrix.length || col >= matrix[0].length) {
      //out of bound;
      return;
    }
    if (matrix[row][col] === 1) {
      //already visited
      return;
    }
    if (row === matrix.length - 1 && col === matrix[0].length - 1) {
      // reach destination case
      result++;
      return;
    }

    matrix[row][col] = 1;

    traverse(row - 1, col)
    traverse(row + 1, col)
    traverse(row, col - 1)
    traverse(row, col + 1)

    matrix[row][col] = 0;


  }
  traverse(0, 0);

  return result;
}

function robotPaths(matrix) {
  // Write your code here
  let result = 0;
  let visited = new Set();
  
  const traverse = (row, col) => {
      let key = row + '_' + col
      
      if (row < 0 || col < 0 || row >= matrix.length || col >= matrix[0].length) {
          //out of bound;
          return;
      }
      if(visited.has(key)){
          //already visited
          return;
      }
      if(row === matrix.length - 1 && col === matrix[0].length - 1){
          // reach destination case
          result++;
          return;
      }
      
      visited.add(key);
          
      traverse(row-1, col)
      traverse(row+1, col)
      traverse(row, col-1)
      traverse(row, col+1)
      
      visited.delete(key);
  }
  traverse(0, 0);

  return result;
}