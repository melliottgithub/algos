/* 
  [4, 15, 16, 50, 8, 23, 42, 108]                0   1   2   3  4   5   6   7 
                                                [4, 15, 16, 50, 8, 23, 42, 108]
                                                                            ^
                                                [4, 15, 16, 50, 8, 23, 42, 108]
                                                                        ^
                                                [4, 15, 16, 50, 8, 23, 42, 108]
                                                                    ^
                                                [4, 15, 16, 50, 8, 23, 42, 108]
                                                                ^
                                                [4, 15, 16, 108, 8, 23, 42, 50]
                                                            ^
                                                [4, 15, 42, 108, 8, 23, 16, 50]
                                                        ^
                                                [4, 108, 42, 50, 8, 23, 16, 15]
                                                    ^
                                                [108, 50, 42, 15, 8, 23, 16, 4]
                                                 ^
                                                                                              
                                                
  1. Heapify
  parent(n)     children(n)
     0             1,2
     1             3,4
     2             5,6
     3             7,8
       2n+1, 2n+2




  2.Sortify




  Pseudocode
  -iterate back though arr
    -call bubbledown at each index
*/
const getChildIndex = (arr, parentIndex, boundary) => {
  let childIndex1 = 2 * parentIndex + 1
  let childIndex2 = 2 * parentIndex + 2

  if (childIndex1 >= boundary) {
    return childIndex1
  } else if (childIndex2 >= boundary) {
    return childIndex1
  } else if (arr[childIndex1] > arr[childIndex2]) {
    return childIndex1
  } else return childIndex2

}

const swap = (arr, i1, i2) => { [arr[i1], arr[i2]] = [arr[i2], arr[i1]] }

const bubbleDown = (arr, parentIndex, boundary) => {
  let childIndex = getChildIndex(arr, parentIndex, boundary)

  while (childIndex < boundary && arr[childIndex] > arr[parentIndex]) {
    swap(arr, parentIndex, childIndex)
    parentIndex = childIndex
    childIndex = getChildIndex(arr, parentIndex, boundary)
  }
}

function heapSort(arr) {
  for (let i = arr.length - 1; i > -1; i--) {
    bubbleDown(arr, i, arr.length)
  }
  for (let wall = arr.length - 1; wall > -1; wall--) {
    swap(arr, 0, wall)
    bubbleDown(arr, 0, wall)
  }
  return arr
}

console.log(heapSort([4, 15, 16, 50, 8, 23, 42, 108]))