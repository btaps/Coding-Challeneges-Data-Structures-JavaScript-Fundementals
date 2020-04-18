// [3, 7, 4, 6, 5]
// Sub sets are [3,4], [3,5], [3,6], [3,4,5], [7, 6], [7,5], [4,5]
// largest sum is [7,6] = 13
// answer is 13
//

function maxSubsetSum(arr) {
  // create new Array
  let sum = new Array(arr.length + 1).fill(0);

  // loop through arr
  for (let i = 1; i <= arr.length; ++i) {
    if (i == 1) {
      sum[i] = arr[i - 1];
    } else {
      sum[i] = Math.max(sum[i - 1], sum[i - 2] + arr[i - 1]);
    }
    console.log(sum);
    sum[i] = Math.max(sum[i], 0);
    console.log(sum, "\n-------------------");
  }
  return sum[arr.length];
}

console.log(maxSubsetSum([3, 7, 4, 6, 5]));
