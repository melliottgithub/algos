/* 
315 - Longest Palindromic Subsequence
Given a string of lowercase characters (a-z), return the length of the longest palindromic subsequence.

Subsequence: a sequence that can be derived from another sequence by deleting some or no elements without changing the order of the remaining elements.

For example, the sequence ⟨A, B, D⟩ is a subsequence of ⟨A, B, C, D, E, F⟩ obtained after removal of elements C, E, and F.

https://en.m.wikipedia.org/wiki/Subsequence

Input: {String}
Output: {Integer}
Example
Input:  "vtvvv"
Output: 4

Longest palindromic subsequence here is "vvvv"


Input:  "pwnnb"
Output: 2

Longest palindromic subsequence here is "nn"


Input:  "ttbtctcbt"
Output: 7

Longest palindromic subsequence here is "tbtctbt"
Constraints
Time Complexity:			        O(N^2)
Auxiliary Space Complexity: 		O(N^2)
     v
 v 
 pwnnb                                      'pwnnb'
                                      pwnn          wnnb
                                            
                                                      

*/