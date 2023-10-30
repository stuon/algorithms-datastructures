/* The Vowels Challenge
The challenge is to count the number of vowels (i.e., 'a', 'e', 'i', 'o', 'u') in a given string.
For example: when given the string "Running Egg", it should return 3, as there are three vowels: 'u', 'i' and 'E'.
*/

// Test Case 1: Basic test
console.log(countVowels("Hello, world!"), "Expected: 3");

// Test Case 2: Testing with an empty string
console.log(countVowels(""), "Expected: 0");

// Test Case 3: Testing with a string that contains no vowels
console.log(countVowels("Rhythm"), "Expected: 0");

// Test Case 4: Testing with a string that contains only vowels
console.log(countVowels("aeiouAEIOU"), "Expected: 10");

// Solution 1: Iterative Approach

function countVowels(str) {
  let count = 0;
  for (let char of str) {
    if ('aeiouAEIOU'.includes(char)) {
      count++;
    }
  }
  return count;
}

// Solution 2: Regular Expression

function countVowels2(str) {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}


// Solution 3: Reduce Function

function countVowels3(str) {
  return str.split('').reduce((count, char) => {
    return 'aeiouAEIOU'.includes(char) ? count + 1 : count;
  }, 0);
}