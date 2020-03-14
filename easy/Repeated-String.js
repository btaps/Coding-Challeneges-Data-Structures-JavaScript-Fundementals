/*
Lilah has a string,

, of lowercase English letters that she repeated infinitely many times.

Given an integer,
, find and print the number of letter a's in the first

letters of Lilah's infinite string.

For example, if the string
and , the substring we consider is , the first characters of her infinite string. There are

occurrences of a in the substring.

Function Description

Complete the repeatedString function in the editor below. It should return an integer representing the number of occurrences of a in the prefix of length

in the infinitely repeating string.

repeatedString has the following parameter(s):

    s: a string to repeat
    n: the number of characters to consider
*/

// use n = the length of the string to use
// use s = the string to use
// s is repeated infinitely 

// take the string and make it repeate infinitely
// Condition the string length is equal to the number n
// check the number of 'a's inside of the string.
/*
total times string can go into y = n/s 
n = y + (n%s)
how many a in n%s = As
repeat string n times and filter a
add a + As = totals a
*/
// Complete the repeatedString function below.
function repeatedString(s, n) {
  var str = s.split("")
  
 // console.log(str)
  var stringSize = s.length;
 // console.log(stringSize)
  var a = str.filter((a) => a == 'a').length;
 // console.log(a)
  var repeat = Math.floor(n/stringSize);
 // console.log(repeat)
  var left = n%repeat;
 // console.log(left)

  return (repeat*a) + str.filter((a,i) => a == 'a' && i < left).length;
}


function repeatedString2(s, n) {
  let repeat = s.repeat(n).split('')
  repeat.length = n
  repeat = repeat.filter(a => a==='a' ).length
  return repeat
}

console.log(repeatedString('a', 100000000000000000000000))









