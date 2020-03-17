function twoStrings(s1, s2) {
  let obj = {};
  let answer = "No";

  s1.split("").forEach(el => {
    if (obj[el] === undefined) obj[el] = 1;
    else if (obj[el]) obj[el]++;
  });

  s2.split("").forEach(el => {
    if (obj.hasOwnProperty(el)) answer = "Yes";
  });
  console.log(answer);
}

let str1 = "hello";
let str2 = "world";

let str3 = "hi";

twoStrings(str1, str2);
