function getAllSubStrings(s) {
  let subStrings = [],
    i,
    j;
  for (i = 0; i < s.length; i++) {
    for (j = i + 1; j < s.length + 1; j++) {
      subStrings.push(s.slice(i, j));
      console.log(s.slice(i, j), i, j);
    }
  }
  return subStrings;
}

function isAnagram(str1, str2) {
  const hist = {};

  for (let i = 0; i < str1.length; i++) {
    const char = str1[i];
    if (hist[char]) {
      hist[char]++;
    } else {
      hist[char] = 1;
    }
  }
  //console.log(hist);
  for (let j = 0; j < str2.length; j++) {
    const char = str2[j];
    if (hist[char]) {
      hist[char]--;
    } else {
      //console.log(hist);
      return false;
    }
  }

  //console.log(hist);
  return true;
}

function countAnagrams(currentIndex, arr) {
  const currentElement = arr[currentIndex];
  const arrRest = arr.slice(currentIndex + 1);
  let counter = 0;

  for (let i = 0; i < arrRest.length; i++) {
    if (
      currentElement.length === arrRest[i].length &&
      isAnagram(currentElement, arrRest[i])
    ) {
      counter++;
      //console.log(currentElement, arrRest[i], counter);
    }
    //console.log(currentElement, arrRest[i], counter);
  }

  return counter;
}

let str = "mom";

function sherlockAndAnagrams(s) {
  const duplicatesCount = s.split("").filter((v, i) => s.indexOf(v) !== i)
    .length;

  if (!duplicatesCount) return 0;
  let anagramsCount = 0;

  const arr = getAllSubStrings(s);

  for (let i = 0; i < arr.length; i++) {
    anagramsCount += countAnagrams(i, arr);
  }

  return anagramsCount;
}

console.log(sherlockAndAnagrams("kkkk"));
