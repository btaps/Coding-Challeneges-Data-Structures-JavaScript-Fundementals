// Minimum Swaps 2

function swap(array, index1, index2) {
  let swap = array[index1];
  array[index1] = array[index2];
  array[index2] = swap;
}

function minimumSwaps(arr) {
  let swapCount = 0;
  if (arr.length <= 500000 && arr.length >= 1) {
    console.log(arr);
    arr.forEach((num, i) => {
      if (num !== i + 1) {
        arr.forEach(number => {
          if (number === i + 1) {
            swapCount++;
            swap(arr, arr.indexOf(number), i);
          }
        });
      }
      console.log(arr);
    });
  } else return;
  console.log(swapCount);
  return swapCount;
}

let arr1 = [4, 3, 1, 2];
let arr2 = [1, 3, 5, 2, 4, 6, 7];
/*
arr1.filter(num => {
  if(num === 1){
    console.log(arr1.indexOf(num))
  }})
  */

minimumSwaps(arr1);
