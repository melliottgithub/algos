/* 
Complementing a DNA strand

reverse and complement

    "A": "T",
    "T": "A",
    "C": "G",
    "G": "C",

    Understanding
    ------------------------------------------------------------------------------------------
    CTTAAG --> complement GAATTC

    I/O
    CTTAAG-->reverse GAATTC --> complement CTTAAG
    
    Time:
    Space:
    
    constraints
    ???
    Edge case
    ??
    
    Diagramming
    ----------------------------------------------------------------------------------------

    "A": "T",
    "T": "A",
    "C": "G",
    "G": "C",
          i
    'CTTAAG'
     

*/

//Code
function dnaComplement(s) {
  // Write your code here
  let [map, compDNA] = [{
    "A": "T",
    "T": "A",
    "C": "G",
    "G": "C",
  }, '']


  for (let i = s.length - 1; i >= 0; i--) {
    compDNA += map[s[i]];
  }

  return compDNA;
}

console.log(dnaComplement('CTTTAAG'));