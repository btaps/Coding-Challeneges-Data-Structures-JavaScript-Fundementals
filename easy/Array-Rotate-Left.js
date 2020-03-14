// variables are 
//   n = number of integers in arr
//   d = number of rotations
//   a = array
// create a loop that run n times
// grab the first number in arr and move to the end of arr and delete the first number in arr
// 

let arr = [1,2,3,4,5]


function rotLeft(a, d) {
  let count = 1
  while(count<=d){
    a.push(a[0])
    a.shift()
    count++
  }
  return a
}

console.log(rotLeft(arr, 4))

