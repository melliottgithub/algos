/* 
[1,2,4], 5                                      5
                                           4    2       1
                                       3 2 0  1 0 -2  
                                                


[1,2,4], 5                                             [1,2,4], 5
                                    [1,2,4], 4                              [2,4], 5
                        [1,2,4], 3           [1,4], 4          [2,4], 4           [,4], 5

                                                         coins  total
[1,2,4], 5                                             [1,2,4], 5
                                    [1,2,4], 1                              [1,2], 5
                        [1,2,4], -3           [1,2], 1          [1,2], 3             [1], 5
                  [1,2,4], -3         [1,2], -1       [1],1          [1,2], 3             [1], 5
                                                [1],0      [],1                                         
                                          [1],-1     [],0                                         

                                          where can i get 1,1,1,1,1 
                                                  [1], 5
                                            [1], 4
                                      [1], 3
                                [1], 2
                         [1], 1
*/
/* 
instantiate state variables
return state variables
instantiate helper function
base case
recursive case
*/
// time: O (2^(m+n)) space: O (m+n)
function coinSumRec(coinsInput, totalInput) {
  function findWays(coins, total) {
    //base case
    if (total < 0) return 0;
    if (coins.length === 0) return total > 0 ? 0 : 1;


    //recursive case
    //left
    let left = findWays(coins, total - coins[coins.length - 1]);
    //right
    let popped = coins.pop();
    let right = findWays(coins, total);
    coins.push(popped);

    return left + right;
  }

  return findWays(coinsInput, totalInput);
}
/* 
Create cache
check cache
write cache
*/
// time: O (m+n) space: O (m*n)
function coinSumMemo(coinsInput, totalInput) {
  const cache = {};
  function findWays(coins, total) {
    let key = total + '_' + coins;
    if (key in cache) return cache[key];
    //base case
    if (total < 0) return 0;
    if (coins.length === 0) return total > 0 ? 0 : 1;


    //recursive case
    //left
    let left = findWays(coins, total - coins[coins.length - 1]);
    //right
    let popped = coins.pop();
    let right = findWays(coins, total);
    coins.push(popped);
    cache[key] = left + right;
    return left + right;
  }

  return findWays(coinsInput, totalInput);
}

/* 
1.identify factors                                               
2. create table w/incrementally increasing factors                    total and coins       
  - whats the smallest version                                                    
  - whats the eventual version                                                   
3. determine formula                                                            
4. create foundation create first row                                             
5. fill out rest of table                   

                                                         coins  total
[1,2,4], 5                                             [1,2,4], 5
                                    [1,2,4], 1                                          [1,2], 5
                        [1,2,4], -3           [1,2], 1                     [1,2], 3                  [1], 5
                  [1,2,4], -3         [1,2], -1       [1],1        [1,2], 1         [1],3       [1], 5
                                                [1],0      [],1                [1],2     [],3                
                                          [1],-1     [],0                                         

                                          where can i get 1,1,1,1,1 
                                                  [1], 5
                                            [1], 4
                                      [1], 3
                                [1], 2
                         [1], 1
      
             total                                                                          1 up 
                                                                              2 left----------x
            -3  -2  -1     0  1  2  3  4  5         
 coins      -------------------------------------------------------
      []     0   0   0  |  1  0  0  0  0  0    
     [1]     0   0   0  |  1  1  1  1  1  1              
   [1,2]     0   0   0  |  1  1  2  2  3  3                 
 [1,2,4]     0   0   0  |  1  1  2  2  4  4                 
                        |
                        |
                        |



*/
// time: O(m*n) Space: O(m*n) if matrix ---- O(m) if array
function coinSumTabulation(coinsInput, totalInput) {
  const table = new Array(totalInput + 1).fill(0);
  table[0] = 1;

  for (let coin of coinsInput) {
    for (let i = coin; i < table.length; i++) {
      table[i] = table[i] + table[i - coin];
    }
  }
  return table[totalInput];
}

console.log(coinSumTabulation([1, 2, 4], 5));
console.log(coinSumMemo([1, 2, 4], 5));
console.log(coinSumRec([1, 2, 4], 5));