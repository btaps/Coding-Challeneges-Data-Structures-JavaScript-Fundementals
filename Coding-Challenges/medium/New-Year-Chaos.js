// a list of people, each person has a sticker indicating inital position in the list
// people can switch positions, at most two times. and they keep their position number
// find the minumum number of swaps that took to get there.
//
// t = 5   // number of people in que
// arr = [1,2,3,4,5]
// q = [2,1,5,3,4] // what arr looks like after
// 
// original index is (element - 1)
// q.sort() has to be in order to t'th number
// 
// 
function swap(array, index1, index2){
  let swap = array[index1]
  array[index1] = array[index2]
  array[index2] = swap
}


///////////////////////////////     O(n^2) ???? ///////////////////////////////////////
function minimumBribes(q) {
  if(q.length>100000) false
  
  let str;
  const sorted = [...q].sort()
  const myObj ={}
  sorted.forEach(el=>{
    myObj[`${el}`] = 0
  })
  let condition = true
  let count = 0
  let count2 = 0
  while(count2<=q.length){
    q.forEach((el,i)=>{
      if(q[i] !== sorted[i] && q[i] > q[i+1]){
        myObj[`${q[i]}`]++
        
        swap(q, i, i+1)
        count++
      }
    })
    count2+=1
    if(count === q.length) condition = false
  
  }
  
  let entries = Object.entries(myObj)
  
  for(let i=0; i<entries.length;i++){
    if(entries[i][1]>2) str = 'Too chaotic';
  }
  
  if(str) count = str;
  console.log(count)
  return count
}


///////////////////////////////     O(n)  ///////////////////////////////////////

function minB(arr){
  let swapCount = 0;

  for(let i= arr.length-1; i>=0; i--){
    if(arr[i] !== i+1){ // filters out every person that didn't bribe
      if(((i-1) >= 0) && arr[i-1] === (i+1)){
        swapCount++
        swap(arr, i, i-1)
      }else if(((i-1) >= 0) && arr [i-2] === (i+1)){
        swapCount+=2
        swap(arr, i-2, i-1)
        swap(arr, i-1, i)
      }else{
        console.log('Too chaotic')
        return
      }
    }
  }
  console.log(swapCount)
}





let arr3 = [1,3,2]


let arrr = [2,1,5,3,4]
let arr1 = [5, 1, 2, 3, 7, 8, 6, 4]
let arr2 = [1, 2, 5, 3, 7, 8, 6, 4]
         //[1, 2, 3, 4, 5, 6, 7, 8]



//minimumBribes(arrr)
minB(arr1)
