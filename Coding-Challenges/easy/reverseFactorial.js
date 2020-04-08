function reverseFactorial(n) {
  let divisival = 1;
  let number = n;
  while (number > 1) {
    divisival++;
    number = number / divisival;
  }
  return number === 1 ? divisival : "Not a factorial number";
}

console.log(reverseFactorial(362880));
