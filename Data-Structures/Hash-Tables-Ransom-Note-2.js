function checkMagazine(magazine, note) {
  let canUseMagazine = "Yes";
  let obj = {};
  magazine.forEach(el => {
    obj[el] ? obj[el]++ : (obj[el] = 1);
  });
  note.forEach(el => {
    if (obj[el] !== 0 && obj[el] !== undefined) obj[el]--;
    else canUseMagazine = "No";
  });
  console.log(canUseMagazine);
}

// O(n + m)

let mag1 = ["ive", "got", "a", "lovely", "bunch", "of", "coconuts"];
let note1 = ["ive", "got", "some", "coconuts"];

let mag2 = ["give", "me", "one", "grand", "today", "night"];
let note2 = ["give", "one", "grand", "today"];

// need to fix the case of repetition
let mag3 = ["two", "times", "three", "is", "not", "four"];
let note3 = ["two", "times", "two", "is", "four"];

let mag4 = [
  "apgo",
  "clm",
  "w",
  "lxkvg",
  "mwz",
  "elo",
  "bg",
  "elo",
  "lxkvg",
  "elo",
  "apgo",
  "apgo",
  "w",
  "elo",
  "bg"
];
let note4 = ["elo", "lxkvg", "bg", "mwz", "clm", "w"];
checkMagazine(mag1, note1);
