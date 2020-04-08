function helper(arr, m, idx) {
  const arr1 = [];
  for (let i = idx + 1; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[idx] * m === arr[i] && arr[i] * m === arr[j]) {
        arr1.push(`${idx},${i},${j}`);
      }
    }
  }
  if (arr.length !== 0) {
    return arr1;
  }
}

function countTriplets(arr, r) {
  const obj = { count: 0, triplets: [] };

  for (let i = 0; i < arr.length; i++) {
    if (helper(arr, r, i).length !== 0) {
      let arr2 = helper(arr, r, i);

      obj.triplets.push(arr2);
      obj.count += arr2.length;
    }
  }

  console.log(obj.triplets);
  return obj.count;
}

let sampleArr = [1, 2, 2, 4];
let repetitions = 3;

let sampleArr2 = [1, 3, 9, 9, 27, 81];

console.time("l");
console.log(countTriplets(sampleArr2, repetitions));
console.timeEnd("l");
