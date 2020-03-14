// Minimum Swaps 2

function swap(arr, i, i2){
  let swap = arr[i]
  arr[i] = arr[i2]
  arr[i2] = swap
}

function minimumSwaps(arr) {
  let swapCount = 0
  if(arr.length <= 500000 && arr.length >= 1){
    arr.forEach((num, i)=>{
      if(num !== (i+1)){
        arr.filter(number=>{
          if(number === (i+1)){
            swapCount++
            swap(arr, arr.indexOf(number), i)
          }
        })
      }
    })
  }else return
  console.log(swapCount)
  return swapCount
}

let arr1 = [ 4, 3, 1, 2 ]
let arr2 = [1,3,5,2,4,6,7]
/*
arr1.filter(num => {
  if(num === 1){
    console.log(arr1.indexOf(num))
  }})
  */


minimumSwaps(arr2)
