/* 
Maximize # of 0s

Input :  arr[] = {0, 1, 0, 0, 1, 1, 0}
Output : 6
We can get 6 zeros by flipping the subarray {4, 5}

Input :  arr[] = {0, 0, 0, 1, 0, 1}
Output : 5

                                      

                                         
                                        1  0  0  1  1  0  1  1  0
                                        0, 1, 1  0  0  1  0  0  1    target =>>max(3) --- count = 2    range = []
                                        -  -  -  -  -  -  -  -  -
                                                 L                           if 0 count--
                                                                R                           if 1 count++
                                                                    
                                         0, 1, 0, 0, (1, 1), 0               time: O(n^2) space: O(n)
                                         0, 1, 0, 0, 0, 0, 0 ====> 6

                                         1  0  1  1  0  0  1    
                                         0, 1, 0, 0, 1, 1, 0    target =>>max(2) --- currCount =1   range=[4,5] count0 =4 count1 =3
                                         -  -  -  -  -  -  -       
                                                     L
                                                           R       
                                        

                                         time:
                                         space:
                                        
                                        for R < input.length
                                        //Hunting phase;
                                          flip  0 to 1 or 1 to 0
                                            if  0 count++ else count--
                                          if count is greater than maxCount
                                            maxCount = count
                                            
                                          //catch up phase
                                            if count < 0
                                            count = 0
                                            
                                            l = R
                                        R++ 
leetcode 209
*/

function maximize(arr) {
  let [maxSum, currSum] = [0, 0];
  for (let i = 0; i < arr.length; i++) {
    arr[i] = (arr[i] === 1) ? 0 :1;
    currSum += arr[i];
    // if (currSum > maxSum) {
    //   maxSum = currSum;
    // } 
    maxSum = Math.max(maxSum, currSum);
    // if (currSum < 0) {
    //   currSum = 0;
    // }
    currSum = Math.max(currSum, 0);
    console.log(currSum, maxSum);
  }
  return maxSum;
}
console.log(maximize([0, 1, 0, 0, 1, 1, 0]));