/* 
Merge 2 arrays
given two arrays, merge them to form a single, sorted array with all item
in non-decreasing order.

Understanding
----------------------------------------------------------------

Time: 
Space: 

I/O
a= [1,2,3]
b= [2,5,5]
c= [1,2,2,3,5,5]

Constraints
1<n<5x10^5
0 <= a[i],b[i] <= 10^9 i==> from 0 to n

Edge Cases
???

Diagramming
----------------------------------------------------------------------------------------
         i             j
 a= [1,2,3]    b= [2,5,5]
               k
 c= [1,2,3,2,5,5] --> sort ===> [1,2,2,3,5,5]

 better approach
          i      
 a= [1,2,3]    
       j
 b= [2,5,5]
                k
 result= [1,2,2,3,5,5] --> sort ===> [1,2,2,3,5,5]
 
 Pseudocode
 ----------------------------------------------------------------------------------------
 initialize firstArrPointer
 initialize secondArrPointer
 initialize combinedArr
 
 loop through arrays while firstArrPointer bigger than len(A1) or while i or j exists
  if value at firstArrPointer is less than the value of secondArrPointer
   add value of firstArrPointer to combinedArr
   firstArrPointer move right by 1
  else 
   add value of secondArrPointer to combinedArr


 loop through the rest of A1
 loop through the rest of A2
 return combinedArr
*/

//Code
function mergeArrays(a, b) {
  let [firstArrPointer, secondArrPointer, combinedArr] = [0, 0, []];

  while (firstArrPointer < a.length && secondArrPointer < b.length) {
    if (a[firstArrPointer] <= b[secondArrPointer]) {
      combinedArr.push(a[firstArrPointer]);
      firstArrPointer++;
    } else {
      combinedArr.push(b[secondArrPointer]);
      secondArrPointer++
    }
  }
  while (a[firstArrPointer]) {
    combinedArr.push(a[firstArrPointer++]);
  }
  while (b[secondArrPointer]) {
    combinedArr.push(b[secondArrPointer++]);
  }
  return combinedArr;
}


let a = [1, 5, 7, 7]
let b = [0, 1, 2, 3]
console.log(mergeArrays(a, b));