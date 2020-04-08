function arrayManipulation(n, queries) {
  //let arr = [];
  //let makeSum = 1;
  //while (makeSum <= n) {
  //arr.push(0);
  //makeSum++;
  //}
  //let arr = new Array(n).fill(0);
  //queries.forEach((e, i) => {
  //console.log(arr);
  //for (let j = e[0] - 1; j <= e[1] - 1; j++) {
  //arr.forEach((element, index) => {
  //if (j === index) {
  ////console.log(j === 1);
  //arr[index] += e[2];
  //}
  //});
  //}
  //});
  //return Math.max(...arr);

  // create empty arr
  // pick
  var arr = [];
  var max = 0;
  // init each element of arr to 0
  for (let l = 0; l < n; l++) {
    arr[l] = 0;
  }
  console.log(arr);
  // for each sum operation in queries
  for (let i = 0; i < queries.length; i++) {
    // update arr with number to add at index=queries[i][0]  and number to remove at index=queries[i][0]+1 => this will allow us to build each element of the final array by summing all elements before it. The aim of this trick is to lower time complexity
    arr[queries[i][0] - 1] += queries[i][2];
    if (queries[i][1] < arr.length) {
      arr[queries[i][1]] -= queries[i][2];
    }
    console.log(arr);
  }
  for (let j = 1; j < n; j++) {
    arr[j] += arr[j - 1];
    console.log(arr);
  }
  for (let k = 0; k < arr.length; k++) {
    max = Math.max(max, arr[k]);
  }
  //max = Math.max(...arr); // not working for big arrays
  return max;
}

let quer = [
  [1, 2, 100],
  [2, 5, 100],
  [3, 4, 100],
];
let length = 5;

console.log(arrayManipulation(length, quer));

