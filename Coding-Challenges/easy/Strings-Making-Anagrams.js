function makeAnagram(a, b) {
  let arr1 = a.split("");
  let arr2 = b.split("");
  let countArr = [];
  let count = 0;
  let obj = {};

  arr1.forEach(element => {
    if (obj[element]) obj[element]++;
    else obj[element] = 1;
  });

  arr2.forEach(element => {
    if (obj[element] > 0) {
      obj[element]--;
      countArr.push(element);
      countArr.push(element);
    }
  });

  return (count = arr1.length + arr2.length) - countArr.length;
}

//console.log(makeAnagram("cde", "abc"));

console.log(
  makeAnagram("fcrxzwscanmligyxyvym", "jxwtrhvujlmrpdoqbisbwhmgpmeoke")
);
