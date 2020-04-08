// Bottom up approach
//

function fib(n) {
  if (n === 1 || n === 2) return 1;
  const bottomUp = new Array(n);
  bottomUp[0] = 1;
  bottomUp[1] = 1;
  for (let i = 2; i < bottomUp.length; i++) {
    bottomUp[i] = bottomUp[i - 1] + bottomUp[i - 2];
  }
  return bottomUp[n - 1];
}
console.time("fib");
console.log(fib(1000));
console.timeEnd("fib");
