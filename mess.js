// find mininum number of swaps needed to sort an array
// Logic : change each indivial number if not equal to consecutive accending order and count++
// return total number of count
/*
n = size of arr
arr = arr
s = min swaps

loop twice , find num if needed and chance number with corresponding index
*/

//function minimumSwaps2(arr) {
//let count = 0;
//let max = 0;
//console.log(arr);
//arr.forEach((num1, i1) => {
//arr.forEach((num2, i2) => {
//if (i1 >= i2) return;
//if (num1 + 1 !== arr[i1 + 1] && num1 + 1 === arr[i2] && max === 0) {
//let swap = arr[i2];
//arr[i2] = arr[i1 + 1];
//arr[i1 + 1] = swap;
//count++;
//} else if (num1 + 1 !== arr[i2] && arr[i2] === 1) {
//max = num1;
//let swap = arr[i2];
//arr[i2] = arr[i1];
//arr[i1] = swap;
//count++;
//} else if (arr[i1 - 1] + 1 === arr[i2]) {
//let swap = arr[i2];
//arr[i2] = arr[i1];
//arr[i1] = swap;
//count++;
//}
//});
//});
//return count;
//}

//////////////// puts string in order doesnt count number of min swaps ////////////////////
function minimumSwaps(arr) {
  let count = 0;
  arr.forEach((e, i) => {
    let max = 0;
    if (e + 1 !== arr[i + 1] && arr[i + 1] !== undefined) {
      arr[i + 1] = e + 1;
      count++;
    }
  });
  console.log(arr, (count + 1) / 2);
  return count;
}

function minimumSwaps2(arr) {
  var counter = 0;

  for (var i = arr.length; i > 0; i--) {
    var minval = Math.min(...arr);
    console.log("before", arr);
    console.log(minval);
    var minIndex = arr.indexOf(minval);
    if (minval !== arr[0]) {
      var temp = arr[0];
      arr[0] = arr[minIndex];
      arr[minIndex] = temp;
      console.log("after", arr);
      arr.splice(0, 1);
      counter++;
    } else {
      arr.splice(0, 1);
      console.log("in else case");
    }
  }
  return counter;
}

let myArr3 = [3, 4, 1, 2, 5];
let myArr2 = [1, 3, 4, 2, 6, 5];
let myArr = [4, 3, 2, 1];
console.time("function12");
console.log(minimumSwaps(myArr));
console.timeEnd("function12");
//console.log(minimumSwaps2(myArr2));
////console.log(myArr[0])
//function findNumber(arr, k) {
//let answer = "NO";
//arr.forEach(num => {
//if (num === k) answer = "YES";
//});
//return answer;
//}

////console.log(findNumber([1,2,3,4,5], 1))

//function oddNumbers(l, r) {
//let arr = [];
//while (l <= r) {
//l % 2 !== 0 ? arr.push(l) : "";
//l++;
//}
//return arr;
//}

////console.log(oddNumbers(2,5))
//function fizzBuzz(n) {
//// Write your code here
//let count = 1;
//while (count <= n) {
//count % 5 === 0 && count % 3 === 0
//? console.log("FizzBuzz")
//: count % 5 === 0
//? console.log("Buzz")
//: count % 3 === 0
//? console.log("Fizz")
//: console.log(count);
//count++;
//}
//}

//fizzBuzz(15);

//let arr = [1,2,3]
//let arr2 = [1,2,3]

////console.log(arr2)
//let condition = true
//while(condition){
//let count = 0
//arr.forEach((e,i)=>{
//if(arr[i] === arr2[i]) count ++
//console.log(count)
//})
////console.log(condition)
//if(count === arr.length) condition = false
////console.log(condition)
//}

//Given three integers between 1 and 11, if their sum is less than or equal to 21, return their sum. If their sum exceeds 21 and there's an eleven, reduce the total sum by 10. Finally, if the sum (even after adjustment) exceeds 21, return 'BUST'

function add(num1, num2, num3) {
  let total = num1 + num2 + num3;
  if (total <= 21) return total;
  if (total >= 21 && (num1 === 11 || num2 === 11 || num3 === 11)) {
    total -= 10;
    total > 21 ? (total = "BUST") : "";
  }
  if (total > 21) total = "BUST";
  return total;
}

//console.log(add(11, 12, 2));

function word(str) {
  let newArr = str.split("");
  console.log(newArr);
  let myStr = "";
  newArr.forEach((e, i) => {
    myStr = myStr + e + e + e;
  });

  return myStr;
}
console.time("start");
console.log(word("BRUaNO"));
console.timeEnd("start");

function blackjack(a, b, c) {
  let total = a + b + c;
  if (total <= 21) {
    return total;
  } else if ((total > 21 && a == 11) || b == 11 || c == 11) {
    newTotal = total - 10;
    if (newTotal <= 21) {
      return newTotal;
    } else {
      return "Bust";
    }
  }
}
console.time("dan");
console.log(blackjack(11, 12, 13));
console.timeEnd("dan");
