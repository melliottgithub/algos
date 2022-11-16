/*
 * Complete the 'find_all_paths' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts following parameters:
 *  1. Vertex origin
 *  2. String destination
 */

/*
 * For your reference:
 *
 * Vertex {
 *   char id;
 *   edges[Vertex];
 * }
 *            C
            /   \
    A --- B       E  --- F --- D
            \   /   \   /
              H       G
              
["ABCEFD", "ABCEGFD", "ABHEFD", "ABHEGFD"]
 */

function find_all_paths(origin, destination) {
  const visited = new Set();
  const result = [];

  const traverse = (currVertex, path) => {//arrow function
    if (visited.has(currVertex)) return;
    if (currVertex.id === destination) {
      result.push(path.join(''));
      return;
    }
    
    const edges = currVertex.edges;

    //before traveling outwards
    visited.add(currVertex);

    for(let edge of edges) {
      path.push(edge.id);
      traverse(edge, path);
      path.pop();
    }
    visited.delete(currVertex);
  }

  traverse(origin, [origin.id]);

  result.sort();
  return result;
}