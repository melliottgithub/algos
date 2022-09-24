/* 
Challenge 1 : Number of Ones in a Sorted Bit Array
Given a sorted bit array (values of either 0 or 1), determine the number of 1’s in the array.

Perform this in O(log(N)) time complexity.

Input: [0,0,0,1,1,1,1,1,1,1,1]

Output: 8

Diagramming
----------------------------------------------------------------
 1 2 3 4 5 6 7 8 9 10 11
 [0,0,0,1,1,1,1,1,1,1,1]
            ^
if mid is 1 then take left
     3 
[0,0,0,1,1]
     ^
if mid is 0 take right     

[1,1]
 ^
grab index and subtract out from len

Psuedocode
--------------------------------------------------------------------------------

initialize lenOfOne
initialize left 
initialize right
initialize middle

loop while left < right 
 if mid is 1 then 
  right = mid - 1
 else left = mid+1

return len - mid

 */

//Code
function SortedBitArray(arr) {
  let [left, right, index] = [0, arr.length - 1, Infinity];

  //console.log(left, right);

  while (left <= right) {
    if (left === right && arr[left] === 0) return 0;

    let mid = Math.floor(left + (right - left) / 2);

    if (arr[mid] === 1) {
      if (arr[mid - 1] === 0) return arr.length - mid;
      right = mid - 1;
      index = mid;
    } else {
      if (arr[mid + 1] === 1) return arr.length - mid - 1;
      left = mid + 1
    };
  }
  return arr.length - index;
}

let arr = [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1];
let arr1 = [0, 0, 1, 1];
console.log(SortedBitArray(arr));
console.log(SortedBitArray(arr1));