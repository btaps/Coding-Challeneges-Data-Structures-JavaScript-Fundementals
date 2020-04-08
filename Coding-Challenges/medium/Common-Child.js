/*

  s1 = HARRY
  s2 = SALLY

  memo = []
      idx=  0 1 2 3 4    (arr1) (i)
            H A R R Y
      _______________ 
      |   0 1 2 3 4 5
      | 0 0 0 0 0 0 0  memo = [0,0,0,0,0,0]
 0 S  | 1 0 0 0 0 0 0  memo = [0,0,0,0,0,0]       (memo is in the numbers 0 - 5)
 1 A  | 2 0 0 1 1 1 1  memo = [0,0,1,1,1,1]
 2 L  | 3 0 0 1 1 1 1  memo = [0,0,1,1,1,1]
 3 L  | 4 0 0 1 1 1 1  memo = [0,0,1,1,1,1] 
 4 Y  | 5 0 0 1 1 1 2  memo = [0,0,1,1,1,2]
(arr2)
  (j)

let str3 = "SHINCHAN";
let str4 = "NOHARAAA";
      
      idx=  0 1 2 3 4 5 6 7   (arr1) (i)
            S H I N C H A N 
      _____________________
      |   0 1 2 3 4 5 6 7 
      | 0 0 0 0 0 0 0 0 0  memo = [0,0,0,0,0,0]
 0 N  | 1 0 0 0 0 1 1 1 1  memo = [0,0,0,0,1,1,1,1]       (memo is in the numbers 0 - 5)
 1 O  | 2 0 0 0 0 0 0 0 0  memo = [0,0,0,0,0,0]
 2 H  | 3 0 0 0 0 0 0 0 0  memo = [0,0,0,0,0,0]
 3 A  | 4 0 0 0 0 0 0 0 0  memo = [0,0,0,0,0,0] 
 4 R  | 5 0 0 0 0 0 0 0 0  memo = [0,0,0,0,0,0]
 5 A  | 5 0 0 0 0 0 0 0 0  memo = [0,0,0,0,0,0]
 6 A  | 5 0 0 0 0 0 0 0 0  memo = [0,0,0,0,0,0]
 7 A  | 5 0 0 0 0 0 0 0 0  memo = [0,0,0,0,0,0]

*/

function LCSM4(arr1, arr2, l1, l2) {
  let memo = new Array(l2 + 1).fill(0);

  let letters = [];

  for (let i = 1; i <= l1; i++) {
    let prev = 0;
    for (let j = 1; j <= l2; j++) {
      //console.log(arr1[i - 1], arr2[j - 1]);
      let temp = memo[j];
      if (arr1[i - 1] === arr2[j - 1]) {
        //memo[j] = arr1[i - 1];
        memo[j] = prev + 1;
        console.log(arr1[i - 1]);
        //letters.push(arr1[i - 1]);
      } else {
        //console.log(memo[j], memo[j - 1]);
        memo[j] = Math.max(memo[j], memo[j - 1]);
      }
      prev = temp;
    }
    console.log(memo);
  }
  //console.log(memo);
  return memo[l2];
}

function commonChild(s1, s2) {
  return LCSM4(s1, s2, s1.length, s2.length);
}

let str1 = "OUDFRMYMAW";
let str2 = "AWHYFCCMQX";

let str3 = "SHINCHAN";
let str4 = "NOHARAAA";

let str5 = "WEWOUCUIDGCGTRMEZEPXZFEJWISRSBBSYXAYDFEJJDLEBVHHKS";
let str6 = "FDAGCXGKCTKWNECHMRXZWMLRYUCOCZHJRRJBOAJOQJZZVUYXIC";

console.log(commonChild(str3, str4));
