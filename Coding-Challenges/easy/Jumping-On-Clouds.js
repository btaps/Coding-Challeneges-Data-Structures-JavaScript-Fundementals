let arr = [0,0,1,0,0,1,0]
let arr2 = [0,0,0,1,0,0]

function jumpingOnClouds(c) {
  let jumps = 0
  for(let i=0;i<c.length;i++){
    if(c[i+1]===1 && c[i+2]===0){
      jumps++
      i+=1
    }else if(c[i+1]===0 && c[i+2]===1){
      jumps++
    }else if(c[i+1]===0 && c[i+2]===0){
      jumps++
      i+=1
    }else if(c[i+1]===0){
      jumps++
    }
  }
  return jumps
}

//jumpingOnClouds(arr2)
console.log(jumpingOnClouds(arr2))
