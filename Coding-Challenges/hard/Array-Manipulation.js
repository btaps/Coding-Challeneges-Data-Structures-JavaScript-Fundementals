function arrayManipulation(n, queries) {
  let arr = [];
  let makeSum = 1;
  while (makeSum <= n) {
    arr.push(0);
    makeSum++;
  }
  queries.forEach((e, i) => {
    console.log(arr);
    for (let j = e[0] - 1; j <= e[1] - 1; j++) {
      arr.forEach((element, index) => {
        if (j === index) {
          //console.log(j === 1);
          arr[index] += e[2];
        }
      });
    }
  });
  return Math.max(...arr);
}

let quer = [
  [1, 2, 100],
  [2, 5, 100],
  [3, 4, 100]
];
let length = 5;

console.log(arrayManipulation(length, quer));
