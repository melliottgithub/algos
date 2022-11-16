/* 
Smallest window containing those characters

Example 1:

Input: "ADOBECODEBANC", "ABC"
Output: "BANC"

Explanation:
Though there are many substrings containing all the characters "BANC" is the shortest.

Example 2:

Input: "HELLO WORLD", "FOO"
Output: ""

Explanation:
The target characters are not contained within the original string, so the output is empty.
                                                                                  time: 2^n recursion         space 2^n*n
                                                       (0,12)                      time: n^2 memoization      space       n^3
                                                    ADOBECODEBANC
                                (1,12)                                         0,11 
                            DOBECODEBANC                                   ADOBECODEBAN
                (2,12)                         1,11               1,11                       0,10 
             OBECODEBANC                  DOBECODEBAN       DOBECODEBAN                 ADOBECODEBA


                                          // Quadratic solution
                                                              i
                                                                      j
                                            0 1 2 3 4 5 6 7 8 9 10 11 12         time: O(n^2)     space: O(n)    range[9,12]
                                            A D O B E C O D E B A  N  C
                                            ---------->
                                              ------------------>
                                                ---------------->
                                                  -------------->
                                                    ------------>
                                                      ---------->
                                                        -------------->
                                                          ------------>
                                                            ---------->
                                                              -------->
                                         

              //2 pointer solution
              0 1 2 3 4 5 6 7 8 9 10 11 12                                        n times
              A D O B E C O D E B A  N  C               Target ABC  ==> counts={A:0 B:0 C:0 } //space: O(n)  range[0,5]
              - - - - - - - - - - -  -  -               missingChars= target.length ==> 0
                                L
                                         R
  
  //Hunting phase (r) --- seek to fulfill conditions        
  -while R is less than input length => r<13
   -if missingChars > 0    xxxxx<<=counts are not all 0 => key != 0
    -> if Rchar in counts
    -< if Rchar in count >= 0
      -> decrement missingChars
    ->decrement counts[Rchar]

    //catchup phase (l) --- minimize on window
    -while missingChars === 0 -------- count[Lchar] not in 
     -> if currRange is < result.range
      -> update result
          if Lchar in counts
            increment counts[Lchar]
            if counts[Lchar] > 
            increment missingChars
          left++
  -r++
                                         
   
 
*/

function minimumWindowSubstring(fullString, chars) {
  let [left, right, missingChars, counts, result] = [0, 0, chars.length, {}, [0, Infinity]];

  for (let char = 0; char < chars.length; char++) {
    (char in counts) ? counts[chars[char]]++ : counts[chars[char]] = 1;
  }

  while (right < fullString.length) {
    if (missingChars > 0) {
      //hunting phase
      let rChar = fullString[right];
      if (rChar in counts) {
        if (counts[rChar] > 0) {
          missingChars--;
        }
      }
      counts[rChar]--;
    }

    //catchup phase
    while (missingChars === 0) {
      if ((right - left) < (result[1] - result[0])) {
        result = [left, right];
      }
      let lChar = fullString[left];
      if (lChar in counts) {
        counts[lChar]++;
        if (counts[lChar] > 0) {
          missingChars++;
        }
      }
      left++;
    }
    right++;
  }


  return (result[1] === Infinity) ? '' : fullString.slice(result[0], result[1] + 1);
}