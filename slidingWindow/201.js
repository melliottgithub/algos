/* 
201 - Longest Substring Without Repeating Characters
Given a string s, find the longest substring without repeating characters.

Input: String
Output: String
Example
Input: abcabcbb      =>	Output: abc
Input: bbbbb	 	=>	Output: b
Input: pwwkew		=>	Output: wke

Constraints
N ~ Length of input string
K ~ Number of unique characters in input string

Time Complexity: O(N)
Auxiliary Space Complexity: O(K)
s consists of English letters, digits, symbols and spaces.
                        0 1 2 3 4 5 6 7 
                        a b c a b c b b      count = {a: 0, b: 0, c:0}   missChars= target.length = 0 range = [0, 2] => currStr=abcd maxStr=abc
                                  L                                  
                                        R                                      
                                                          
                                                         //Hunting phase:  --- seek to fulfill conditions
                                                         while(R < input length) 
                                                          > if missChar > 0
                                                            > counts[R] in count > 0
                                                             missChars--
                                                            counts[R]--
                                                                
                                                         //catching phase: 
                                                         while missChars === 0
                                                           
                                                         R++
*/