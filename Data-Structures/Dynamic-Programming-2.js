// Time complexity O(n)
// Top-Down approach , Dynamic Programming

const fibNum = 100;

let memoArr = new Array(fibNum + 1);

function fib(n, memo) {
  //console.log(memo[n]);
  let result;
  if (memo[n]) {
    return memo[n];
  }
  if (n === 1 || n === 2) {
    result = 1;
  } else {
    result = fib(n - 1, memo) + fib(n - 2, memo);
  }
  memo[n] = result;

  return result;
}
console.time("fib");
console.log(fib(fibNum, memoArr));
console.timeEnd("fib");
