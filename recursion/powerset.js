/* 
Helper Method Recursion

1. State variables
2. Return state variables
3. Instantiate and invoke helper method
4. Base cases
5. Recursive cases

'' => ['']
'a' => ['','a']
'ab' => ['','a','b','ab']
'abc' => ['','a','b','ab', 'c', 'ac', 'bc', 'abc']
                         
Time: O(2^n)
Space: O(2^n) 2^n(length of the result array ) + n(length of the input)

Diagramming
------------------------------------------------------------------------------------------------------
  left don't add                                     right add
                            build(char),depth(index)                              index          char
                                      ['']                                           0           ''
                   ['']                                  ['a']                       1           a
          ['']            ['b']                 ['a']               ['ab']           2           b
      ['']    ['c']   ['b']    ['bc']      ['a']     ['ac']   ['ab']      ['abc']    3           c

Pseudocode
-----------------------------------------------------------------------------------------------------
initialize result array

find combinations as a function of the build and depth (chars, index)
 //base case
 if depth reaches the length of the input
  add leaf to the result array 
 //Recursive case
  //dont add char
   helperFuntion(build, depth +1)
  //add char
   helperFuntion(build + word[depth], depth +1)

call helper function  ('', 0)
return array
*/
//Code

const powerset = word => {
  const combinations = [];

  function findCombos(build, depth) {
    //base case
    if (depth === word.length - 1) {
      combinations.push(build);
      return;
    }
    //recursive cases
    //dont add char
    findCombos(build, depth + 1);
    //add char
    findCombosion(build + word[depth], depth + 1);
  }

  findCombos('', 0);// depth 0 is build ''

  return combinations;
}