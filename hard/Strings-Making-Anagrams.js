function makeAnagram(a, b) {
  let arr1 = a.split("");
  let arr2 = b.split("");
  let newStr = [];
  let countArr = [];
  arr1.forEach((e, i) => {
    arr2.forEach((e2, i2) => {
      if (e2 === e) newStr.push(e);
    });
  });

  newStr.forEach(el => {
    arr1.forEach(e => {
      if (el !== e) countArr.push(e);
    });
    arr2.forEach(e => {
      if (el !== e) countArr.push(e);
    });
  });
  return countArr.length;
}

let str1 = "showman";
let str2 = "woman";

console.log(makeAnagram(str1, str2));
