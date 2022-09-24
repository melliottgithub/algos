/* 
Understanding
----------------------------------------------------------------
Example 2: Greatest Common Divisor (GCD)
Given two integers, find the greatest common divisor (GCD).

Input: 52, 78

Output: 26

In mathematics, the GCD of two integers is the largest positive integer that is a factor of both integers. In the case both 52 and 78 are divisible by 26. Which also 
happens to be the largest common factor as well.

Diagramming
----------------------------------------------------------------

Euclid's algorithm:
|78 - 52| = 26
then GCD is a factor of 26

|52 -26| = 26

GCD is a factor of 26

=26

Pseudocode
----------------------------------------------------------------

check inputs and
convert inputs to positive integers

use larger input first or swap them
initialized larger input
initialized smaller input

loop through while larger more than smaller
 temp = smaller
 swap diffence between larger and smaller into smaller
 larger = temp  

return larger
*/
//Code

function GCDsub(n, m) {
  n = Math.abs(n);
  m = Math.abs(m);
  let [higher, lower] = [Infinity, -Infinity];

  function checkIfHigher(a, b) {
    if (a < b) {
      [a, b] = [b, a];
      higher = a;
      lower = b;
    }
  }
  checkIfHigher(n, m);
  while (higher > lower) {
    [higher, lower] = [lower, higher - lower];
    checkIfHigher(higher, lower);
  }

  return higher;
}

function GCD(n, m) {
  let [higher, lower] = [Math.abs(n), Math.abs(m)];

  while (higher > lower) {
    [higher, lower] = [lower, higher % lower];
  }

  return higher;
}

console.log(GCDsub(52, 78));
