let n = 10
let ar = [1,2,1,2,3,1,2,3,2,2]

function findMatch(num, arr){
  // loop through both arrays
  let sorted = arr.sort()
  let matches = 0
  for(let i=0; i<num;i++){
    if(arr[i] === arr[i+1]){
      matches = matches +1
      i+=1
    }
  }
  return matches
}
console.log(findMatch(n, ar))
