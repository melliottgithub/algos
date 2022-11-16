/* 
check if given graph is tree or not
             2
          /    \
     0---1      4     
          \    /
             3 

             What is a tree =>  no cycles - no regions more than 1 region 
*/


const validTree = (n, edges) => {
  const adjacentList = method

  const visited = {};
  const parent = {};
  let regions = 0;

  for (let vertex = 0; vertex < adjacentList.length; vertex++) {
    if (!visited[vertex]) {
      regions++;
      if (regions > 1) return false;
      if (bfs) { }
    }
  }
  return true;
};

function bfs(vertex, edges, visited, parent) {
  if(origin === null) return '';

  const queue = [node];

  while (queue.length){
    let currVertex = queue.shift();
    visited[currVertex] = true;

    for (let i = 0; i < edges[currVertex].length; i++) {
      if(!edges[i]){
        visited[i] = true;
        parent[i] = currVertex;
        queue.push(i);
      } else {
        if(i !== parent[currVertex]) return true;
      }
    }

  }
  return false;
}