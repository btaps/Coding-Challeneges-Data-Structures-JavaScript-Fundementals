function birthdayCakeCandles(ar) {
  //[1,2,3,3]
  //loop over the arr and keep track of the highest number
  //then return how many of the highest number there is
  let highest = 0;
  const map = {};
  ar.forEach((number) => {
    if (number > highest) highest = number;
    if (map[number]) map[number]++;
    else if (map[number] === undefined) map[number] = 1;
  });
  return map[highest];

  //const maxNum = Math.max(...ar);
  //const count = ar.filter((number) => number === maxNum);
  //return count.length;
}

console.log(birthdayCakeCandles([1, 2, 3, 3]));
