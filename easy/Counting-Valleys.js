let num = 12
let str = 'DDUUDDUDUUUD'

function countingValleys(n, s){
  let arr = str.split('')
  let level = 0
  let numOfValleys = 0
  arr.map(e=>{
    e==='U'? level++ : level--
    level === 0 && e === 'U'? numOfValleys++ : ''
  })
  return numOfValleys
}

console.log(countingValleys(num, str))
