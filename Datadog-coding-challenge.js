// a function takes two strings and returns true or false
// example:
//  compare string 'datadog' with 'd3dog'
//  as long as all the letters are a match and if you run into a number, you can skip that number of spaces
//  continuing, if all letters are a match return true
//  if we have no matchs return false
//    fn(word, pattern string) bool

//fn('datadog', 'd3dog') -> True
//fn('deswdog', 'd1dog') -> False
//fn('deswdog', 'd3dog') -> True
//fn('kubernetes', 'k8s') -> True
//fn('kubernetes', 'a8s') -> False
//fn('datadog', 'datad2') -> True
//

// datadog
// d   dog

function compare(str1, str2) {
  let arr1 = str1.split(""); // datadog
  let arr2 = str2.split(""); // d3dog

  let j = 0;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[j] && parseInt(arr2[j])) {
      i = i + (parseInt(arr2[j]) - 1);
    } else if (arr1[i] !== arr2[j]) {
      return false;
    }
    j++;
  }
  return true;
}

console.log(compare("datadog", "d3dog"));
console.log(compare("kubernetes", "k8s"));
console.log(compare("deswdog", "d1dog"));

console.log(compare("kubernetes", "a8s"));
