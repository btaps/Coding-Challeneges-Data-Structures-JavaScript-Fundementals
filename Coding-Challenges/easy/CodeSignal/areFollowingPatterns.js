/*
Given an array strings, determine whether it follows the sequence given in the patterns array. 
In other words, there should be no i and j for which strings[i] = strings[j] and patterns[i] ≠ patterns[j]
or for which strings[i] ≠ strings[j] and patterns[i] = patterns[j].

EXAMPLE:

For strings = ["cat", "dog", "dog"] and patterns = ["a", "b", "b"], the output should be
areFollowingPatterns(strings, patterns) = true;

For strings = ["cat", "dog", "doggy"] and patterns = ["a", "b", "b"], the output should be
areFollowingPatterns(strings, patterns) = false.

*/

function areFollowingPatterns(strings, patterns) {
  // The idea here is instead of using a hashmap
  // We can use the indexOf fn to predict if the word has appeared once already.
  // If so we can just compare the index of strings[i] with patterns[i]
  // If they are a match meaning they appeared at the same time then the pattern is followed.
  // If not then the pattern isn't followed so we return False
  for (let i = 0; i < strings.length; i++) {
    if (strings.indexOf(strings[i]) !== patterns.indexOf(patterns[i]))
      return false;
  }

  return true;
}

console.log(areFollowingPatterns(["cat", "dog", "dog"], ["a", "b", "b"]));
console.log(areFollowingPatterns(["cat", "dog", "doggie"], ["a", "b", "b"]));
