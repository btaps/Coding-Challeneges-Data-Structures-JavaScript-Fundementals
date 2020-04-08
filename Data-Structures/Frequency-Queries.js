function freqQuery(queries) {
  const numbers = {};
  const counts = {};
  const answer = [];

  queries.forEach(([operation, number]) => {
    console.log(numbers);
    console.log(counts);
    if (operation === 1) {
      counts[numbers[number]] ? counts[numbers[number]]-- : "";
      numbers[number] ? numbers[number]++ : (numbers[number] = 1);
      counts[numbers[number]]
        ? counts[numbers[number]]++
        : (counts[numbers[number]] = 1);
    } else if (operation === 2) {
      counts[numbers[number]] ? counts[numbers[number]]-- : "";
      numbers[number] ? numbers[number]-- : "";
    } else if (operation === 3) {
      answer.push(counts[number] > 0 ? 1 : 0);
    }
  });

  return answer;
}

function freqQuery(queries) {
  const numbers = {};
  const counts = {};

  let result = [];
  queries.forEach(([operation, number]) => {
    console.log(numbers);
    console.log(counts);
    switch (operation) {
      case 1: //Insert
        numbers[number] = numbers[number] || 0;
        if (numbers[number] > 0) {
          counts[numbers[number]] -= 1;
        }
        numbers[number] += 1;
        counts[numbers[number]] = (counts[numbers[number]] || 0) + 1;
        break;
      case 2:
        if (numbers[number] > 0) {
          counts[numbers[number]] -= 1;
          numbers[number] -= 1;
          counts[numbers[number]] = (counts[numbers[number]] || 0) + 1;
        }
        break;
      case 3:
        result.push(counts[number] > 0 ? 1 : 0);
        break;
    }
  });

  return result;
}

/* 
{ 1 : [5]}
{ 1 : [5, 6]}
{ 1 : [5, 6, 10]}
{ 1 : [5, 6], 2: [10]}
{ 1 : [5], 2: [10, 6]}
{ 1 : [], 2: [10, 6], 0 : [5]}

{ '5': 1 }
{ '5': 1, '6': 1 }
{ '5': 1, '6': 1 }
{ '5': 1, '6': 1, '10': 1 }
{ '5': 1, '6': 1, '10': 2 }
{ '5': 1, '6': 2, '10': 2 }
{ '5': 0, '6': 2, '10': 2 }
 *
 *
 *
  * */
let q = [
  [1, 5],
  [1, 6],
  [3, 2],
  [1, 10],
  [1, 10],
  [1, 6],
  [2, 5],
  [3, 2]
];

console.log(freqQuery(q));
