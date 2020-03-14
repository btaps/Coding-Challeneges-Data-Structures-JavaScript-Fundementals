
// reduce ammount of generator by half taking out most popular generators
// create an object and 


let arr = [3,4,6,11,9,9,9,9,8,8,8,8,8,8]

function reduceCapacity(model) {
    // create an object and palce values of each index in object 
   model.sort((a,b)=>a-b)
  let myObject ={}
  model.forEach(num=>{
    if(myObject[`${num}`]){
      myObject[`${num}`]++
    }else{
      myObject[`${num}`] = 1
    }
  })
  // place in array and find max value
  let values = Object.values(myObject)
  let keys = Object.keys(myObject) 
  let max = Math.max(...values)
  let indexOfMax = values.indexOf(max)
  
  let numberToCut = model.length/2
  let count = 0
  
  while(model.length>= numberToCut){
    console.log(model, values, keys)
    model = model.filter(num=> num!==parseInt(keys[indexOfMax]))  
    values = values.filter(num=> num!==parseInt(keys[indexOfMax]))
    keys = keys.filter(num=> num!==keys[indexOfMax])
    count++
  }
  return count   
}

console.log(reduceCapacity(arr))
