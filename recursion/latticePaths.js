/* 

use pure recursion
Starting in the top left corner of a 2×2 grid, 
and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.


How many such routes are there through a 20×20 grid? or nxm?

Understanding
---------------------------------------------------------------------------------------

input: m:integer - rows of squares
input: n:integer - column of squares
output: number of unique paths 

Time: O(2^(n+m))
Space: O(2^(n+m))



https://regis365-my.sharepoint.com/:o:/g/personal/melliott004_regis_edu/Eou6iPw_uLFFrE_VKDFeNIAB2SnuBv98yEL7m0IMrNf5cg?e=1rdFN2

Diagramming
---------------------------------------------------------------------------------------


*/

//Code 

function latticePaths(row, col) {
  if (row < 0 || col < 0) return 0;
  if (row === 0 && row === 0) return 1;

  const left = latticePaths(row, col - 1);
  const up = latticePaths(row - 1, col);

  return left + up;
}

console.log(latticePaths(20, 20));