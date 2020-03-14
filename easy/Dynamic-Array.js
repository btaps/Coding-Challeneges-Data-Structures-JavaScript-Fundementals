function Darray(n, queries){
    // Write your code here
  const S = [];
  let lastAnswer = 0
  for(let i=0; i<n; i++){
    S[i] = []
  }

  queries
    .forEach(el=>{
      for(let i=0; i<queries.length;i++){
      
      }
      let q = el[0]
      let x = el[1]
      let y = el[2]
      const seq = ((x ^ lastAnswer) % n)
      
      switch(q){
        case 1:
          S[seq].push(y)
          break;
        case 2:
          const size = S[seq].length;
          const index = y % size;
          lastAnswer = S[seq][index];
          console.log(lastAnswer);
          break;
      }
    })

    if(S[0].length > 1){
      S[0][0] = S[0][S[0].length-1]
      S[0].length = 1
    }
    S.reverse()
  return S
}


const input2 = `2 5
1 0 5
1 1 7
1 0 3
2 1 0
2 1 1`;

console.log(Darray(2 ,[ [ 1, 0, 5 ], [ 1, 1, 7 ], [ 1, 0, 3 ], [ 2, 1, 0 ], [ 2, 1, 1 ] ]))
