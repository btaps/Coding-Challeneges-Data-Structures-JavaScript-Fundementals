function countTriplets(arr, r) {
  const LeftMap = new Map();
  const RightMap = new Map();

  for (let i = 0; i < arr.length; i++) {
    if (RightMap[arr[i]]) RightMap[arr[i]]++;
    else RightMap[arr[i]] = 1;
  }

  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    //console.log(RightMap);
    let midterm = arr[i],
      countLeft = 0,
      countRight = 0;

    RightMap[midterm]--;

    if (LeftMap[midterm / r] && midterm % r === 0) {
      countLeft = LeftMap[midterm / r];
    }

    if (RightMap[midterm * r]) {
      countRight = RightMap[midterm * r];
    }

    count += countRight * countLeft;

    if (LeftMap[midterm]) LeftMap[midterm]++;
    else LeftMap[midterm] = 1;
    //console.log(RightMap);
    //console.log(LeftMap);
    //console.log(count);
    //console.log(midterm);
  }

  return count;
}

let sampleArr = [1, 2, 2, 4];
let repetitions = 3;

let sampleArr2 = [1, 3, 9, 9, 27, 81];

console.time("l");
console.log(countTriplets(sampleArr2, repetitions));
console.timeEnd("l");
