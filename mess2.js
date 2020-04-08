function stair(n) {
  let arr = new Array(n).fill(" ");
  while (n > 0) {
    arr.shift();
    arr.push("#");
    console.log(arr.join(""));
    n--;
  }
}
for (let i = 1; i <= 6; i++) {
  console.log("#".repeat(i).padStart(6));
}
