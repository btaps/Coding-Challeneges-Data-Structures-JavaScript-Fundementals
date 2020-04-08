// split an array in such a way that their sums are the same
//

let arr = [1, 4, 5, 9, 10, 20, 5, 5];

function findSplitPoint(arr, n) {
  // we are going to check the left side sum to be equal to the right side sum
  let leftSum = 0;

  for (let i = 0; i < n; i++) {
    leftSum += arr[i];

    let rightSum = 0;
    for (let j = i + 1; j < n; j++) {
      rightSum += arr[j];
      console.log(leftSum, rightSum);
    }

    if (leftSum === rightSum) {
      //console.log(i);
      //console.log(leftSum, rightSum);
      return i + 1;
    }
  }
  return -1;
}

function printTwoParts(arr, n) {
  splitPoint = findSplitPoint(arr, n);

  if (splitPoint === -1 || splitPoint === n) {
    console.log("Not Possible");
    return;
  }

  let str1 = arr
    .join("")
    .slice(0, splitPoint)
    .split("");
  let str2 = arr
    .join("")
    .slice(splitPoint, n)
    .split("");
  console.log(str1);
  console.log(str2);
}

printTwoParts([1, 2, 3, 4, 5, 5], 6);

//console.log(findSplitPoint([6, 4, 5, 5, 1], 5));
