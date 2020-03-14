const arr = [
	[1,1,1,0,0,0], 
	[0,1,0,0,0,0], 
	[1,1,1,0,0,0], 
	[0,0,0,0,0,0], 
	[0,0,0,0,0,0], 
	[0,0,0,0,0,0]]

// checking the sum of the first 3 in arry
// then we move on untill their no more consecutive 3 numbers in arr[j]
// 
// use length of arr[i] to determine when you run out of hourglasses 


// I need to itterate over arr and select the hourglass sum. Store and compare the possible sums for the highest sum
// while loop if 
//if(x.c !== undefined && x+6 !== undefined)
//loop over Arr
//  new Arr push(sum of x.a + x.b + x.c + y.b + z.a + z.b + z.c) 
//  new Arr.sort
//return new Arr.length-1

// ****************** ONLINE CODE **********************
function hourglassSum3(arr) {
 
     let hourglasses = [];

     if (typeof arr === "object"
          && arr.length === 6
          && arr.map(i => i.length).reduce((p, n) => p + n) === 36) 
          {
 
          for (let row = 0; row <= 3; row++) {
               for (let col = 0; col <= 3; col++) {
                    let sum = 0;
          
                    sum += arr[row][col];
                    sum += arr[row][col + 1];
                    sum += arr[row][col + 2];
                    sum += arr[row + 1][col + 1];
                    sum += arr[row + 2][col]; 
                    sum += arr[row + 2][col + 1];
                    sum += arr[row + 2][col + 2];
          
                    hourglasses.push(sum);
               } 
          }
     } 
                
     return (hourglasses.length > 0) ? Math.max(...hourglasses) : 0;
}


function hourglassSum2(arr){
  let condition1
  let condition2
  let newArr = []
  arr.map((e,i)=>{
    condition1 = arr[i + 2] 
      for(let j=0; j<e.length; j++){
        condition2 = arr[i][j+2]
        condition1 !== undefined && condition2 !== undefined 
	      ? newArr.push(
		      arr[i][j]+ arr[i][j+1]+ condition2 
		      + arr[i+1][j+1] 
		      + arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2])
              : ''
      }
  })
  newArr.sort((a,b)=> a-b)
  return newArr[newArr.length-1]
}




function hourglassSum(arr) {
  let maxlength = arr.length - 3
  let newLine = 0
  let count = 0
  for(let i=0; i<=maxlength; i++){
    for(let j=0; j<arr[i].length;j++){
      if(arr[i][j+2] === undefined){
        //break
	//console.log(`no more possible hourglasses in this arr[${i}]`)
      }else{
	arr[i][j] + arr[i][j+1] + arr[i][j+2] + arr[i+1][j+1] + arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2] > count ? count = arr[i][j] + arr[i][j+1] + arr[i][j+2] + arr[i+1][j+1] + arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2] : ''
      }
    }
  }
  return count
}

const arr2 = [
	[-9,-9,-9,1,1,1], 
        [0,-9,0,4,3,2],
        [-9,-9,-9,1,2,3],
        [0,0,8,6,6,0],
        [0,0,0,-2,0,0],
        [0,0,1,2,4,0]]


console.time("hourglass test");
console.log(hourglassSum3(arr2))
console.timeEnd("hourglass test");
