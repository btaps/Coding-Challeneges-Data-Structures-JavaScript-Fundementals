//////////////////////////////////// NUMBERS /////////////////////////////////////////

let myNum = 0.3333337;
//console.log(myNum.toFixed(6)); // round to the 6th decimal place. returns a STRING

//////////////////////////////////// STRINGS /////////////////////////////////////////
let str = "Hello my name is Bruno";

// puts the entire string in array as a whole
let myArr = str.split();
//console.log(myArr) //[ 'Hello my name is Bruno' ]

// splits into array at every space ' '
let myArr2 = str.split("Bruno").join("shelby"); // Hello my name is shelby
//console.log(myArr2) //[ 'Hello', 'my', 'name', 'is', 'Bruno' ]

// cut off the first two letters
let slicedStr = str.slice(2);
//console.log(slicedStr) //llo my name is Bruno

// cut of from 0 index to 8th index of string
let slicedStr2 = str.slice(0, 8);
//console.log(slicedStr2) // Hello my

let slicedStr3 = str.slice(2);
//console.log(slicedStr3);

// replace a string with a value
console.log(str.replace("Bruno", "Shelby")); // Hello my name is Shelby

// padStart() will fill the empty spaces from the left with <empty spaces> unless given a value.
// Here we give the length of the fullNumber as the number of <empty spaces> and the '*' as the value to fill those spaces.
const fullNumber = "2034399002125581";
const last4Digits = fullNumber.slice(-4);
const maskedNumber = last4Digits.padStart(fullNumber.length, "*");

//console.log(maskedNumber);

// the repeat() just repeats the string a given ammount of times
const strToRepeat = "This is a repeating string. ";

//console.log(strToRepeat.repeat(2));

// splits every single character into an array including spaces
let myArr3 = str.split("");
//console.log(myArr3)
/*
 [
  'H', 'e', 'l', 'l', 'o',
  ' ', 'm', 'y', ' ', 'n',
  'a', 'm', 'e', ' ', 'i',
  's', ' ', 'B', 'r', 'u',
  'n', 'o'
]
*/
// playing with numbers as strings
let strNum = "3";

//turns string to number
let strToNum = parseInt(strNum);
//console.log(typeof(strToNum)) // number

//turns number to string
let back2Str = strToNum.toString();
//console.log(typeof(back2Str)) // string

////////////////////////////////////////// ARRAY /////////////////////////////////////////////////
//////////////////////////////////// MIXED WITH STRINGS  /////////////////////////////////////////

//reverses the arr
let reverseArr = myArr3.reverse();
//console.log(reverseArr)
/*
[
  'o', 'n', 'u', 'r', 'B',
  ' ', 's', 'i', ' ', 'e',
  'm', 'a', 'n', ' ', 'y',
  'm', ' ', 'o', 'l', 'l',
  'e', 'H'
]
*/
// joins entire array including commas and returns a string
let joinArr = myArr3.join();
//console.log(joinArr) // o,n,u,r,B, ,s,i, ,e,m,a,n, ,y,m, ,o,l,l,eH

// joins entire array and returns a string (Doesn't use commas)
let joinArr2 = myArr3.join("");
//console.log(joinArr2) //onurB si eman ym olleH

// find the second highest num

// if no second highest (they are all equal) return the number they are all eqaul too
// if not in order, sort()
// sort() can take in a callback function that sorts for a special condition met
const months = ["March", "Jan", "Feb", "Dec"];
months.sort((a, b) => a.length - b.length);
//console.log(months) //[ 'Jan', 'Feb', 'Dec', 'March' ]

const array1 = [1, 30, 4, 21, 2, 100000];
array1.sort((a, b) => a - b);
//console.log(array1) //[ 1, 2, 4, 21, 30, 100000 ]

let numArr = [1, 2, 3, 4, 5, 6];
let secondHighest;
numArr.map((e, i) => {
  i === numArr.length - 2 ? (secondHighest = e) : "";
});
//console.log(secondHighest) // 5

//map returns a new arr if used with a variable
let map1 = numArr.map((num, i) => i);
//console.log(map1) //[ 0, 1, 2, 3, 4, 5 ]

// using filter
// returns a new array with the number of elements that met the condition
let myFilter = numArr.filter((num) => num > 3);
//console.log(myFilter) //[ 4, 5, 6 ]

// using reducer,
// The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
let reduceArr = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;
let reduced = reduceArr.reduce(reducer);
// Using Shift and Unshift
//console.log(reduced) // 10

//shift takes one out of the beginning
let newNumArr = [1, 2, 3];
let indexZeroNum = newNumArr.shift();
//console.log(indexZeroNum) //1

// unshift adds a number to the beginning of the array
let newNumArr2 = [4, 5, 6];
newNumArr2.unshift(1);
//console.log(newNumArr2) //[ 1, 4, 5, 6 ]

//***************** COPY AN ARRAY WITHOUT REFERENCE TO ORIGINAL ARRAY **************
let original = [1, 2, 3];
let copy = original; // EXACT REFERENCE TO THE ORGINIAL
let clone = [...original]; // NO REFERENCE
//console.log(original === copy) // TRUE      THEY ARE REFERENCING THE SAME MEMORY SPACE
//console.log(original === clone) // FALSE    THEY ARE POINTING TO TWO DIFFERENT MEMORY SPACE

////////////////////////////////////////// OBJECTS /////////////////////////////////////////////////

// Make an object with keys as an index of the array and values as the elements
let arr3 = [1, 2, 3, 4, 5, 6];
let myObj = Object.assign({}, arr3);
//console.log(myObj); //{ '0': 1, '1': 2, '2': 3, '3': 4, '4': 5, '5': 6 }

////////////////////////////////////////// CONSOLE /////////////////////////////////////////////////

// ************** Test your code speed ***************
/*
console.time('start test')
let itterations = 10000000000000000000000
for(number in 10){
  console.log(number)
}
console.timeEnd('start test')
*/
var cost = [2, 10, 17, 50];
var total = 0;
function aFunction(a) {
  for (var element of a) {
    total = total + element;
    console.log(typeof element);
  }
  return total;
}

//aFunction(cost);
