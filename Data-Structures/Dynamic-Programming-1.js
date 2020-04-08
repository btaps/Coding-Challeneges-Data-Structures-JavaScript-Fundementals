// Regular Fib sequence
// Recursion style Top-Down no memoization
// Time Complexity O(2^n)

function fib(n) {
  let result;
  if (n === 1 || n === 2) {
    result = 1;
  } else {
    result = fib(n - 1) + fib(n - 2);
  }

  return result;
}
console.time("fib");
console.log(fib(50));
console.timeEnd("fib");
