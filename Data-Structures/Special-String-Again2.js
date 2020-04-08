function substrCount(n, s) {
  let subArr = [];
  let count = 0;
  let current = null;

  // 1st pass
  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) === current) {
      count++;
    } else {
      if (current !== null) subArr.push([current, count]);
      current = s.charAt(i);
      count = 1;
    }
  }
  subArr.push([current, count]);

  let answer = 0;
  // 2nd pass
  for (let [letter, count1] of subArr) {
    //
    console.log(letter, count, subArr);
    answer += (count1 * (count1 + 1)) / 2;
  }
  //
  console.log(answer);
  // 3rd pass
  for (let i = 1; i < subArr.length - 1; i++) {
    //console.log(i, subArr.length);
    //
    // [[a,1],[s,1],[a,1],[s,1], [d,1]]
    // [[a,4],[s,1],[a,2]]
    //
    if (subArr[i - 1][0] === subArr[i + 1][0] && subArr[i][1] === 1) {
      answer += Math.min(subArr[i - 1][1], subArr[i + 1][1]);
    }
    //console.log(answer);
  }

  //console.log(answer);
  //console.log(subArr);

  return answer;
}
let str = "asasd";
let strCount = str.length;
console.log(substrCount(strCount, str));
