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
-------------------------------------------------------------------------------------
                      column
                      0 1 2
                  0  [x,x,x] ^
             row  1  [x,x,x] |
                  2  [x,x,x] |
                     < ----(2,2) start here direction left or up

                                 row,col
                                  (2,2)
              left    /                          \ up
                    2,1                          1,2
        <  /                 \ ^
         2,0                 1,1 
  < /            \ ^
  2,-1           1,0
             </      \ ^ 
            1,-1     0,0  return 1

  Pseudocode
  ---------------------------------------------------------------------------------------
  //base cases
  if n and m is 0 return 1
  if n or m are less than 0 return 0

  // left
    recurse n, m - 1
    //up
    recurse n-1, m 

  return left + up
*/

//Code 
function latticePaths(row, col) {
  if (row < 0 || col < 0) return 0;
  if (row === 0 && row === 0) return 1;
  
  // left paths
  const left = latticePaths(row, col - 1);
  // up paths
  const up = latticePaths(row - 1, col);
  
  return left + up;
}