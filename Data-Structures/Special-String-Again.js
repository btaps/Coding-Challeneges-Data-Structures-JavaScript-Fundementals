/*
  s = 'asasd'
  subString = s.split('') 
  count= length of s 
  
  1) every char = a,s,a,s,d // ALL THE SAME

  2) every 2 char = as, sa, as, sd // no

  3)  = asa, sas, asd // asa, sas

  4) = asas, sasd // no

  5) = asasd  // no


  

  if subString is Even  (subString.length%2 === 0)
      Are they all the same?
  else
      Are they all the same without the middle character?
  
  */

/*
  0123
  aaaa   // aa aa
  pppdp
  aabaa

  a[1] = 

function checkIfSubstring(s, left, right) {
  if(s === undefined || left > right) return 0
  let obj = {count =0}
  while(left >= 0 && right < arr.length ){
      
    if(s.charAt(left) !== s.charAt(right)) return false
    
    left --
    right ++
  }

  return obj
}
    
 */
function checkIfSubstring(s, left, right) {
  if (s === undefined || left > right) return 0;
  // 01234
  // asasd
  //  x.x

  let count = 0;
  while (left >= 0 && right < s.length) {
    if (s.charAt(left) !== s.charAt(right)) return false;
    else if (s.charAt(left) === s.charAt(right) && left !== right) {
      //
      count++; //
    } //
    console.log(s.charAt(left), s.charAt(right));

    left--;
    right++;
  }
  return count;
}

function substrCount(n, s) {
  //let count = 0;

  //for (let i = 0; i < s.length; i++) {
  //count += checkIfSubstring(s, i, i);
  //}

  //return count;
  let subString = [];
  let arr = s.split("");
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n + 1; j++) {
      if (isSubString(s.slice(i, j))) {
        subString.push(s.slice(i, j));
      }
    }
  }
  console.log(subString);
  console.log(arr);
  return subString.length;
}

function isSubString(s) {
  let arr = s.split("");
  let length = s.length;
  let i = 0;
  let j = length - 1;
  while (i !== j) {
    if (arr[i] !== arr[j]) {
      return false;
    } else if (length > 3 && i !== 0 && arr[i] !== arr[i - 1]) {
      return false;
    } else if (i > j) return true;
    i++;
    j--;
  }
  return true;
}

const str = "asasd";
const length = str.split("").length;
//console.log(str.slice(0, 1));
console.log(substrCount(length, str));

//for (let i = 0; i < str.length; i++) {
//console.log(str.charAt(i));
//}

//console.log(str.length);
