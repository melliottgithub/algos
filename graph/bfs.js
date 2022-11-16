/*  
Bread first search traversal
*/
// class Graph {
//   constructor(value) {
//     this.id = value;
//     this.edges = [];
//   }
// }

// const graph = new Graph("A");

// graph.edges.push(new Graph("B"));
// //graph.edges[0].edges.push(new Graph("A"));
// graph.edges[0].edges.push(new Graph("C"));
// graph.edges[0].edges.push(new Graph("H"));

// graph.edges[0].edges[0].edges.push(new Graph("E"));
// graph.edges[0].edges[1].edges.push(new Graph("E"));
// console.log(graph);

function bfs(origin) {
  if(origin === null) return '';

  const queue = []; 
  const visited = new Set(); 

  let sb = ''; 

  queue.push(origin);
  visited.add(origin);

  while (queue.length > 0) { 
    const currVertex = queue.shift(); 
    let edges = currVertex.edges; 

    for (let i = 0; i < edges.length; i++) {
      let edge = edges[i]; 
      if (!visited.has(edge)) { 
        queue.push(edge); 
        visited.add(edge); 
      }
    }
    sb += currVertex.id; 
  }
  return sb;
}
