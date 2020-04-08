function findTotal(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

function printTwoParts(arr, n) {
  let total = findTotal(arr);
  let map = { leftSum: 0 };
  let splitPoint = -1;
  for (let i = 0; i < n; i++) {
    map.leftSum += arr[i];

    //console.log(map.leftSum);
    //console.log(total / map.leftSum);
    if (total / map.leftSum === 2) splitPoint = i + 1;

    if (splitPoint !== -1) {
      let str1 = arr
        .join("")
        .slice(0, splitPoint)
        .split("");
      let str2 = arr
        .join("")
        .slice(splitPoint, n)
        .split("");
      console.log(str2 + "\n" + str1);
      return [str2, str1];
    }
  }
  return -1;
}

console.log(printTwoParts([6, 4, 5, 5, 5], 5));
